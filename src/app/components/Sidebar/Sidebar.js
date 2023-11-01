import SidebarBottomContainer from "./SidebarBottomContainer";
import SidebarTopContainer from "./SidebarTopContainer";

export default function Sidebar() {
    return (
        <div className="sidebar h-screen p-6 w-80 flex flex-col justify-between">
        <SidebarTopContainer />
        <SidebarBottomContainer />
      </div>
    );
}