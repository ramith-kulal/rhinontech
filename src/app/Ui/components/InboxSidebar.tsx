"use client"

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUser,
  faAt,
  faPencilAlt,
  faUserFriends,
  faSearch,
  faChevronDown,
  faEye,
  faBars,
  faPlus,
  faListAlt 
} from "@fortawesome/free-solid-svg-icons"

interface SidebarItemProps {
  icon?: any
  label: string
  count?: number
  active: boolean
  onClick: () => void
  emojiIcon?: string
  showPlus?: boolean
  noLeftIcon?: boolean
}

function SidebarItem({ icon, label, count, active, onClick, emojiIcon, showPlus, noLeftIcon }: SidebarItemProps) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-between px-2 py-1 rounded-md cursor-pointer ${
        active ? "bg-white shadow-sm" : "hover:bg-gray-100"
      }`}
    >
      <div className="flex items-center gap-2">
        {!noLeftIcon ? (
          emojiIcon ? (
            <div className="text-[15px]">{emojiIcon}</div>
          ) : (
            icon && <FontAwesomeIcon icon={icon} className="w-3.5 h-3.5 text-gray-900" />
          )
        ) : null}
        <span className="text-[14px] font-semibold text-gray-900">{label}</span>
      </div>
      {showPlus ? (
        <FontAwesomeIcon icon={faPlus} className="w-3 h-3 text-gray-700" />
      ) : count !== undefined ? (
        <div className="text-[11px] text-gray-700 font-semibold">{count}</div>
      ) : null}
    </div>
  )
}

export function InboxSidebar() {
  const [active, setActive] = useState("Your Inbox")

  return (
    <div className="ml-[60px] w-[240px] h-screen bg-white border-r border-gray-200 px-5 pt-10 pb-10 flex flex-col gap-3 overflow-hidden">

      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-bold text-gray-900">Inbox</h2>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faSearch} className="w-4 h-4 text-gray-700 cursor-pointer" />
          <div className="relative w-7 h-7 bg-white rounded-full flex items-center justify-center border border-gray-300">
            <FontAwesomeIcon icon={faPlus} className="w-4 h-4 text-gray-900" />
          </div>
        </div>
      </div>


      <div className="flex flex-col gap-1">
        <SidebarItem
          icon={faUser}
          label="Your Inbox"
          count={4}
          active={active === "Your Inbox"}
          onClick={() => setActive("Your Inbox")}
        />
        <SidebarItem
          icon={faAt}
          label="Mentions"
          count={2}
          active={active === "Mentions"}
          onClick={() => setActive("Mentions")}
        />
        <SidebarItem
          icon={faPencilAlt}
          label="Created by You"
          count={1}
          active={active === "Created by You"}
          onClick={() => setActive("Created by You")}
        />
        <SidebarItem
          icon={faUserFriends}
          label="All"
          count={6}
          active={active === "All"}
          onClick={() => setActive("All")}
        />
        <SidebarItem
          icon={faUser}
          label="Unassigned"
          count={3}
          active={active === "Unassigned"}
          onClick={() => setActive("Unassigned")}
        />

   
        <SidebarItem
          icon={faBars}
          label="Dashboard"
          active={active === "Dashboard"}
          onClick={() => setActive("Dashboard")}
        />
      </div>

      <div className="h-5" />

      <div className="flex flex-col gap-1">
        <SidebarItem
          label="Fin AI Agent"
          active={active === "Fin AI Agent"}
          onClick={() => setActive("Fin AI Agent")}
          showPlus
          noLeftIcon
        />
        <SidebarItem
          label="Teammates"
          active={active === "Teammates"}
          onClick={() => setActive("Teammates")}
          showPlus
          noLeftIcon
        />
        <SidebarItem
          label="Team Inboxes"
          active={active === "Team Inboxes"}
          onClick={() => setActive("Team Inboxes")}
          showPlus
          noLeftIcon
        />
      </div>

      {/* Views Section */}
      <div className="flex flex-col gap-1 mt-5">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-[11px] font-bold text-gray-500 uppercase">Views</h3>
          <FontAwesomeIcon icon={faChevronDown} className="w-2.5 h-2.5 text-gray-500" />
        </div>

        <SidebarItem
          icon={faEye}
          label="Messenger"
          count={1}
          active={active === "Messenger"}
          onClick={() => setActive("Messenger")}
        />
        <SidebarItem
          emojiIcon="📧"
          label="Email"
          count={2}
          active={active === "Email"}
          onClick={() => setActive("Email")}
        />
        <SidebarItem
          emojiIcon="👋"
          label="WhatsApp & Social"
          count={5}
          active={active === "WhatsApp & Social"}
          onClick={() => setActive("WhatsApp & Social")}
        />
        <SidebarItem
          emojiIcon="📱"
          label="Phone and SMS"
          count={2}
          active={active === "Phone and SMS"}
          onClick={() => setActive("Phone and SMS")}
        />
        <SidebarItem
          emojiIcon="🎟️"
          label="Tickets"
          count={4}
          active={active === "Tickets"}
          onClick={() => setActive("Tickets")}
        />
      </div>

      <div className="flex-grow" />



    </div>
  )
}
