console.log("Script is running");

const images= document.querySelectorAll("img");
images.forEach((img)=> {
    console.log('Image: ${img.alt}');
});