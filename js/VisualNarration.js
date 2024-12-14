// Function to start narration
function startNarration() {
    // First, narrate the page title
    const pageTitle = document.title || "No title available";
    narrateText("This page is titled: " + pageTitle);

    // Narrate the main heading (if available)
    const mainHeading = document.querySelector("h1");
    if (mainHeading) {
        narrateText("The main heading is: " + mainHeading.innerText);
    }

    // Gather all the main content elements (text)
    const contentElements = [
        ...document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a")
    ];

    // Narrate all content (headings, paragraphs, links) in order
    narrateContentInOrder(contentElements);
}

// Function to narrate content in order
function narrateContentInOrder(contentElements) {
    contentElements.forEach(element => {
        const text = element.innerText || element.textContent;
        if (text.trim()) { // Only narrate non-empty text
            narrateText(text); // Narrate text content (headings, paragraphs, links)
        }
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

// Execute the narration when the script is run
startNarration();
