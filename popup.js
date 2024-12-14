document.getElementById('PageSimplification').addEventListener('click', function() {
    browser.tabs.query({
        active: true,
        currentWindow: true
    }).then(function(tabs) {
        // Apply page simplification logic
        browser.tabs.executeScript(tabs[0].id, {
            file: 'js/PageSimplification.js',
        });
        console.log("Page Simplification Activated");
    });
});

document.getElementById("VoiceControl").addEventListener("click", function() {
    browser.tabs.query({
        active: true,
        currentWindow: true
    }).then(function(tabs) {
        // Implementation of the voice control logic
        browser.tabs.executeScript(tabs[0].id, {
            file: 'js/VoiceControl.js', // Executes the voice control script
        });
        console.log("Voice Control Activated");
    });
});

document.getElementById("VisualNarration").addEventListener("click", function() {
    browser.tabs.query({
        active: true,
        currentWindow: true
    }).then(function(tabs) {
        // Implementation of the visual narration logic
        browser.tabs.executeScript(tabs[0].id, {
            file: 'js/VisualNarration.js', // Executes the visual narration script
        });
        console.log("Visual Narration Activated");
    });
});

// Stop narration logic (send a message to content.js to stop narration)
document.getElementById("StopNarration").addEventListener("click", function() {
    browser.tabs.query({
        active: true,
        currentWindow: true
    }).then(function(tabs) {
        // Send message to content.js to stop narration
        browser.tabs.sendMessage(tabs[0].id, {
            action: "stopNarration"
        });
        console.log("Narration Stopped");
    });
});
