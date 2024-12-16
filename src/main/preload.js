const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  sendEmail: (data) => ipcRenderer.invoke("send-email", data),
});
