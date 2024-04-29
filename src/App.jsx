import { useState, useEffect } from "react";
import "./App.css";
import SideBar from "./components/sidebar/sidebar.jsx";

function App() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);
  }, []);

  return (
  <>
  <SideBar/>
  <h1>I've rendered {count} times!</h1>
  </>
)
}

export default App;
