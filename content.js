console.log("Content script loaded");
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getArticleContent") {
        // grabs all paragraph tags on the page
        const paragraphs = document.querySelectorAll('p'); // Adjust selector as needed
        let articleText = '';

        paragraphs.forEach(paragraph => {
            articleText += paragraph.innerText + '\n';
        });

        sendResponse({ content: articleText });
    }
});
