const { BrowserWindow, app } = require("electron")

const createApp = () => {
    const win = new BrowserWindow({
        width: 200,
        height: 800
    })
    win.loadFile('./build/auris.html')
win.webContents.openDevTools()    
}

app.whenReady().then(() => {
    createApp()
}).catch((e) => {
    console.log(e)
})

