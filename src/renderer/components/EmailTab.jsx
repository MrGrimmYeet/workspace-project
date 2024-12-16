import React, { useState } from "react";

const EmailTab = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <h2>Compose Email</h2>
      <div>
        <label>To:</label>
        <input
          type="email"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="Recipient Email"
          style={{ width: "100%", marginBottom: "1em" }}
        />
      </div>
      <div>
        <label>Subject:</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          style={{ width: "100%", marginBottom: "1em" }}
        />
      </div>
      <div>
        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
          style={{ width: "100%", height: "200px", marginBottom: "1em" }}
        />
      </div>
      <button style={{ padding: "0.5em 1em", backgroundColor: "#4A90E2", color: "#FFF" }}>
        Send Email
      </button>
    </div>
  );
};

export default EmailTab;
