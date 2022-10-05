import { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Header from "./containers/Header";
import Services from "./containers/Services";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const headerRef = useRef(null);
  return <main>
    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    <Navbar headerRef={headerRef} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    <Header headerRef={headerRef} />
    <Services />
  </main>
}

export default App;

