import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import EmailEditor from "./components/EmailEditor";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Sidebar />
        <EmailEditor />
      </div>
    </div>
  );
}

export default App;
