chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.text) {
    let apiUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURIComponent(request.text)}`;
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        let translatedText = data[0][0][0];
        chrome.storage.local.set({ translatedText }, () => {
          console.log("Translation saved:", translatedText);
        });
      })
      .catch(error => console.error("Translation error:", error));
  }
});
