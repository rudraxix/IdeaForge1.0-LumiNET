document.getElementById('PageSimplification').addEventListener('click', function() {
    browser.tabs.query({
        active: true,
        currentWindow: true
    }).then(function(tabs) {
        // Apply page simplification logic
        browser.tabs.executeScript(tabs[0].id, {
            file:'js/PageSimplification.js',
        });
        console.log("Page Simplifaction Activated");
    });
});

document.getElementById("VoiceControl").addEventListener("click", function() {
    browser.tabs.query({
        active: true,
        currentWindow: true
    }).then(function(tabs) {
        // Implementation of the voice control logic
        browser.tabs.executeScript(tabs[0].id,{
            file:'js/VoiceControl.js',
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
        browser.tabs.executeScript(tabs[0].id,{
            file:'js/VisualNarration.js',
        });
        console.log("Visual Narration Activated");
    });
});
