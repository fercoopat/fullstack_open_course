export default function Notification({ notification }) {
  if (notification?.message === null || !notification?.message) {
    return null;
  }
  return <div className={notification?.type}>{notification?.message}</div>;
}
