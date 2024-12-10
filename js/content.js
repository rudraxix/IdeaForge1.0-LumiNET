console.log("Script is running");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "PageSimplification") {
      importScript("PageSimplification.js");
    } else if (request.action === "narratePage") {
      importScript("VisualNarration.js");
    } else if (request.action === "voiceControl") {
      importScript("VoiceControl.js");
    }
  });
  
  function importScript(scriptName) {
    const script = document.createElement("script");
    script.src = chrome.runtime.getURL(scriptName);
    document.body.appendChild(script);
  }