console.log('%c HI', 'color: firebrick');
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

function fetchImg() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImg(json))
}

function renderImg(imgs) {
    const d = document.getElementById('dog-image-container');
    imgs.message.forEach(img => {
        const i = document.createElement("img");
        i.src = img;
        d.appendChild(i)
    })
}

function fetchBreeds() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderBreed(json))
}

function renderBreed(b) {
    const d = document.getElementById('dog-breeds');
    Object.keys(b.message).forEach(breed => {
        const i = document.createElement("li");
        i.onclick = function() {c(this)};
        i.innerHTML = breed;
        d.appendChild(i)
    })
}

document.addEventListener("DOMContentLoaded", function() {
    fetchImg();
    fetchBreeds()
})

function c(dog) {
    let ul = document.getElementById("dog-breeds");
    let z = ul.getElementsByTagName('li');
    for (var i = 0; i < z.length; i++) {
        if(z[i].innerText == dog.innerText) {
            z[i].style.color = "rgb(244, 67, 54)";
        }
    }
}

document.addEventListener("change", function() {
    let v = document.getElementById("breed-dropdown").value;
    let ul = document.getElementById("dog-breeds");
    let z = ul.getElementsByTagName('li');
    for (var i = 0; i < z.length; i++) {
        let n = Array.from(z[i].innerText);
        if(n[0] == v) {z[i].hidden = false}
        else {z[i].hidden = true}
    };
})