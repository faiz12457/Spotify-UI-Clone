import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Preview from "./components/Preview/Preview";
import Songs from "./components/SongSec/Songs";
//import { motion } from "motion/react"
function App() {
  return (
    <div>
      <Navbar />
      <main className="p-2 flex gap-2">
        <Sidebar />
        <Songs />
      </main>

      <Preview />
    </div>
  );
}

export default App;
