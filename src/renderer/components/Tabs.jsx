import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import EmailTab from "./EmailTab";
import Notes from "./Notes";
import Settings from "./Settings";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <Dashboard />;
      case "Notes":
        return <Notes />;
      case "Emails":
        return <EmailTab />;
      case "Settings":
        return <Settings />;
      default:
        return <h1>Tab Not Found</h1>;
    }
  };

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div id="content">{renderContent()}</div>
    </div>
  );
};

export default Tabs;
