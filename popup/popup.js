// // Function to print "Hello World!" in the output area
// function summarize() {
//     document.getElementById("outputArea").value = "Hello World!";
// }

// // Attach the function to the button's click event
// document.getElementById("summarizeButton").addEventListener("click", summarize);

document.querySelector('.button.is-success').addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "getArticleContent" }, (response) => {
            if (response && response.content) {
                document.getElementById("outputArea").value = response.content;
            } else {
                document.getElementById("outputArea").value = "No content found.";
            }
        });
    });
});
