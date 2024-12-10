// Define three font size multipliers to toggle between based on scale factor
let fontSizes = [1.2, 1.5, 2];  // Scaling factors (e.g., 1.2 means 120% of the original size)
let currentFontSizeIndex = 0;  // Keeps track of the current font scale

function removeUnnecessaryElements() {
    const ads = document.querySelectorAll('iframe, .ad, .advertisement, .sidebar, .popup, .banner, .footer, .header, .nav');
    ads.forEach(ad => ad.style.display = 'none');
}

function changeFontSize() {
    // Select text-related elements: body, paragraphs, headings, and others
    const textElements = document.querySelectorAll("body, p, h1, h2, h3, h4, h5, h6, span, div, a");
    
    // Loop through all elements and scale the font size according to the current factor
    textElements.forEach(element => {
        const currentFontSize = window.getComputedStyle(element).fontSize;
        const currentSizeInPx = parseFloat(currentFontSize);
        const newSize = currentSizeInPx * fontSizes[currentFontSizeIndex];  // Scale the font size

        element.style.fontSize = `${newSize}px`;  // Apply the scaled font size
        // Optionally, improve contrast by adjusting text color
        element.style.color = "#000000";  // Black text for better visibility
    });

    // Update the index to the next font size scaling factor
    currentFontSizeIndex = (currentFontSizeIndex + 1) % fontSizes.length;
}

function simplifyLayout() {
    document.body.style.maxWidth = "900px";  // Limit page width for easier reading
    document.body.style.margin = "0 auto";   // Center the content
    document.body.style.padding = "20px";    // Add padding for better readability

    // Optional: Style individual elements like paragraphs or headers for better spacing
    const textElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span, div");
    textElements.forEach(element => {
        element.style.lineHeight = "1.6"; 
    });
}

function simplifyPage() {
    removeUnnecessaryElements();
    changeFontSize();
    simplifyLayout();
}

simplifyPage();