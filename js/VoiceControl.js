let currentUtterance = null;
let isNarrating = false;
let debounceTimer = null;

// Function to initialize voice control using annyang
function initializeVoiceControl() {
    if (annyang) {
        // Define voice commands
        const commands = {
            'stop narration': () => {
                stopNarration(); // Stop any ongoing narration
                console.log("Narration stopped.");
            },
            'start narration': () => {
                if (!isNarrating) {
                    startDynamicHoverNarration(); // Restart narration if it's stopped
                    console.log("Narration started.");
                } else {
                    console.log("Narration is already running.");
                }
            },
            'scroll up': () => {
                window.scrollBy(0, -100); // Scroll up
                console.log("Scrolling up.");
            },
            'scroll down': () => {
                window.scrollBy(0, 100); // Scroll down
                console.log("Scrolling down.");
            },
            'go to top': () => {
                window.scrollTo(0, 0); // Scroll to the top
                console.log("Scrolled to the top.");
            },
            'go to bottom': () => {
                window.scrollTo(0, document.body.scrollHeight); // Scroll to the bottom
                console.log("Scrolled to the bottom.");
            },
        };

        // Add the commands to annyang
        annyang.addCommands(commands);

        // Start listening for voice input
        annyang.start();
    } else {
        alert("Voice recognition is not supported in your browser.");
    }
}

// Function to start dynamic hover narration
function startDynamicHoverNarration() {
    if (isNarrating) return; // Prevent starting narration if it's already running
    isNarrating = true; // Mark narration as active

    let lastElement = null; // To keep track of the last narrated element

    // Listen for mouse movements to track the element under the mouse
    document.addEventListener("mousemove", function (event) {
        if (debounceTimer) clearTimeout(debounceTimer);

        debounceTimer = setTimeout(() => {
            const element = document.elementFromPoint(event.clientX, event.clientY);

            // Narrate only text-containing elements (headings, paragraphs, links)
            if (element && (element.matches("h1, h2, h3, h4, h5, h6, p, a"))) {
                if (element !== lastElement) {
                    lastElement = element;
                    const text = element.innerText || element.textContent;

                    if (currentUtterance) {
                        speechSynthesis.cancel(); // Stop previous narration
                    }

                    narrateText(text);
                }
            }
        }, 100); // Debounce to prevent excessive narration
    });
}

// Function to narrate text using the SpeechSynthesis API
function narrateText(text) {
    currentUtterance = new SpeechSynthesisUtterance(text);
    currentUtterance.voice = speechSynthesis.getVoices().find(voice => voice.lang === 'en-US') || null;
    currentUtterance.rate = 1;

    speechSynthesis.speak(currentUtterance);
}

// Function to stop ongoing narration
function stopNarration() {
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel(); // Stop any ongoing narration
        isNarrating = false; // Mark narration as inactive
        console.log("Narration stopped.");
    }
}

// Initialize voice control and start narration
initializeVoiceControl();
