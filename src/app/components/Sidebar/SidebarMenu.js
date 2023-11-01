import {GrHomeRounded, GrShareOption} from "react-icons/gr";
import {FiFolder} from "react-icons/fi";
import {BsBookmark, BsQuestionCircle} from "react-icons/bs";
import {RiDeleteBin6Line, RiSettings4Line} from "react-icons/ri";

export default function SidebarMenu() {

    const Menus = [
        {title: "Home", icon: <GrHomeRounded />},
        {title: "All Files", icon: <FiFolder />},
        {title: "Saved", icon: <BsBookmark />},
        {title: "Integrations", icon: <GrShareOption />},
        {title: "Trash", icon: <RiDeleteBin6Line />},
        {title: "Settings", icon: <RiSettings4Line />},
        {title: "Help and Support", icon: <BsQuestionCircle />}
      ];

    return (<div className='sidebar-menu-container'>
        <ul>
        {Menus.map((menu,index) => (
            <>
            <li key={index} className="text-base flex items-center gap-x-4 p-3 px-6 hover:bg-select-button-color rounded-md ">
                <span className="text-xl">
                {menu.icon}
                </span>
                <span className="text-lg">{menu.title}</span>
            </li>
            </>
            ))}
        </ul>
    </div>);
}