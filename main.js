const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Electron',
        width: 1000,
        height: 600,
        webPreferences: {
            nodeIntegration: true, // Be cautious with this in production apps
            contextIsolation: true, // Adjust for security as needed
            preload: path.join(__dirname, './preload.js'),
        }
    });

    mainWindow.webContents.openDevTools();

    mainWindow.loadFile(path.join(__dirname, './app/build/index.html'));
}

app.whenReady().then(createMainWindow);

// The following code ensures that the app will re-create a window if all windows are closed on macOS
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow();
    }
});

ipcMain.on('submit:todoForm', (event, opts) => {
    console.log(opts);
})