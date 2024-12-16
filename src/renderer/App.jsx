import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div style={{ display: "flex" }}>
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div style={{ flexGrow: 1 }}>{activeTab === "Dashboard" && <Dashboard />}</div>
    </div>
  );
};

export default App;
