import { useContext } from "react";
import NotificationContext from "./NotificationContext";

function NotificationDemo() {
  const { count } = useContext(NotificationContext);

  return (
    <div>
      <h2>WhatsApp Notifications</h2>
      <p>Unread Messages: {count}</p>
    </div>
  );
}

export default NotificationDemo;