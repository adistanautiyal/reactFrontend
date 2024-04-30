import SideBar from "./components/sidebar/sidebar.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
  <>
  
  <div className="h-screen w-full bg-white relative flex overflow-hidden">
  <SideBar/>
  <Outlet/>  
  </div>
  </>
)
}

export default App;
