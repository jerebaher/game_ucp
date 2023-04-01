import images from "./images.js"

let index = 0;
let arrows = document.getElementsByClassName('arrow')
let imgContainer = document.getElementById("image-text-container");
let soundBtn = document.getElementById('play-sound')
let sound = document.getElementById('sound')
let randomBtn = document.getElementById('random-btn')

const getRandomIndex = (max) => {
    return Math.floor(Math.random() * max);
}

const isTheSameImage = (newIndex) => {
    return newIndex === index
}

const loadImage = (currImage) => {
    index = images.indexOf(currImage)

    let imgElement = document.createElement("img");
    imgElement.setAttribute('id', 'image')
    imgElement.src = currImage.imageUrl;
    imgContainer.appendChild(imgElement);

    let paragraph = document.createElement("p")
    paragraph.setAttribute('id', 'name')
    let textNode = document.createTextNode(currImage.name)
    paragraph.classList.add('flex', 'justify-center', 'font-mono', 'text-gray-900','text-6xl','font-semibold')
    paragraph.appendChild(textNode)
    imgContainer.appendChild(paragraph)
}

const deleteImage = () => {
    let image = document.getElementById('image');
    image.remove()
    let name = document.getElementById('name');
    name.remove()
}

const playSound = (image) => {
    sound.setAttribute('src', image.pronunciation)
    sound.play()
}

const changeImage = (newImage) => {
    deleteImage()
    loadImage(newImage)
}

const getAdjacentImage = (currImage, direction) => {
    const objectsArray = [...images]; 
    const currentIndex = objectsArray.indexOf(currImage);
  
    if (direction === 'next') {
      return objectsArray[currentIndex + 1] || objectsArray[0];
    } else {
      return objectsArray[currentIndex - 1] || objectsArray[objectsArray.length - 1];
    }
  }
  

Array.from(arrows).forEach(arrow => {
    arrow.addEventListener("click", (e) => {
        let currImage = images[index];
        let adjacemtImage;
        if(arrow.hasAttribute('right')){
            adjacemtImage = getAdjacentImage(currImage, 'next')
        }else{
            adjacemtImage = getAdjacentImage(currImage, 'prev')
        }
        changeImage(adjacemtImage)
    })
});

soundBtn.addEventListener('click', (e) =>{
    let image = images[index];
    playSound(image)
})

randomBtn.addEventListener('click', (e) =>{
    let randomIndex = getRandomIndex(images.length)
    if(isTheSameImage(randomIndex)){
        randomIndex++
    }
    let randomImage = images[randomIndex]
    changeImage(randomImage)
})

loadImage(images[index]);