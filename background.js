chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.method === "getText") {
        // send a message to the active tab
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { method: "getText" }, sendResponse);
        });
        return true; // keep the message channel open for async response
    }
});
chrome.sidePanel.setPanelBehavior({openPanelOnActionClick: true}).catch((error) => console.error(error));
