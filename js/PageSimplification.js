// Define a single, mildly bigger font size scaling factor
let fontSizeScale = 1.2;  // 120% of the original font size

// Function to remove unnecessary elements like ads and banners
function removeUnnecessaryElements() {
    const elementsToRemove = document.querySelectorAll(
        'iframe, .ad, .advertisement, .sidebar, .popup, .banner, .footer, .header, .nav'
    );
    elementsToRemove.forEach(element => element.style.display = 'none');
}

// Function to adjust font size moderately (single fixed scaling)
function adjustFontSize() {
    const textElements = document.querySelectorAll("body, p, h1, h2, h3, h4, h5, h6, span, div, a");

    textElements.forEach(element => {
        // Compute the current font size
        const computedStyle = window.getComputedStyle(element);
        const currentFontSize = parseFloat(computedStyle.fontSize);

        // Apply a fixed scale factor (mildly bigger font size)
        const newFontSize = currentFontSize * fontSizeScale;

        // Apply changes to font size without changing line height drastically
        element.style.fontSize = `${newFontSize}px`;
        element.style.color = "#000000"; // Ensure good contrast
    });
}

// Function to improve layout readability without disrupting the page structure
function adjustLayout() {
    const body = document.body;

    // Limit the width of the body content for better readability (don’t break the layout)
    body.style.maxWidth = "100%"; // Let the content flow naturally
    body.style.margin = "0";  // No need to center content
    body.style.padding = "10px";  // Some padding for breathing room

    // Ensure the page doesn't break by preserving original layout styles
    const textElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span, div");
    textElements.forEach(element => {
        element.style.lineHeight = "1.5"; // A small line height increase for readability
    });
}

// Function to ensure simplified styles adapt dynamically (improve contrast and readability)
function dynamicallyAdaptStyles() {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
        body {
            background-color: #f5f5f5; /* Light background for readability */
            color: #333; /* Text color for good contrast */
        }

        a {
            color: #007bff; /* Highlight links for visibility */
            text-decoration: underline;
        }

        a:hover {
            text-decoration: none; /* Subtle hover effect */
        }

        /* Focused styles for accessibility */
        a:focus, button:focus {
            outline: 2px solid #007bff; /* Visible focus outline */
            outline-offset: 2px;
        }
    `;
    document.head.appendChild(styleSheet);
}

// Main function to simplify the page while preserving the layout
function simplifyPage() {
    removeUnnecessaryElements(); // Hide unwanted elements (ads, sidebars)
    adjustFontSize(); // Apply a single, mildly bigger font size
    adjustLayout(); // Maintain layout structure but improve readability
    dynamicallyAdaptStyles(); // Apply adaptable styling for better contrast and readability
}

// Execute page simplification
simplifyPage();
