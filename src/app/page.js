import {GrHomeRounded, GrShareOption} from "react-icons/gr";
import {FiFolder} from "react-icons/fi";
import {BsBookmark, BsQuestionCircle} from "react-icons/bs";
import {RiDeleteBin6Line, RiSettings4Line} from "react-icons/ri";

import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";

export default function Home() {

  return (
    <main className="flex">
      <Sidebar />
      <Header />
    </main>
  );
}
