"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInbox,
  faComments,
  faBookOpen,
  faChartSimple,
  faPaperPlane,
  faUsers,
  faSearch,
  faGear,
  faUser
} from "@fortawesome/free-solid-svg-icons"
import { faIntercom } from "@fortawesome/free-brands-svg-icons"

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[50px] bg-zinc-100 text-black flex flex-col justify-between py-4 shadow-md">
      

      <div className="flex flex-col items-center">

        <FontAwesomeIcon
          icon={faIntercom}
          className="w-5 h-5 hover:text-gray-600 cursor-pointer"
        />


        <div className="flex flex-col gap-6 mt-8">

          <div className="relative">
            <FontAwesomeIcon
              icon={faInbox}
              className="w-5 h-5 hover:text-gray-600 cursor-pointer"
            />
            <span className="absolute -top-2 -right-2 bg-red-300 text-black text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
              4
            </span>
          </div>

          <FontAwesomeIcon
            icon={faComments}
            className="w-5 h-5 hover:text-gray-600 cursor-pointer"
          />


          <FontAwesomeIcon
            icon={faBookOpen}
            className="w-5 h-5 hover:text-gray-600 cursor-pointer"
          />


          <FontAwesomeIcon
            icon={faChartSimple}
            className="w-5 h-5 hover:text-gray-600 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faPaperPlane}
            className="w-5 h-5 hover:text-gray-600 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faUsers}
            className="w-5 h-5 hover:text-gray-600 cursor-pointer"
          />

        </div>
      </div>

      <div className="flex flex-col gap-6 items-center">
  
        <FontAwesomeIcon
          icon={faSearch}
          className="w-5 h-5 hover:text-gray-600 cursor-pointer"
        />

        <FontAwesomeIcon
          icon={faGear}
          className="w-5 h-5 hover:text-gray-600 cursor-pointer"
        />

        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
          <FontAwesomeIcon
            icon={faUser}
            className="w-4 h-4 text-gray-500"
          />
        </div>
      </div>

    </aside>
  )
}
