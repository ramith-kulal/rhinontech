import { Sidebar } from "../app/Ui/components/sidebar";
import DetailsPanel from "./Ui/components/DetailsPanel";
import { InboxSidebar } from "./Ui/components/InboxSidebar";
import { MessagesSidebar } from "./Ui/components/MessagesSidebar";
import { MessengerSection } from "./Ui/components/Messengersection";
import NotificationBanner from "./Ui/components/NotificationBanner";

export default function Home() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="ml-[80px]">
            <NotificationBanner />
          </div>
          <div className="flex w-full">
            <InboxSidebar />
            <MessagesSidebar />
            <MessengerSection />
            <DetailsPanel />
          </div>

        </div>
      </div>
    </>
  );
}
