// import PropTypes from 'prop-types'
import Card from './shared/Card'
import { FaEdit, FaCheck, FaTimes } from 'react-icons/fa'
import { useContext } from 'react'
import MessageContext from '../context/MessageContext'

function MessageItem({ item }) {
  const { editMessage, completedMessage, deleteMessage } =
    useContext(MessageContext)

  return (
    <Card>
      <p
        className={`text-display ${
          item.completed === true ? 'text-completed' : ''
        }`}
      >
        {item.text}
      </p>
      <button
        className="completed"
        onClick={() => completedMessage(item.id, item)}
      >
        <FaCheck color="#242533" />
      </button>
      <button className="edit" onClick={() => editMessage(item)}>
        <FaEdit color="#242533" />
      </button>
      <button className="close" onClick={() => deleteMessage(item.id)}>
        <FaTimes color="#242533" />
      </button>
    </Card>
  )
}

export default MessageItem
