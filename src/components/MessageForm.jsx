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
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>
          Write your notes!{' '}
          <span className="block">
            {' '}
            Alhamdulillahi jaza Kumullohu Khoiro, Thank you!
          </span>
        </h2>
        <div className="input-group" style={{ marginTop: '1rem' }}>
          <input
            onChange={handleTextChange}
            type="text"
            value={text}
            placeholder="Write a note"
            aria-label="Input Message"
          />
          <Button type="submit" version="primary" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default MessageForm
