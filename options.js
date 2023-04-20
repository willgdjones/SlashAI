document.getElementById("optionsForm").addEventListener("submit", (event) => {
    event.preventDefault();
  
    const apiKey = document.getElementById("apiKey").value;
    const model = document.getElementById("model").value;
  
    chrome.storage.sync.set({apiKey: apiKey, model: model}, () => {
      alert("Settings saved.");
    });
  });
  
  chrome.storage.sync.get(["apiKey", "model"], (result) => {
    if (result.apiKey) {
      document.getElementById("apiKey").value = result.apiKey;
    }
  
    if (result.model) {
      document.getElementById("model").value = result.model;
    }
  });
  