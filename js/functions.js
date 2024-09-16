const imageElement = document.getElementById("dice");

imageElement.addEventListener("click", function() {
     const randomNumber = Math.floor(Math.random() * 6) + 1;
    
    let newImageSrc = "";

    if (randomNumber === 1) {
        newImageSrc = "./img/1.png";
    } else if (randomNumber === 2) {
        newImageSrc = "./img/2.png";
    } else if (randomNumber === 3) {
        newImageSrc = "./img/3.png";
    } else if (randomNumber === 4) {
        newImageSrc = "./img/4.png";
    } else if (randomNumber === 5) {
        newImageSrc = "./img/5.png";
    } else if (randomNumber === 6) {
        newImageSrc = "./img/6.png";
    }

    imageElement.src = newImageSrc;
});
