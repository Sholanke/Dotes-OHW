import SideBar from "../SideBar/SideBar";

export default function DefaultLayout({ children }) {
  return (
    <div className="app">
      <SideBar />
      <div className="app-content">{children}</div>
    </div>
  );
}
