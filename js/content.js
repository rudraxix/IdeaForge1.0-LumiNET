console.log("Script is running");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "PageSimplification") {
        importScript("PageSimplification.js");
    } else if (request.action === "narratePage") {
        importScript("VisualNarration.js");
    } else if (request.action === "voiceControl") {
        importScript("VoiceControl.js");
    } else if (request.action === "stopNarration") {
        stopNarration(); // Call the stopNarration function if requested
    }
});

function importScript(scriptName) {
    const script = document.createElement("script");
    script.src = chrome.runtime.getURL(scriptName);
    document.body.appendChild(script);
}

function stopNarration() {
    // Ensure the stopNarration function is available from the injected VisualNarration script
    if (typeof window.stopNarration === 'function') {
        window.stopNarration(); // Call stopNarration if it's defined in the injected script
        console.log("Narration stopped");
    } else {
        console.log("No narration function found.");
    }
}
