import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Directory from "./pages/Directory";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  return (
    <div className={`dark:bg-gray-900 relative ${theme === 'dark' ? 'dark' : ''}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profissionais" element={<Directory />} />
      </Routes>
    </div>
  );
};

export default App;
