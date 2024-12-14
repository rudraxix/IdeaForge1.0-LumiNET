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

    // Narrate all images on the page
    const images = document.querySelectorAll("img");
    if (images.length > 0) {
        narrateText("This page contains the following images:");
        images.forEach(image => {
            const altText = image.alt || "An image with no description";
            narrateText("Image: " + altText);
        });
    }

    // Narrate all paragraphs
    const paragraphs = document.querySelectorAll("p");
    if (paragraphs.length > 0) {
        narrateText("The page contains the following paragraphs:");
        paragraphs.forEach(paragraph => {
            narrateText(paragraph.innerText);
        });
    }

    // Narrate any other visual content, like links or buttons
    const links = document.querySelectorAll("a");
    if (links.length > 0) {
        narrateText("The page contains the following links:");
        links.forEach(link => {
            narrateText("Link: " + link.innerText);
        });
    }
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
