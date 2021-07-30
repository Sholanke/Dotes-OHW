import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "./context/UserProvider";
import Routes from "./Routes";

function App() {
  return (
    <UserProvider>
      <Routes />
      <ToastContainer position="bottom-right" />
    </UserProvider>
  );
}

export default App;
