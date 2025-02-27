// Use of Summarization API here
function summarizeContent(articleText) {
    // Placeholder:
    document.getElementById("outputArea").value = response.content;
}

// I actually think the above code isn't needed, use backend for summarization API

document.querySelector('.button.is-success').addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "getArticleContent" }, (response) => {
            if (response && response.content) {
                // send the content to the backend for summarization
                document.getElementById("outputArea").value = response.content;
            } else {
                document.getElementById("outputArea").value = "No content found. Please use a valid website or refresh the page and try again.";
            }
        });
    });
});
