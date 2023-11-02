import Sidebar from "./components/Sidebar/Sidebar";
import Body from "./components/Body/Body";
import { Fragment } from "react";

export default function Home() {

  return (
    <Fragment >
      <main className="flex">
        <Sidebar />
        <Body />
      </main>
    </Fragment>
  );
}
