console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchDogs(){
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderDogs(json));
    
}

function fetchBreeds(){
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderBreeds(json))
}

function renderBreeds(breeds){
    const main = document.getElementById('dog-breeds')
    const arr = breeds
    console.log(arr)
}

function renderDogs(dogs) {
    const main = document.getElementById('dog-image-container')
    dogs.message.forEach(dog => {
        const img = document.createElement('IMG')
        img.setAttribute('src', dog)
        main.appendChild(img)
      })
  }




document.addEventListener('DOMContentLoaded', function() {
    fetchDogs()
    fetchBreeds()
  })
  