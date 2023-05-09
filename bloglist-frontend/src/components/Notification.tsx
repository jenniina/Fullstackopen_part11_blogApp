import { useSelector } from 'react-redux'
import { reducerProps } from '../interfaces'

const Notification = () => {
  const notification = useSelector((state: reducerProps) => state.notification)

  if (notification === null) {
    return null
  }

  return (
    <div className={`message ${notification.isError ? 'error' : ''}`}>
      {notification.message}
    </div>
  )
}

export default Notification
