import React, { useEffect, useState } from "react";

const OnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <>
      {/* 🖥️ Desktop View – Top Right Floating */}
      <div
        className={`hidden sm:flex fixed top-5 right-5 px-2 py-1 rounded-full text-xs font-semibold z-[9999]
          transition-all duration-300 ease-in-out
          bg-gradient-to-r from-blue-600 to-pink-600 text-white border border-blue-500
          ${isOnline ? 'scale-100' : 'scale-90 opacity-75'}
          animate-pulse
        `}
        style={{
          fontFamily: 'sans-serif',
          cursor: 'pointer',
        }}
      >
        {isOnline ? "Online 🟢" : "Offline 🔴"}
      </div>

      {/* 📱 Mobile View – Between logo and toggle in navbar */}
      <div
        className={`flex sm:hidden px-2 py-1 rounded-full text-xs font-semibold
          bg-gradient-to-r from-blue-600 to-pink-600 text-white border border-blue-500
          ${isOnline ? 'scale-100' : 'scale-90 opacity-75'}
          animate-pulse
        `}
        style={{
          fontFamily: 'sans-serif',
          cursor: 'pointer',
        }}
      >
        {isOnline ? "Online 🟢" : "Offline 🔴"}
      </div>
    </>
  );
};

export default OnlineStatus;
