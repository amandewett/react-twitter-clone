import "./App.css";
import { Sidebar, Feed, Widgets } from "./components";

export default () => {
  return (
    <>
      <div className="app">
        {/* <Feed /> */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
        <Widgets />
      </div>
    </>
  );
};
