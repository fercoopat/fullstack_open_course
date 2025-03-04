export default function Notification({ notification }) {
  if (!notification.message) {
    return null;
  }
  return (
    <div className={`notification ${notification.type}`}>
      <p>{notification.message}</p>
    </div>
  );
}
