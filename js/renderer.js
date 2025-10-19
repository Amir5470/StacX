window.addEventListener('DOMContentLoaded', () => {
    const versionEl = document.getElementById('version')
    if (versionEl && window.appInfo) {
        versionEl.textContent = `v${window.appInfo.version}`
    }
})

