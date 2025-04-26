"use client";

import React from "react";

export default function NotificationBanner() {
  return (
    <div className="bg-blue-100 w-full flex items-center justify-between px-6 py-2 mt-3 border border-blue-300 rounded-md shadow-sm">
      <div className="text-sm text-gray-800 font-medium flex items-center gap-3">
        <span>You have 9 days left in your Expert trial.</span>
        
        <button className="bg-black text-white text-xs font-semibold px-3 py-1.5 rounded-md">
          Buy Intercom
        </button>
        
        <span className="text-sm text-gray-700 font-normal">
          Need help onboarding? Ask a product specialist.
        </span>
      </div>
    </div>
  );
}
