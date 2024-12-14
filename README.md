# LumiNET - The Browser Assistant for Visually Impaired Users

## About the Project
LumiNET is designed to assist visually impaired users in navigating and consuming web content. It provides features like page simplification, voice-enabled controls, and visual narration for better accessibility.

## Features
- **Page Simplification**: Adjusts font size, contrast, and simplifies webpage elements for better readability.
- **Voice-Enabled Control**: Navigate web pages using voice commands such as scrolling, navigating to the top or bottom, and starting/stopping narration.
  - **Note**: The **VoiceControl** feature is currently not working. The team is working to resolve this, and voice commands will be re-enabled soon.
- **Visual Narration**: Provides text-to-speech narration for images and text content.

## Getting Started
Follow these steps to install and use the extension.

### Prerequisites
- Mozilla Firefox browser (v90 or later)
- Basic knowledge of browser extensions

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/rudraxix/IdeaForge1.0-LumiNET.git
    ```
2. Open Mozilla Firefox and navigate to `about:debugging`.
3. Click on `This Firefox` and select `Load Temporary Add-on`.
4. Choose any file in the cloned directory, such as `manifest.json`.
5. The extension should now be installed and ready to use!

## Usage
- Click on the extension icon in the toolbar to open the popup.
- Use the buttons for the following:
    - **Page Simplification**: Adjusts the font size, contrast, and background for better readability.
    - **Voice-Enabled Control**: Activate voice commands for actions like scrolling and starting/stopping narration.
      - **Note**: The **VoiceControl** feature is currently not working. The team is working to resolve this, and voice commands will be re-enabled soon.
    - **Visual Narration**: Start the narration for content on the page, which will be read aloud using text-to-speech.

## Tutorial: How to Use LumiNET
Welcome to the tutorial section! In this guide, we will walk you through how to use LumiNET to enhance your browsing experience, especially for visually impaired users. LumiNET comes with several powerful features like page simplification, voice-enabled controls, and visual narration. Let’s explore each feature in detail.

### 1. Installing and Setting Up LumiNET
Before using LumiNET, make sure you have the extension installed by following the Installation Instructions.

### 2. Opening the LumiNET Extension
Once the extension is installed:
- Open Mozilla Firefox.
- You will see a small icon representing the LumiNET extension on the browser’s toolbar (top-right corner).
- Click on this icon to open the popup window where you can control the features of the extension.
- If the icon is not directly visible, you'll have to click on the Extensions button on the browser's toolbar and open the extension popup window from there.

### 3. Page Simplification
Page Simplification is designed to make webpages more accessible by adjusting the font size, background color, and overall layout.

To simplify the page:
- In the popup window, click the "Simplify the page" button.
- The page will automatically adjust for better readability with larger text and higher contrast.
- You can also re-enable or reset any changes via the extension settings (if available).

What happens after you click the button:
- The text size will be increased for easier reading.
- The background contrast will be optimized for visually impaired users.
- Complex elements like advertisements or unnecessary sidebar content will be minimized or hidden.

### 4. Voice-Enabled Control
LumiNET allows you to navigate the page and control various features using voice commands.

To activate voice control:
- In the popup window, click the "Voice-Enabled Control" button.
- The extension will listen for specific voice commands such as scrolling, navigation, and narration.

**Available Voice Commands**:
- "Start narration": Starts the visual narration of content on the page.
- "Stop narration": Stops the ongoing narration.
- "Scroll up": Scrolls the page up by 100 pixels.
- "Scroll down": Scrolls the page down by 100 pixels.
- "Go to top": Scrolls the page to the very top.
- "Go to bottom": Scrolls the page to the very bottom.

**Note**: The **VoiceControl** feature is currently not working. The team is working to resolve this, and voice commands will be re-enabled soon.

Once activated, speak any of the above commands, and LumiNET will automatically perform the action for you.

### 5. Visual Narration
Visual Narration reads the content on the page aloud using a text-to-speech (TTS) engine. It will read out headings, paragraphs, links, and other text-based elements when you hover your mouse over them.

To start visual narration:
- In the popup window, click the "Visual Narration for Content" button.
- Move your mouse over any text or headings on the page. LumiNET will read the content aloud to you.
- Be patient as the mouse hover takes a little time sometimes to narrate the text box.
- Sometimes, a new narration does not begin until an older one is completed.

**What to expect**:
- When hovering over text, LumiNET will recognize the content type (like headings, paragraphs, or links) and read it aloud.
- It will automatically switch to a new element when you hover over another one.
- You can stop the narration by clicking the "Stop Narration" button or using the "Stop narration" voice command.

**Important Notes**:
- Ensure that your device has audio output (speakers or headphones) to hear the narration.
- The voice and speech rate can be customized to your preferences via settings (if available).

### 6. Stopping Narration
If you wish to stop the narration:
- Click the "Stop Narration" button in the popup window.
- Alternatively, you can say the voice command "Stop narration" to immediately halt any ongoing narration.
- Stopping narration ensures that you are in control and can pause it at any time.

### 7. Using Multiple Features Together
LumiNET allows you to combine multiple features for a more comprehensive browsing experience. For example:
- You can simplify the page for better readability while starting narration to have the content read aloud at the same time.
- You can navigate the page with voice commands while the extension narrates the text you hover over.

### 8. Troubleshooting Tips
- **Voice Commands Not Working**: Ensure that your microphone is working and permissions are granted in your browser.
- **Page Simplification Not Working**: If the page doesn’t simplify correctly, try reloading the page or clicking the button again.
- **Narration Not Starting**: Make sure that your device’s audio is not muted and that the browser has access to the text-to-speech engine.

By following these steps, you should be able to use all the core features of the LumiNET extension to assist with navigating and consuming web content. Whether you're browsing articles, reading books, or simply navigating websites, LumiNET provides the tools to make your online experience more accessible.

Feel free to explore and enjoy LumiNET, and let us know if you encounter any issues!

## Contributing
Contributions are welcome! Follow these steps to contribute:
1. Fork the repository.
2. Create a feature branch:
    ```bash
    git checkout -b feature-name
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add feature"
    ```
4. Push to the branch:
    ```bash
    git push origin feature-name
    ```
5. Open a Pull Request.

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments
- Mozilla Developer Network (MDN) for excellent documentation.
- Accessibility guidelines from W3C.
- [Text-to-Speech JS Library](https://github.com/mdn/speech-synthesis).
- [Annyang Speech Recognition Library](https://github.com/TalAter/annyang) for enabling voice commands.
