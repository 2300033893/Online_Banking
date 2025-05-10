import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNotification, removeNotification } from "./redux/notificationSlice";

const NotificationComponent = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications);

  return (
    <div className="p-4 max-w-md mx-auto">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={() => dispatch(addNotification("New Notification!"))}
      >
        Add Notification
      </button>
      <ul className="mt-4 space-y-2">
        {notifications.map((notification) => (
          <li key={notification.id} className="flex justify-between bg-gray-100 p-2 rounded-md">
            <span>{notification.message}</span>
            <button
              className="text-red-500"
              onClick={() => dispatch(removeNotification(notification.id))}
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationComponent;