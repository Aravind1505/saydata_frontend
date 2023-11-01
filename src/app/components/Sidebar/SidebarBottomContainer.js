import {MdOutlineRocketLaunch} from "react-icons/md";

export default function SidebarBottomContainer() {
    return (
        <div className="bg-select-button-color p-3 rounded-md flex flex-col items-center">
            <MdOutlineRocketLaunch className="text-dark-blue-theme text-3xl"/>
            <div className="m-3 font-bold text-base">
                Upgrade Account
            </div>
            <div className="text-sm">
                Access To Unlimited Transcription
            </div>
            <div className="bg-dark-blue-theme rounded-md p-3 m-3 text-white text-lg flex px-20">
                Upgrade
            </div>
        </div>
    );
}