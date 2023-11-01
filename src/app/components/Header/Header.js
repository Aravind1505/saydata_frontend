import Profile from "./Profile";
import Search from "./Search";

export default function Header() {
    return (
        <div className="w-full h-20 p-3.5 flex flex-row justify-between ">
            <Search />
            <Profile />
        </div>
    );
}