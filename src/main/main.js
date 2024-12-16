const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { sendEmail } = require("./emailSender");

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
    },
  });

  mainWindow.loadFile(path.join(__dirname, "../public/index.html"));
});


ipcMain.handle("send-email", async (event, { to, subject, body }) => {
  try {
    await sendEmail(to, subject, body);
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Failed to send email." };
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
