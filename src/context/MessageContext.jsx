import { createContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const MessageContext = createContext()

export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [filteredMessage, setFilteredMessage] = useState([])
  const [messageEdit, setMessageEdit] = useState({
    item: {},
    edit: false,
  })

  const [status, setStatus] = useState('all')

  // useEffect(() => {
  //     fetchMessage()
  // }, [])

  // const fetchMessage = async () => {
  //     const response = await fetch(
  //         `http://localhost:5000/message?_sort=id&_order=desc`
  //     )

  //     const data = await response.json()

  //     setMessage(data)
  //     setIsLoading(false)
  // }

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredMessage(message.filter((item) => item.completed === true))
        break
      case 'uncompleted':
        setFilteredMessage(message.filter((item) => item.completed === false))
        break
      default:
        setFilteredMessage(message)
        break
    }
  }

  useEffect(() => {
    filterHandler()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message, status])

  const addMessage = async (newMessage) => {
    // const response = await fetch(`http://localhost:5000/message`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(newMessage),
    // })

    // const data = await response.json()

    newMessage.id = uuidv4()
    setMessage([newMessage, ...message])
  }

  const updateMessage = async (id, updItem) => {
    // const response = await fetch(`http://localhost:5000/message/${id}`, {
    //     method: 'PUT',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(updItem),
    // })

    // const data = await response.json()

    const updateMessage = message.map((item) =>
      item.id === id ? { ...item, ...updItem } : item
    )

    setMessage(updateMessage)
  }

  const editMessage = (item) => {
    setMessageEdit({
      item,
      edit: true,
    })
  }

  const deleteMessage = async (id) => {
    if (window.confirm('Are you sure you want to delete ?')) {
      // await fetch(`http://localhost:5000/message/${id}`, {
      //     method: 'DELETE',
      // })
      setMessage(message.filter((item) => item.id !== id))
    }
  }

  const completedMessage = async (id, item) => {
    // const newMessage = {
    //     id: item.id,
    //     text: item.text,
    //     completed: !item.completed,
    // }

    // const response = await fetch(`http://localhost:5000/message/${item.id}`, {
    //     method: 'PUT',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(newMessage),
    // })

    // const data = await response.json()

    // setMessage(
    //     message.map((item) => (item.id === id ? { ...item, ...data } : item))
    // )

    const completedMessage = message.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    )

    setMessage(completedMessage)
  }

  return (
    <MessageContext.Provider
      value={{
        message,
        setMessage,
        isLoading,
        setIsLoading,
        status,
        setStatus,
        messageEdit,
        setMessageEdit,
        filteredMessage,
        setFilteredMessage,
        addMessage,
        editMessage,
        completedMessage,
        deleteMessage,
        updateMessage,
      }}
    >
      {children}
    </MessageContext.Provider>
  )
}

export default MessageContext
