export default function Notification({ message, type }) {
  if (message === null || !message) {
    return null;
  }
  return <div className={type}>{message}</div>;
}
