let currentUtterance = null; // To store the current utterance for controlling speech

// Function to start continuous narration based on mouse position
function startDynamicHoverNarration() {
    let lastElement = null; // To keep track of the last narrated element
    let debounceTimer = null; // To debounce mousemove events

    // Add mousemove event listener to the whole document to track the mouse
    document.addEventListener("mousemove", function(event) {
        // Debounce the mousemove event to avoid excessive function calls
        if (debounceTimer) clearTimeout(debounceTimer);

        debounceTimer = setTimeout(() => {
            // Find the element under the mouse cursor
            const element = document.elementFromPoint(event.clientX, event.clientY);

            // Check if the element is a text-containing element (e.g., headings, paragraphs, links)
            if (element && (element.matches("h1, h2, h3, h4, h5, h6, p, a"))) {
                // If the element is different from the last narrated element, narrate it
                if (element !== lastElement) {
                    lastElement = element;  // Update the last narrated element
                    const text = element.innerText || element.textContent;

                    // Stop any ongoing narration before starting a new one
                    if (currentUtterance) {
                        speechSynthesis.cancel(); // Cancel current narration
                    }

                    narrateText(text); // Narrate the text of the hovered element
                }
            }
        }, 100); // Wait for 100ms to avoid rapid function calls
    });

    // Function to narrate text using the SpeechSynthesis API
    function narrateText(text) {
        currentUtterance = new SpeechSynthesisUtterance(text);

        // Optional: Adjust voice and speed
        currentUtterance.voice = speechSynthesis.getVoices().find(voice => voice.lang === 'en-US') || null;
        currentUtterance.rate = 1; // Normal speed

        // Speak the text
        speechSynthesis.speak(currentUtterance);
    }
}

// Function to stop any ongoing narration
function stopNarration() {
    if (currentUtterance) {
        speechSynthesis.cancel(); // Stop the current narration
        console.log("Narration stopped");
    }
}

// Start the dynamic hover narration when the script is run
startDynamicHoverNarration();
