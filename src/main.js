const { app, BrowserWindow } = require('electron');  
const path = require('path');  

function createWindow() {  
  const mainWindow = new BrowserWindow({  
    width: 1200,  
    height: 800,  
    webPreferences: {  
      preload: path.join(__dirname, 'renderer.js'),  
      nodeIntegration: true  
    }  
  });  

  mainWindow.loadFile('src/index.html');  
}  

app.whenReady().then(() => {  
  createWindow();  

  app.on('activate', () => {  
    if (BrowserWindow.getAllWindows().length === 0) {  
      createWindow();  
    }  
  });  
});  

app.on('window-all-closed', () => {  
  if (process.platform !== 'darwin') {  
    app.quit();  
  }  
});  
