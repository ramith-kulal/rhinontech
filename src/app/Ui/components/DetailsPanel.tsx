"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUser, faPlus, faLink, faMessage 
} from "@fortawesome/free-solid-svg-icons";
export default function DetailsPanel() {
  const [selectedTab, setSelectedTab] = useState("details");

  return (
    <div className="bg-white p-6 m-6 rounded-xl shadow-lg space-y-6 w-sm text-xs">
      <div className="flex space-x-6 border-b pb-2">
        <div
          className={`cursor-pointer px-4 py-2 text-sm font-semibold ${
selectedTab === "details" ? "text-gray-900" : "text-gray-500"
} flex items-center justify-center relative`}
          onClick={() => setSelectedTab("details")}
        >
          <span>Details</span>
          {selectedTab === "details" && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 rounded-full" />
          )}
        </div>
        <div
          className={`cursor-pointer px-4 py-2 text-sm font-semibold ${
            selectedTab === "copilot" ? "text-gray-900" : "text-gray-500"
          } flex items-center justify-center relative`}
          onClick={() => setSelectedTab("copilot")}
        >
          <span>Copilot</span>
          {selectedTab === "copilot" && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 rounded-full" />
          )}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center font-semibold">
          <span className="text-gray-700">Assignee</span>
          <span className="text-gray-600 font-normal">Ramith Kulal</span>
        </div>
        <div className="flex justify-between items-center font-semibold">
          <span className="text-gray-700">Team Inbox</span>
          <div className="flex items-center space-x-2 font-normal">
            <span className="text-gray-600">Unassigned</span>
            <FontAwesomeIcon icon={faUser} className="text-gray-400 text-xs" />
          </div>
        </div>
      </div>

      <div className="space-y-5 mt-9">
        <div className="flex items-center space-x-2  text-black font-bold">
          <FontAwesomeIcon icon={faLink} className="text-black" />
          <span>Links</span>
        </div>
        <div className="flex justify-between items-center font-semibold">
          <span className="text-gray-600">Tracker Ticket</span>
          <FontAwesomeIcon icon={faPlus} className="text-gray-400 text-xs" />
        </div>
        <div className="flex justify-between items-center font-semibold">
          <span className="text-gray-600">Back Office Tickets</span>
          <FontAwesomeIcon icon={faPlus} className="text-gray-400 text-xs" />
        </div>
        <div className="flex justify-between items-center font-semibold">
          <span className="text-gray-600">Side Conversations</span>
          <FontAwesomeIcon icon={faPlus} className="text-gray-400 text-xs" />
        </div>
      </div>
      <div className="space-y-5 mt-9">
        <div className="flex items-center space-x-2 font-semibold text-black">
          <FontAwesomeIcon icon={faMessage} className="text-black" />
          <span>Conversation Attributes</span>
        </div>
        <div className="grid  gap-3 font-semibold">
          <div className="flex justify-between text-gray-600">
            <span>ID</span>
            <span>#12345</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Brand</span>
            <span>the Product Space</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Subject</span>
            <span>+ Add</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Language</span>
            <span>English</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>External ID</span>
            <span>+ Add</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Workspace</span>
            <span>--------</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Copilot Used</span>
            <span>True</span>
          </div>
        </div>
      </div>

      <div className="space-y-3 text-sm">
        <div className="font-semibold text-black flex items-center space-x-2">
          <FontAwesomeIcon icon={faPlus} className="text-gray-900" />
          <span>Topic</span>
        </div>
        <div className="flex justify-between items-center font-semibold">
        
        </div>
      </div>

  
      <div className="space-y-5 text-sm">
        <div className="flex items-center space-x-2  text-gray-900">
          <FontAwesomeIcon icon={faUser} className="text-black" />
          <span className="text-sm ">User Data</span>
        </div>
        <div className="flex justify-between items-center font-semibold">
          <div className="flex items-center space-x-2 text-black">
            <FontAwesomeIcon icon={faMessage} className="text-black text-xs" />
            <span>Recent Conversations</span>
          </div>
        </div>
        <div className="flex justify-between items-center font-semibold">
          <div className="flex items-center space-x-2 text-black">
            <FontAwesomeIcon icon={faUser} className="text-black text-xs" />
            <span>User Notes</span>
          </div>
        </div>
      </div>
    </div>
  );
}
