const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');


let win

function createWindow () {
  win = new BrowserWindow({
    width: 600,
    height: 300,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  if(isDev) {
    win.loadURL('http://localhost:8080/')
  }else {
    win.loadFile(path.resolve(__dirname,'../renderer/pages/main/index.html'))
  }
}


app.whenReady().then(() => {
  createWindow()
})