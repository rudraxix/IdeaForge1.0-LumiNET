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

    // Gather all the content elements (text and images)
    const contentElements = [];

    // Get all text elements (headings, paragraphs, links)
    const textElements = [
        ...document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a")
    ];

    // Get all images
    const images = [...document.querySelectorAll("img")];

    // Merge the images and text elements into one array and keep their order intact
    let allElements = [];
    let imageIndex = 0;
    let textIndex = 0;

    while (imageIndex < images.length || textIndex < textElements.length) {
        if (textIndex < textElements.length) {
            allElements.push({ type: 'text', text: textElements[textIndex].innerText });
            textIndex++;
        }

        if (imageIndex < images.length) {
            const altText = images[imageIndex].alt || "An image with no description";
            allElements.push({ type: 'image', text: "Image: " + altText });
            imageIndex++;
        }
    }

    // Narrate all content in order
    narrateContentInOrder(allElements);
}

// Function to narrate content in order
function narrateContentInOrder(contentElements) {
    contentElements.forEach(item => {
        if (item.type === 'text') {
            narrateText(item.text); // Narrate text content (headings, paragraphs, links)
        } else if (item.type === 'image') {
            narrateText(item.text); // Narrate image descriptions
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
