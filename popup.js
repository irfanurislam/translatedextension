document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get("translatedText", (data) => {
    if (data.translatedText) {
      document.getElementById("translatedText").innerText = data.translatedText;
    } else {
      document.getElementById("translatedText").innerText = "No translation available";
    }
  });
});
