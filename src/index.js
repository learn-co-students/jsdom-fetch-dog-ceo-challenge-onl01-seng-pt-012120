console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


function getImages() {
  return fetch(imgUrl)
    .then(res => res.json())
    .then(json => renderImages(json))
}

function getBreeds() {
  return fetch(breedUrl)
  .then(res => res.json())
  .then(json => renderBreeds(json))
}

function getSortedBreeds(letter) {
  console.log(`testing with ${letter}`)
  return fetch(breedUrl)
    .then(res => res.json())
    .then(json => filterBreeds(letter, json))
    .then(filteredBreeds => replaceBreeds(filteredBreeds))
}

function replaceBreeds(breeds) {
  const ul = document.getElementById('dog-breeds')
  ul.innerHTML = ""
  breeds.forEach(breed => {
    const li = document.createElement('li')
    li.innerText = `${breed[0].toUpperCase()}${breed.slice(1)}`
    ul.appendChild(li)
  })
  console.log('breeds filtered')
}

function filterBreeds(letter, json) {
  let sortedBreeds = []
  for (const breed in json.message) {
    // sortedBreeds.push(breed) if (breed[0] == letter)
    if (breed[0] === letter) {sortedBreeds.push(breed)}
  }
  return sortedBreeds
}

function renderBreeds(breeds) {
  const ul = document.getElementById('dog-breeds')
  for (const breed in breeds.message) {
    const li = document.createElement("li")
    li.innerText = `${breed[0].toUpperCase()}${breed.slice(1)}`
    ul.appendChild(li)
  }
}

function renderImages(images) {
  const div = document.getElementById('dog-image-container')
  images.message.forEach(src => {
    const img = document.createElement('img')
    img.src = src
    div.appendChild(img)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  
  getImages()
  getBreeds()

  const selectBreed = document.getElementById('breed-dropdown')
  selectBreed.addEventListener('change', (event) => {
    // alert(`you've selected ${event.target.value}`)
    getSortedBreeds(event.target.value)
  })
})

// choose letter from dropdown
// pass that letter to function that returns
// only the breeds that start with that letter
// try to leverage existing renderBreeds function