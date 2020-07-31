console.log('%c HI', 'color: firebrick')


function fetchImage() { 
    return fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(response => response.json())    
    .then(json => renderImage(json))

    }

function renderImage(img){
    const imageContainer = document.getElementById('dog-image-container')
    img.message.forEach(dog => {
        imageContainer.innerHTML += `<img src = '${dog}'>`
    })
}

function fetchBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(json => renderBreeds(json))
}

function renderBreeds(breeds){
const breedContainer = document.getElementById('dog-breeds')
   const dogBreeds = Object.keys(breeds.message)
   dogBreeds.forEach(breed =>{
        breedContainer.innerHTML += `<li> ${breed} </li> ` 
    })
}

function changeColor(){
    
    document.getElementById('dog-breeds').addEventListener('click', (e) =>{
        e.target.style.color = "#5a8f82"
    })
}


function filterLetter(){
    let dropDown = document.getElementById("breed-dropdown")
    dropDown.onchange = function() {
        let letter = dropDown.value;
        let breedContainer = document.getElementById('dog-breeds')
        let dogBreeds = [...(breedContainer.querySelectorAll('li'))]

        let filterBreeds = dogBreeds.filter(function(e) {
            return e.innerText.startsWith(letter)
        })

        breedContainer.innerHTML = ""

        filterBreeds.forEach(breed =>{

            breedContainer.innerHTML += `<li> ${breed.innerText} </li> ` 
        })
      

 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchImage()
    fetchBreeds()
    changeColor()
    filterLetter()
})
