import React, { useEffect, useState } from "react";
import Vapi from "@vapi-ai/web";

const Assistant = () => {
  const [isAssistantActive, setIsAssistantActive] = useState(false);

  useEffect(() => {
    const key = import.meta.env.VITE_VAPI_API_KEY;
    console.log("Loaded VAPI key:", key);

    const vapi = new Vapi(key);
    window.vapi = vapi;

    vapi.on("call-start", () => {
      console.log("Assistant call started");
    });

    vapi.on("call-end", () => {
      console.log("Assistant call ended");
    });

    vapi.on("error", (e) => {
      console.error("Vapi error:", e);
    });
  }, []);

  const startCall = () => {
    console.log("Start clicked");
    window.vapi.start({
      model: {
        provider: "openai",
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful personal assistant.",
          },
        ],
      },
      voice: {
        provider: "11labs",
        voiceId: "burt",
      },
    });
  };

  const stopCall = () => {
    console.log("Stop clicked");
    window.vapi.stop();
  };

  const toggleAssistant = () => {
    setIsAssistantActive(!isAssistantActive);
  };

  return (
    <div>
      {/* Desktop Assistant Panel */}
      <div
        className={`fixed right-[10px] top-1/2 transform -translate-y-1/2 h-[450px] w-[320px] bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-6 rounded-xl text-white shadow-2xl transition-all duration-300 ease-in-out z-50 border border-blue-700 ${
          isAssistantActive ? "translate-x-0" : "translate-x-[calc(100%+20px)]"
        } hidden md:block`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Personal Assistant
          </h2>
          <button
            onClick={toggleAssistant}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        
        <div className="flex flex-col space-y-4 h-[calc(100%-80px)]">
          <div className="flex-1 bg-gray-800 bg-opacity-50 rounded-lg p-4 overflow-y-auto mb-4 border border-blue-800 flex items-center justify-center">
            <div className="text-center">
              <p className="text-blue-300 text-lg font-medium mb-2">Hello!</p>
              <p className="text-gray-300 text-sm">I'm your personal assistant</p>
              <p className="text-gray-300 text-sm">How can I help you today?</p>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <button
              onClick={startCall}
              className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Start
            </button>
            <button
              onClick={stopCall}
              className="flex-1 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Stop
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Assistant Panel */}
      <div
        className={`fixed inset-x-0 mx-auto bottom-0 w-[calc(100%-20px)] max-w-md h-[300px] bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 p-6 text-white rounded-t-xl shadow-2xl transition-all duration-300 ease-in-out z-50 border-t border-blue-700 ${
          isAssistantActive ? "translate-y-0" : "translate-y-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Personal Assistant
          </h2>
          <button
            onClick={toggleAssistant}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        
        <div className="flex flex-col space-y-3 h-[calc(100%-80px)]">
          <div className="flex-1 bg-gray-800 bg-opacity-50 rounded-lg p-3 overflow-y-auto mb-3 border border-blue-800 flex items-center justify-center">
            <div className="text-center">
              <p className="text-blue-300 text-md font-medium mb-1">Hello!</p>
              <p className="text-gray-300 text-xs">I'm your personal assistant</p>
              <p className="text-gray-300 text-xs">How can I help you today?</p>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={startCall}
              className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white py-2 px-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Start
            </button>
            <button
              onClick={stopCall}
              className="flex-1 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white py-2 px-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Stop
            </button>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleAssistant}
        className={`fixed bottom-6 right-6 w-14 h-14 flex items-center justify-center bg-gradient-to-br from-blue-700 to-cyan-600 text-white rounded-full shadow-xl z-40 transition-all duration-300 transform ${
          isAssistantActive ? "rotate-180 bg-gray-800" : "rotate-0 hover:scale-110"
        }`}
      >
        {isAssistantActive ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Assistant;