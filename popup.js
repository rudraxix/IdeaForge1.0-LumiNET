document.getElementById('Page Simplification').addEventListener('click', function() {
    browser.tabs.query({
        active: true,
        currentWindow: true
    }).then(function(tabs) {
        // Apply page simplification logic
        browser.tabs.executeScript(tabs[0].id, {
            code: 'document.body.style.filter = "contrast(1.5) brightness(1.1)"; document.body.style.backgroundColor = "black"; document.body.style.fontSize = "larger"; Array.from(document.querySelectorAll("*")).forEach(element => {if (getComputedStyle(element).position === "fixed") {element.style.display = "none";}});'
        });
    });
});

document.getElementById("Voicecontrol").addEventListener("click", function() {
    browser.tabs.query({
        active: true,
        currentWindow: true
    }).then(function(tabs) {
        // Implement voice control logic
        // Placeholder action for now
        console.log("Voice Control Activated");
    });
});

document.getElementById("visualnarration").addEventListener("click", function() {
    browser.tabs.query({
        active: true,
        currentWindow: true
    }).then(function(tabs) {
        // Implement visual narration logic
        // Placeholder action for now
        console.log("Visual Narration Activated");
    });
});
