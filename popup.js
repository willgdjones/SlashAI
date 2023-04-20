document.addEventListener("DOMContentLoaded", () => {
  const apiKeyInput = document.getElementById("api_key");
  const modelSelect = document.getElementById("model");
  const saveButton = document.getElementById("save_button");

  // Load settings from Chrome storage
  chrome.storage.sync.get(["api_key", "model"], (settings) => {
    if (settings.api_key) {
      apiKeyInput.value = settings.api_key;
    }
    if (settings.model) {
      modelSelect.value = settings.model;
    }
  });

  // Save settings to Chrome storage when the Save button is clicked
  saveButton.addEventListener("click", () => {
    chrome.storage.sync.set({
      "api_key": apiKeyInput.value,
      "model": modelSelect.value
    }, () => {
      alert("Settings saved.");
    });
  });
});
  
