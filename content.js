console.log("Content script loaded");
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getArticleContent") {           // grabs all paragraph tags <p> on the page
        const paragraphs = document.querySelectorAll('p');  // adjust selector as needed
        let articleText = '';

        paragraphs.forEach(paragraph => {
            articleText += paragraph.innerText + '\n';
        });
        
        const title = document.querySelector('h1') ? document.querySelector('h1').innerText : '';

        const focusedContent = title + '\n' + articleText.substring(0, 1000) + '\n';

        sendResponse({ content: focusedContent });
    }
});

// 1000 words + bullet points gives an estimated 21,428 requests per month
// keeps us in budget of 18$ a month
