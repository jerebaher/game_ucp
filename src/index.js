import images from "./images.js"

let randomIndex = 0;
let arrows = document.getElementsByClassName('arrow')
let imgContainer = document.getElementById("image-text-container");

const getRandomIndex = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

const isTheSameImage = (filter) => {
    return filter === randomIndex
}

const loadImage = (container) => {
    let randomIndexFilter = getRandomIndex(images.length);
    if(isTheSameImage(randomIndexFilter)){
        loadImage(imgContainer)
        return;
    }
    randomIndex = randomIndexFilter
    let image = images[randomIndex];
    let imgElement = document.createElement("img");
    imgElement.setAttribute('id', 'image')
    imgElement.src = image.imageUrl;
    container.appendChild(imgElement);
    loadName(image, container)
}

const loadName = (image, container) => {
    let paragraphNode = document.createElement("p")
    paragraphNode.setAttribute('id', 'name')
    let textNode = document.createTextNode(image.name)
    paragraphNode.classList.add('flex', 'justify-center', 'font-sans', 'text-gray-900','text-6xl','font-semibold')
    paragraphNode.appendChild(textNode)
    container.appendChild(paragraphNode)
}

const deleteImage = () => {
    let image = document.getElementById('image');
    image.remove()
}

const deleteName = () => {
    let name = document.getElementById('name');
    name.remove()
}

const playSound = (image) => {
    console.log('Ingresa al metodo');
    let sound = document.getElementById('sound')
    console.log(sound);
    console.log(image.pronunciation);
    sound.setAttribute('src', image.pronunciation)
    sound.play()
    console.log('Sale del metodo');
}

const changeImage = () => {
    deleteImage()
    deleteName()
    loadImage(imgContainer)
}

Array.from(arrows).forEach(arrow => {
    arrow.addEventListener("click", (e) => {
        changeImage()
    })
});

loadImage(imgContainer);