import { useContext } from 'react'
import MessageContext from '../context/MessageContext'

function MessageProperties() {
  const { filteredMessage, setStatus } = useContext(MessageContext)
  const handleStatusChange = (ev) => {
    setStatus(ev.target.value)
  }

  return (
    <div className="message-properties">
      <h4>{filteredMessage.length} Tasks</h4>
      <select
        onChange={handleStatusChange}
        name="messages"
        className="message-filter"
      >
        <option value="all">All</option>
        <option value="completed">Done</option>
        <option value="uncompleted">Not Done</option>
      </select>
    </div>
  )
}

export default MessageProperties
