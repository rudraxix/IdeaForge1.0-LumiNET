// Function to start the narration when mouse hovers over an element
function startHoverNarration() {
    // Select all text elements like headings, paragraphs, and links
    const textElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a");

    // Add mouseover event listener to each element
    textElements.forEach(element => {
        element.addEventListener("mouseover", function() {
            const text = element.innerText || element.textContent;
            narrateText(text); // Narrate the text of the hovered element
        });
    });
}

// Function to narrate text using the SpeechSynthesis API
function narrateText(text) {
    const utterance = new SpeechSynthesisUtterance(text);

    // Optional: Adjust voice and speed
    utterance.voice = speechSynthesis.getVoices().find(voice => voice.lang === 'en-US') || null;
    utterance.rate = 1; // Normal speed

    // Speak the text
    speechSynthesis.speak(utterance);
}

// Start the hover narration when the script is run
startHoverNarration();
