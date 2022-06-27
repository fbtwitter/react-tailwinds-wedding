import { useContext } from 'react'
import MessageContext from '../context/MessageContext'

function MessageProperties() {
  const { filteredMessage, setStatus } = useContext(MessageContext)
  const handleStatusChange = (ev) => {
    setStatus(ev.target.value)
  }

  return (
    <div className="message-properties my-4">
      <h4 className="text-lg font-['Arvo'] text-slate-600">
        {filteredMessage.length} Pesan
      </h4>
      {/* <select
        onChange={handleStatusChange}
        name="messages"
        className="message-filter"
      >
        <option value="all">All</option>
        <option value="completed">Done</option>
        <option value="uncompleted">Not Done</option>
      </select> */}
    </div>
  )
}

export default MessageProperties
