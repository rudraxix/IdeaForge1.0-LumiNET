// Define three font size scaling factors for toggling
let fontSizes = [1.2, 1.5, 2]; // Scaling factors (1.2 = 120%, etc.)
let currentFontSizeIndex = 0;  // Tracks the current font size multiplier

// Function to remove unnecessary elements like ads and banners
function removeUnnecessaryElements() {
    const elementsToRemove = document.querySelectorAll(
        'iframe, .ad, .advertisement, .sidebar, .popup, .banner, .footer, .header, .nav'
    );
    elementsToRemove.forEach(element => element.style.display = 'none');
}

// Function to adjust font sizes dynamically while preserving formatting
function adjustFontSize() {
    const textElements = document.querySelectorAll("body, p, h1, h2, h3, h4, h5, h6, span, div, a");

    textElements.forEach(element => {
        // Compute the current font size
        const computedStyle = window.getComputedStyle(element);
        const currentFontSize = parseFloat(computedStyle.fontSize);
        const currentLineHeight = parseFloat(computedStyle.lineHeight);

        // Scale font size dynamically
        const newFontSize = currentFontSize * fontSizes[currentFontSizeIndex];
        const newLineHeight = currentLineHeight * fontSizes[currentFontSizeIndex];

        // Preserve visual hierarchy by retaining font-weight and other attributes
        element.style.fontSize = `${newFontSize}px`;
        element.style.lineHeight = `${newLineHeight}px`;
        element.style.color = "#000000"; // Optional: Improve text contrast
    });

    // Update the font size index for toggling
    currentFontSizeIndex = (currentFontSizeIndex + 1) % fontSizes.length;
}

// Function to improve layout readability
function adjustLayout() {
    const body = document.body;

    // Add styles to center content and improve readability
    body.style.maxWidth = "900px"; // Limit page width
    body.style.margin = "0 auto";  // Center content
    body.style.padding = "20px";  // Add padding for a better visual experience

    // Improve line spacing for paragraphs and headers
    const textElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span, div");
    textElements.forEach(element => {
        element.style.lineHeight = "1.6"; // Standard line-height for readability
    });
}

// Function to ensure simplified styles adapt dynamically
function dynamicallyAdaptStyles() {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
        body {
            background-color: #f5f5f5; /* Light background for readability */
        }

        a {
            color: #007bff; /* Highlight links for visibility */
            text-decoration: underline;
        }

        a:hover {
            text-decoration: none; /* Subtle hover effect */
        }
    `;
    document.head.appendChild(styleSheet);
}

// Main function to simplify the page
function simplifyPage() {
    removeUnnecessaryElements(); // Hide unwanted elements
    adjustFontSize(); // Scale font sizes dynamically
    adjustLayout(); // Improve layout readability
    dynamicallyAdaptStyles(); // Ensure adaptable styling
}

// Execute page simplification
simplifyPage();
