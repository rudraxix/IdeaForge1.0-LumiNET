// Define scaling factors for font sizes
let fontSizes = [1.5, 2, 3]; // Scale factors for visually challenged users
let currentFontSizeIndex = 0; // Track current font size scale
let originalFontSizes = new Map(); // Store original font sizes for toggling

// Function to remove unnecessary elements
function removeUnnecessaryElements() {
    const ads = document.querySelectorAll('iframe, .ad, .advertisement, .sidebar, .popup, .banner, .footer, .header, .nav');
    ads.forEach(ad => ad.style.display = 'none');
}

// Function to toggle font size
function changeFontSize() {
    const textElements = document.querySelectorAll("body, p, h1, h2, h3, h4, h5, h6, span, div, a");

    textElements.forEach(element => {
        // Get the original font size if not already stored
        if (!originalFontSizes.has(element)) {
            const currentFontSize = window.getComputedStyle(element).fontSize;
            originalFontSizes.set(element, parseFloat(currentFontSize));
        }

        // Toggle between original size and scaled sizes
        const originalSize = originalFontSizes.get(element);
        const newSize = currentFontSizeIndex === 0
            ? originalSize // Reset to original size
            : originalSize * fontSizes[currentFontSizeIndex - 1]; // Scale the font size

        element.style.fontSize = `${newSize}px`;
    });

    // Cycle through font sizes
    currentFontSizeIndex = (currentFontSizeIndex + 1) % (fontSizes.length + 1); // +1 for original size
}

// Function to improve layout for readability
function simplifyLayout() {
    document.body.style.padding = "20px"; // Add padding for readability
    document.body.style.lineHeight = "1.8"; // Improve line spacing
    document.body.style.backgroundColor = "#f4f4f4"; // Soft background color for better contrast
    document.body.style.color = "#000000"; // Black text for maximum contrast
    document.body.style.fontFamily = "'Arial', sans-serif"; // Use a clear font

    // Ensure content spans across the screen width without jumbled elements
    document.body.style.maxWidth = "100%";
    document.body.style.margin = "0"; // Remove centering that causes empty space
}

// Main function to simplify the page
function simplifyPage() {
    removeUnnecessaryElements();
    changeFontSize();
    simplifyLayout();
}

// Execute the script
simplifyPage();
