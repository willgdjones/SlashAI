# Slash AI Chrome Extension

Slash AI is a Chrome extension that allows you to interact with GPT-powered AI models using the OpenAI API directly from your browser's text fields. You can type '/ai' followed by a prompt and get instant AI-generated responses. The extension includes a user-friendly settings popup that allows you to manage your API key and preferred AI model.

## Installation

1. Download the source code by either:
    - Cloning the repository: `git clone https://github.com/your_username/slash-ai`
    - Downloading the ZIP file: Click the green "Code" button above and select "Download ZIP"
2. Open Google Chrome and navigate to `chrome://extensions`
3. Toggle "Developer mode" on (upper right corner of the page)
4. Click "Load unpacked" (upper left corner of the page)
5. Select the `slash-ai-chrome-extension` folder you downloaded in step 1
6. The Slash AI extension icon should appear in your Chrome toolbar.

## Usage

1. Click on the Slash AI extension icon in your Chrome toolbar.
2. Enter your OpenAI API key and select your preferred AI model (GPT3, GPT3.5, or GPT4).
3. Save your settings by clicking the "Save" button.
4. Type '/ai' followed by your prompt in any text field on a web page.
5. The extension will automatically replace the command with a spinner and send the prompt to the OpenAI API.
6. The generated text will replace the spinner when the response is returned.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Acknowledgements

This project was created with the help of the following resources:

- OpenAI API documentation: https://beta.openai.com/docs/
- Chrome Extension documentation: https://developer.chrome.com/docs/extensions/
- Spinner HTML/CSS code: https://loading.io/css/