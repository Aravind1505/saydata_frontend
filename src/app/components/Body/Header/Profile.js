import Image from "next/image";
import {FiBell} from "react-icons/fi";

export default function Profile() {
    return (
    <div className="profile-container flex gap-x-4 p-1 items-center">
        <div className="rounded-full text-xl bg-slate-200 flex p-3 items-center">
            <FiBell/>
        </div>
        <Image src="/user-male-removedbg.png"  className="rounded-full" alt="user-image" width="48" height="48"/>
    </div>
    );
}