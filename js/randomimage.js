const myButton = document.querySelector('button');
const image = document.querySelector('img')
const images = ["pic1.jpeg", "pic2.jpeg", "pic3.jpeg", "pic4.jpeg"];



myButton.addEventListener('click', changeImage);

function changeImage() {
    console.log(image);

    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
    image.src = "gfx/" + images[randomIndex]
}