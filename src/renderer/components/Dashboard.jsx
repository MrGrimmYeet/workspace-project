import React from "react";

const Dashboard = () => {
  return (
    <div id="content">
      {/* Header-Bereich */}
      <div id="header">
        <h1>Dashboard</h1>
        <div>
          <span>16. Dez 2024</span> | <span>13:24 Uhr</span>
        </div>
      </div>

      {/* Hauptbereich */}
      <div style={{ display: "flex", gap: "1em" }}>
        {/* E-Mail-Bereich */}
        <div className="section" style={{ flex: 1 }}>
          <h3>E-Mail</h3>
          <label>To:</label>
          <input type="email" placeholder="example@email.com" style={{ width: "100%", marginBottom: "0.5em" }} />
          <label>Text:</label>
          <textarea placeholder="Message..." style={{ width: "100%", height: "100px" }}></textarea>
          <button style={{ marginTop: "0.5em", backgroundColor: "#4a90e2", color: "white", padding: "0.5em 1em" }}>
            Send
          </button>
        </div>

        {/* To-Do-Bereich */}
        <div className="section" style={{ flex: 1 }}>
          <h3>To-Do's</h3>
          <ul>
            <li>Program Code</li>
            <li>Test Buttons</li>
            <li>Design</li>
          </ul>
        </div>
      </div>

      {/* Kreisdiagramm */}
      <div className="section" id="chart">
        <div>
          <h4>Budget Overview</h4>
          <div style={{ textAlign: "center", marginTop: "1em" }}>
            <p>70% Cash</p>
            <p>25% Assets</p>
            <p>5% Investment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
