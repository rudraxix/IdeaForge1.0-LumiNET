document.getElementById('PageSimplification').addEventListener('click', function() {
    browser.tabs.query({
        active: true,
        currentWindow: true
    }).then(function(tabs) {
        // Execute the page simplification logic
        browser.tabs.executeScript(tabs[0].id, { file: 'js/PageSimplification.js' });
        console.log("Page Simplification Activated");
    });
});

document.getElementById("VoiceControl").addEventListener("click", function() {
    browser.tabs.query({
        active: true,
        currentWindow: true
    }).then(function(tabs) {
        // Start voice control
        browser.tabs.executeScript(tabs[0].id, { file: 'js/VoiceControl.js' });
        console.log("Voice Control Activated");
    });
});

document.getElementById("VisualNarration").addEventListener("click", function() {
    browser.tabs.query({
        active: true,
        currentWindow: true
    }).then(function(tabs) {
        // Start visual narration
        browser.tabs.executeScript(tabs[0].id, { file: 'js/VisualNarration.js' });
        console.log("Visual Narration Activated");
    });
});

document.getElementById("StopNarration").addEventListener("click", function() {
    browser.tabs.query({
        active: true,
        currentWindow: true
    }).then(function(tabs) {
        // Send stop narration signal
        browser.tabs.sendMessage(tabs[0].id, { action: "stopNarration" });
        console.log("Narration Stopped");
    });
});
