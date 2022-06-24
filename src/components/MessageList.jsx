import MessageItem from './MessageItem'
import { useContext } from 'react'
import MessageContext from '../context/MessageContext'

function MessageList() {
  const { filteredMessage, isLoading } = useContext(MessageContext)

  if (!isLoading && (!filteredMessage || filteredMessage.length === 0)) {
    return <p>No Message yet!</p>
  }

  return (
    <div className="message-list">
      {filteredMessage &&
        filteredMessage.map((item) => (
          <MessageItem key={item.id} item={item} />
        ))}
    </div>
  )
}

export default MessageList
