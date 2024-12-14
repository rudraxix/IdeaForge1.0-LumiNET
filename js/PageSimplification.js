// Function to remove unnecessary elements like ads, popups, banners, sidebars, etc.
function removeUnnecessaryElements() {
    const elementsToRemove = [
        'iframe', '.ad', '.advertisement', '.sidebar', '.popup', '.banner', '.footer', '.header', '.nav', '.sticky', '.modal'
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
        const newFontSize = currentFontSize * 1.3; // Increase font size by 0.3
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

    // Apply Flexbox to the body to make the content flexible and centered
    body.style.display = 'flex';
    body.style.flexDirection = 'column';
    body.style.alignItems = 'center';    // Center content horizontally
    body.style.justifyContent = 'flex-start'; // Align content to the top
    body.style.margin = '0';
    body.style.padding = '0';

    // Apply a max-width to make sure the content isn't stretched too wide
    const contentContainer = document.createElement('div');
    contentContainer.style.width = '100%';     // Ensure content takes up the full width
    contentContainer.style.maxWidth = '1200px'; // Set a maximum width for readability
    contentContainer.style.padding = '20px';
    contentContainer.style.boxSizing = 'border-box';

    // Add content to the container
    body.appendChild(contentContainer);

    // Clean up the layout by adjusting padding for paragraphs and headers
    const textElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span, div");
    textElements.forEach(element => {
        element.style.marginBottom = "15px"; // Add some space between elements
        element.style.lineHeight = "1.5";    // Increase line height for better readability
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
