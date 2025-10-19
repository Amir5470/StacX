import { contextBridge, ipcRenderer } from 'electron'
import { version } from '../package.json' assert { type: 'json' }

contextBridge.exposeInMainWorld('electronAPI', {
    send: (channel, data) => ipcRenderer.send(channel, data),
    receive: (channel, func) => ipcRenderer.on(channel, (event, ...args) => func(...args))
})

contextBridge.exposeInMainWorld('appInfo', {
    version
})