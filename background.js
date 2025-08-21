// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.text) {
//     let apiUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURIComponent(request.text)}`;
    
//     fetch(apiUrl)
//       .then(response => response.json())
//       .then(data => {
//         let translatedText = data[0][0][0];
//         chrome.storage.local.set({ translatedText }, () => {
//           console.log("Translation saved:", translatedText);
//         });
//       })
//       .catch(error => console.error("Translation error:", error));
//   }
// });
// Extension install hoile context menu add hobe
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "translateText",
    title: "Translate Selected Text",
    contexts: ["selection"]
  });
});


// User right click kore translate select korle
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "translateText") {
    let selectedText = info.selectionText;

    let apiUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURIComponent(selectedText)}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        let translatedText = data[0][0][0];
        chrome.storage.local.set({ translatedText }, () => {
          console.log("Translated:", translatedText);
        });
      })
      .catch(error => console.error("Translation error:", error));
  }
});

