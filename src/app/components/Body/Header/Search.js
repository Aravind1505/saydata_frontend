import {BiSearchAlt2} from "react-icons/bi";

export default function Search() {
    return (
        <div className="flex items-center bg-slate-200 p-6 w-9/12 rounded-xl gap-x-3">
            <BiSearchAlt2 className="text-lg"/>
            <input type={"search"} placeholder="Search here..." 
            className="focus:outline-none text-base bg-transparent w-full">
            </input>
        </div>
    );
}