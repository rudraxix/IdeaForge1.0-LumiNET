console.log("Script is running");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "PageSimplification") {
        importScript("PageSimplification.js");
    } else if (request.action === "narratePage") {
        importScript("VisualNarration.js");
    } else if (request.action === "voiceControl") {
        importScript("VoiceControl.js");
    } else if (request.action === "stopNarration") {
        stopNarration(); // Stop narration if requested
    }
});

function importScript(scriptName) {
    const script = document.createElement("script");
    script.src = chrome.runtime.getURL(scriptName);
    document.body.appendChild(script);
}

function stopNarration() {
    if (typeof window.stopNarration === 'function') {
        window.stopNarration(); // Call the stopNarration function if it's defined in the injected script
        console.log("Narration stopped");
    } else {
        console.log("No narration function found.");
    }
}
