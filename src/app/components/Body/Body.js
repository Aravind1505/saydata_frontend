import Header from "./Header/Header";
import UserBoard from "./UserBoard";

export default function Body() {
    return (
    <div className="w-full flex flex-col">
        <Header />
        <UserBoard />
    </div>
    );
}