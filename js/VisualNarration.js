console.log("Visual Narration is activated");

let currentElementIndex = 0;
let elementstonarrate = [];

function Elements_To_Narrate(){

    const textElements = document.querySelectorAll('p1, h1, h2, h3, h4, h5, h6, a');
    elementstonarrate = Array.from(textElements);

    const imageElements = document.querySelectorAll('img');
    imageElements.forEach(img => {
        elementstonarrate.push({ type: 'image', alt: img.alt || "An image" });
    });

    elementstonarrate.unshift({type: 'text', content: document.title});
}

function Narration(){

    let text = "";

    if (element.type === 'text'){
        text = element.textContent;
    }else if(element.type === 'img'){
        text = `Image: ${element.alt}`;
    }

    speak(text);
}

