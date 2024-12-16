import React from "react";

const Sidebar = ({ activeTab, onTabChange }) => {
  const tabs = ["Dashboard", "E-Mails", "To-Do's", "Quick Contacts", "Money Management"];

  return (
    <div id="sidebar">
      <h2>Workspace</h2>
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`sidebar-item ${activeTab === tab ? "active" : ""}`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </div>
      ))}
      <div className="sidebar-item">⚙️ Settings</div>
    </div>
  );
};

export default Sidebar;
