import { app, BrowserWindow } from 'electron'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1400,
        height: 900,
        title: StacX,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
        title: 'StacX',
    })

    // load frontend
    mainWindow.loadFile(path.join(__dirname, 'public', 'index.html'))

    // optional: open dev tools
    // mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
