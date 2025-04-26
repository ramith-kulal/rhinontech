"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export function MessagesSidebar() {
  const [selected, setSelected] = useState<string>("");

  const handleSelect = (name: string) => {
    setSelected(name);
  };

  return (
    <div className="w-[320px] pt-9 p-4 border-l h-[calc(100vh-70px)] overflow-hidden">
      {/* Top Profile Section */}
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gray-100 p-2 rounded-md">
          <FontAwesomeIcon icon={faBox} className="text-gray-500" size="lg" />
        </div>
        <p className="font-bold text-gray-900 text-[17px]">Ramith Kulal</p>
      </div>

      {/* Open | Newest Activity */}
      <div className="flex items-center justify-between text-gray-800 text-[14px] font-semibold mb-6">
        <div className="flex items-center gap-1">
          <p>Open</p>
          <FontAwesomeIcon icon={faChevronDown} className="text-gray-700" size="xs" />
        </div>
        <div className="flex items-center gap-1">
          <p>Newest Activity</p>
          <FontAwesomeIcon icon={faChevronDown} className="text-gray-700" size="xs" />
        </div>
      </div>

      {/* Messages Section */}
      <div className="space-y-6 border-r pr-4">
        {/* Messenger */}
        <div
          className={`flex items-center gap-3 cursor-pointer p-2 rounded-lg transition-all duration-300 ${
            selected === "Messenger" ? "shadow-lg bg-white" : ""
          }`}
          onClick={() => handleSelect("Messenger")}
        >
          <div className="bg-blue-200 text-gray-800 rounded-full w-9 h-9 flex items-center justify-center text-[14px] font-bold">
            M
          </div>
          <div className="text-sm">
            <p className="font-semibold text-gray-900">Messenger [Demo]</p>
            <p className="text-gray-500 text-xs">Install Messenger · 5d</p>
          </div>
        </div>

        {/* Email */}
        <div
          className={`flex items-center gap-3 cursor-pointer p-2 rounded-lg transition-all duration-300 ${
            selected === "Email" ? "shadow-lg bg-white" : ""
          }`}
          onClick={() => handleSelect("Email")}
        >
          <div className="bg-green-200 text-gray-800 rounded-full w-9 h-9 flex items-center justify-center text-[14px] font-bold">
            E
          </div>
          <div className="text-sm">
            <p className="font-semibold text-gray-900">Email [Demo]</p>
            <p className="text-gray-500 text-xs">This is a demo message · 5d</p>
          </div>
        </div>

        {/* WhatsApp */}
        <div
          className={`flex items-center gap-3 cursor-pointer p-2 rounded-lg transition-all duration-300 ${
            selected === "WhatsApp" ? "shadow-lg bg-white" : ""
          }`}
          onClick={() => handleSelect("WhatsApp")}
        >
          <div className="bg-yellow-200 text-gray-800 rounded-full w-9 h-9 flex items-center justify-center text-[14px] font-bold">
            W
          </div>
          <div className="text-sm">
            <p className="font-semibold text-gray-900">WhatsApp</p>
            <p className="text-gray-500 text-xs">Demo message · 5d</p>
          </div>
        </div>

        {/* Phone & SMS */}
        <div
          className={`flex items-center gap-3 cursor-pointer p-2 rounded-lg transition-all duration-300 ${
            selected === "Phone & SMS" ? "shadow-lg bg-white" : ""
          }`}
          onClick={() => handleSelect("Phone & SMS")}
        >
          <div className="bg-purple-200 text-gray-800 rounded-full w-9 h-9 flex items-center justify-center text-[14px] font-bold">
            P
          </div>
          <div className="text-sm">
            <p className="font-semibold text-gray-900">Phone & SMS</p>
            <p className="text-gray-500 text-xs">Demo message · 5d</p>
          </div>
        </div>
      </div>
    </div>
  );
}
