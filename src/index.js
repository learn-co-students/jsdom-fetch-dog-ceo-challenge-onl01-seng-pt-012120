console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    fetchImages()
    fetchBreeds()
});

function fetchImages() {
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => images(json));
};

function fetchBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => breeds(json));
};

function breeds(json) {
    let dogBreeds = document.querySelector('ul')
    Object.keys(json.message).forEach(breed => {
        dogBreeds.innerHTML += `<li>${breed}</li>`
    })
    changeColor()

    selector = document.querySelector('#breed-dropdown')
    selector.addEventListener('change', function(e) {
        breedArray = [...document.querySelector('#dog-breeds').children]
        breedArray.forEach(breed => {
            //debugger
            if (breed.innerText.startsWith(selector.value, 0)) {
                breed.style.display = null
            }
            else {
                breed.style.display = 'none'
            };
        })
    })
} 

function images(json) {
    let image = document.getElementById('dog-image-container')
    json.message.forEach(dog => {
        image.innerHTML += `<img src = ${dog}>`
    })
}

function changeColor() {
    let breeds = document.querySelector('#dog-breeds')
    breeds.addEventListener('click', function(e) {
        //debugger
        e.target.style.color = '#FF00C8'
    })
}