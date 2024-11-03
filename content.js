chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.method === "getText") {
        sendResponse({ data: document.documentElement.innerText });
    }
});
