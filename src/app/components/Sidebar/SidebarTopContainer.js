import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";

export default function SidebarTopContainer() {
    return (<div className='sidebar-topContainer space-y-8'>
    <SidebarHeader />
    <SidebarMenu />
  </div>);
}