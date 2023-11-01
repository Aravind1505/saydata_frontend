import {FiBell} from "react-icons/fi";

export default function Profile() {
    return (
    <div className="profile-container flex gap-x-4 p-1">
        <div className="rounded-full text-xl bg-slate-200 flex p-3 items-center">
            <FiBell/>
        </div>
        <div className="rounded-full flex text-xl bg-slate-200 p-3 items-center">
            <FiBell/>
        </div>
    </div>
    );
}