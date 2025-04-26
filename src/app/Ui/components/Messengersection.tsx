"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faEllipsisH, faMoon, faArchive, faBolt, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export function MessengerSection() {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    console.log(message);
    setMessage("");
  };

  return (
    <div className="flex-1 max-w-[450px] relative border-l  flex flex-col overflow-hidden pt-7">
      
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <p className="font-bold text-gray-900 text-[18px]">Messenger</p>
        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faStar} className="text-black cursor-pointer" />
          <FontAwesomeIcon icon={faEllipsisH} className="text-black cursor-pointer" />
          <FontAwesomeIcon icon={faMoon} className="text-black cursor-pointer" />
          <FontAwesomeIcon icon={faArchive} className="text-black cursor-pointer" />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-6 px-4 pt-6 pb-24">
        {/* Random Message 1 */}
        <div className="bg-gray-100 p-3 rounded-md">
          <p className="text-gray-800 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="bg-gray-100 p-3 rounded-md">
          <p className="text-gray-800 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quaerat alias ipsam consectetur dolorum quisquam beatae, culpa odio fugit eos.
          </p>
        </div>

        <div className="bg-gray-100 p-3 rounded-md">
          <p className="text-gray-800 text-sm leading-relaxed">
            <a href="#" className="text-blue-500 underline">Install Messenger</a> <span className="text-gray-500 text-xs">5d</span>
          </p>
        </div>

        

      </div>


  <div className="absolute bottom-8 left-0 right-0 p-4 bg-white">
    <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-md pb-4">
      <FontAwesomeIcon icon={faBolt} className="text-black text-sm" />
      <input
        type="text"
        className="flex-grow bg-gray-100 outline-none text-sm text-gray-800 w-2xl"
        placeholder=""
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={handleSendMessage}
        className="flex items-center gap-1 p-2 rounded-full focus:outline-none"
      >
        <span className="text-white text-sm">Send</span>
        <FontAwesomeIcon icon={faChevronDown} className="text-gray-500 text-xs" />
      </button>
    </div>
  </div>
</div>
  );
}
