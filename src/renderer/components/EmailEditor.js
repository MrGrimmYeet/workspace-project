import React, { useState } from "react";

function EmailEditor() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSendEmail = async () => {
    const result = await window.electron.sendEmail({ to, subject, body });
    alert(result.message);
  };

  return (
    <div>
      <h2>Email Editor</h2>
      <input
        type="email"
        placeholder="Recipient"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button onClick={handleSendEmail}>Send Email</button>
    </div>
  );
}

export default EmailEditor;
