import Notes from "./components/Notes/Notes";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="app">
      <SideBar />

      <div className="app-content">
        <Notes />
      </div>
    </div>
  );
}

export default App;
