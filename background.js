chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.command) {
    // Get settings from Chrome storage
    chrome.storage.sync.get(["api_key", "model"], (settings) => {
      if (!settings.api_key) {
        console.error("API key not set");
        sendResponse({text: "Error: API key not set"});
        return;
      }

      const apiKey = settings.api_key;
      const model = settings.model || "gpt3"; // Use GPT-3 as default if no model is selected

      // Call the OpenAI API using the API key and model
      callOpenAiApi(request.command, apiKey, model)
        .then((response) => {
          sendResponse({text: response});
        })
        .catch((error) => {
          console.error("Error calling OpenAI API:", error);
          sendResponse({text: "Error: " + error.message});
        });
    });
  }
  return true; // Required to use sendResponse asynchronously
});

async function callOpenAiApi(prompt, apiKey, model) {
  const modelMap = {
    "gpt3": "text-davinci-002",
    "gpt3.5": "text-davinci-002", // Replace with the actual GPT-3.5 model identifier
    "gpt4": "text-davinci-002"    // Replace with the actual GPT-4 model identifier
  };

  const url = "https://api.openai.com/v1/engines/" + modelMap[model] + "/completions";
  const headers = new Headers({
    "Content-Type": "application/json",
    "Authorization": "Bearer " + apiKey
  });

  const body = JSON.stringify({
    prompt: prompt,
    max_tokens: 50, // Customize the number of tokens returned as needed
    n: 1,
    stop: null,
    temperature: 1
  });

  const response = await fetch(url, {
    method: "POST",
    headers: headers,
    body: body
  });

  if (!response.ok) {
    throw new Error("API request failed: " + response.statusText);
  }

  const data = await response.json();
  const generatedText = data.choices[0].text.trim();
  return generatedText;
}
