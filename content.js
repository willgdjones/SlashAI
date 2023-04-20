function insertAtCaret(input, text) {
  const startPos = input.selectionStart;
  const endPos = input.selectionEnd;
  input.value = input.value.substring(0, startPos) + text + input.value.substring(endPos, input.value.length);
  input.selectionStart = startPos + text.length;
  input.selectionEnd = startPos + text.length;
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Tab" && event.target.value && event.target.value.startsWith('/ai')) {
    event.preventDefault();

    let inputField = event.target;
    let text = inputField.value;
    let match = text.match(/\/ai\s(.+)/);

    if (match) {
      let command = match[1];
      inputField.value = inputField.value.replace(/\/ai\s(.+)/, "⏳");
      
      chrome.runtime.sendMessage({command: command}, (response) => {
        inputField.value = inputField.value.replace("⏳", response.text);
      });
    }
  }
});
