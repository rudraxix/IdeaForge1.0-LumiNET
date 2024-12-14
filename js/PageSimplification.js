// Function to remove unnecessary elements like ads, popups, banners, sidebars, etc.
function removeUnnecessaryElements() {
    const elementsToRemove = [
        'iframe',        // Remove all iframes (often used for ads)
        '.ad',           // Remove elements with class 'ad'
        '.advertisement',// Remove elements with class 'advertisement'
        '.sidebar',      // Remove sidebars
        '.popup',        // Remove popups
        '.banner',       // Remove banners
        '.footer',       // Remove footer
        '.header',       // Remove header
        '.nav',          // Remove navigation
        '.sticky',       // Remove sticky elements
        '.modal'         // Remove modals
    ];

    elementsToRemove.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.style.display = 'none'; // Hide unwanted elements
        });
    });
}

// Function to increase text size for readability
function increaseFontSize() {
    const textElements = document.querySelectorAll("body, p, h1, h2, h3, h4, h5, h6, span, div, a");

    textElements.forEach(element => {
        // Increase the font size slightly (no zooming)
        const currentFontSize = parseFloat(window.getComputedStyle(element).fontSize);
        const newFontSize = currentFontSize * 1.4; // Increase font size by 40%
        const newLineHeight = currentFontSize * 1.5; // Adjust line height for readability

        // Apply the new font size and line height
        element.style.fontSize = `${newFontSize}px`;
        element.style.lineHeight = `${newLineHeight}px`;

        // Optionally improve contrast
        element.style.color = "#000000"; // Black color for better contrast
    });
}

// Function to clean up the page layout (limit width, center content)
function cleanLayout() {
    const body = document.body;

    // Apply a max-width to make sure the content isn't stretched too wide
    body.style.maxWidth = "800px";  // Limit page width to 800px for better readability
    body.style.margin = "0 auto";   // Center the content horizontally
    body.style.padding = "20px";    // Add padding around the content

    // Clean up the layout by adjusting padding for paragraphs and headers
    const textElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span, div");
    textElements.forEach(element => {
        element.style.marginBottom = "15px"; // Add some space between elements
        element.style.lineHeight = "1.8";    // Increase line height for better readability
    });
}

// Main function to simplify the page into a reader-friendly format
function simplifyPage() {
    removeUnnecessaryElements();  // Remove distracting elements (ads, banners, etc.)
    increaseFontSize();           // Increase font size for readability
    cleanLayout();                // Clean up layout for easy reading
}

// Execute page simplification
simplifyPage();
