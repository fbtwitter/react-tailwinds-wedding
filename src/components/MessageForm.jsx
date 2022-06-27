import { useState, useEffect, useContext } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import MessageContext from '../context/MessageContext'

function MessageForm() {
  const { addMessage, updateMessage, messageEdit, setMessageEdit } =
    useContext(MessageContext)
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (messageEdit.edit === true) {
      setBtnDisabled(false)
      setText(messageEdit.item.text)
    }
  }, [messageEdit])

  const handleSubmit = (ev) => {
    ev.preventDefault()
    if (text.trim().length > 3) {
      const newMessage = {
        text,
        completed: false,
      }

      if (messageEdit.edit === true) {
        updateMessage(messageEdit.item.id, newMessage)
      } else {
        addMessage(newMessage)
      }

      setMessageEdit({
        item: {},
        edit: false,
      })
      setText('')
    }
  }

  const handleTextChange = (ev) => {
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 3) {
      setMessage('Text must be at least 5 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(ev.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="relative z-10 bg-white/70 p-4">
        <h2 className="font-['Dancing_Script'] text-3xl py-4 text-teal-900 font-bold">
          Tulis pesan disini
        </h2>
        <div className="flex flex-col gap-4">
          <div>
            <div>
              <input
                onChange={handleTextChange}
                type="text"
                value={text}
                className="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md p-4"
                placeholder="Tuliskan Namamu"
                aria-describedby="name-description"
              />
            </div>
            {message && (
              <p
                className="mt-2 text-base text-left text-gray-500"
                id="name-description"
              >
                {message}
              </p>
            )}
          </div>
          <div>
            <div className="mt-1">
              <textarea
                rows={5}
                name="pesan"
                id="pesan"
                className="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm p-4 border-gray-300 rounded-md"
                placeholder="Tuliskan Pesanmu..."
                defaultValue={''}
              />
            </div>
          </div>
          <div className="mt-2 flex justify-end">
            {/* <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Post
            </button> */}
            <Button type="submit" version="primary" isDisabled={btnDisabled}>
              Send
            </Button>
          </div>
        </div>
        {/* {message && <div className="message">{message}</div>} */}
      </form>
    </>
  )
}

export default MessageForm
