/* eslint-disable react/prop-types */
import { useState } from "react";

// Reusable Notifications Component
const Notifications = ({ initialNotifications, propertyNotificationsData, isOpen }) => {
  const [notifications, setNotifications] = useState(isOpen === "propertyTip" ? propertyNotificationsData : initialNotifications);


  console.log("notifications:", notifications);



  // Close a single notification
  const closeNotification = (id) => {
    setNotifications(notifications.filter((item) => item.id !== id));
  };

  // Close all notifications
  const closeAllNotifications = () => {
    setNotifications([]);
  };

  return (
    notifications.length > 0 && (
      <div className="tw-mt-4">
        {/* Header with Close All */}
        {isOpen === "propertyTip" ? (
          <div className="">

          </div>
        ) : (
          <div className="tw-flex tw-gap-3 tw-items-center tw-mb-4">
            <h2 className="tw-text-lg tw-font-bold tw-text-white">NOTIFICATIONS</h2>
            <button
              onClick={closeAllNotifications}
              className="tw-text-gray-400 hover:tw-text-red-500 tw-transition"
            >
              &#x2715; {/* Close All Button */}
            </button>
          </div>
        )}


        {/* Notifications Scrollable Container */}
        <div className="tw-flex tw-overflow-x-auto tw-scrollbar-hide tw-space-x-4">
          {notifications.map((item) => (
            <div
              key={item.id}
              className="tw-relative tw-bg-[var(--third-color)] tw-rounded-lg"
            >
              <button
                onClick={() => closeNotification(item.id)}
                className="tw-absolute tw-top-2 tw-right-2 tw-text-black hover:tw-text-red-500 tw-transition"
              >
                &#x2715; {/* Close Button */}
              </button>
              {isOpen === "propertyTip" ?
                <div className="tw-w-[300px] tw-h-20 tw-rounded-md tw-text-white tw-text-sm tw-p-2 tw-bg-black/25">
                  {item.text}
                </div>
                : <div className="tw-w-[300px]">
                  <img
                    src={item.image_url}
                    alt="Notification"
                    className="tw-w-full tw-h-36 tw-object-cover tw-rounded"
                  />
                </div>}

            </div>
          ))}
        </div>
      </div >
    )
  );
};

export default Notifications;
