console.log('%c HI', 'color: firebrick')

function fetchImages() {
    return fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => renderImages(json));
}
  
function renderImages(json) {
    const main = document.getElementById('dog-image-container')
    const imgs = json.message
    imgs.forEach(pic => {
      const p = document.createElement("p")
      p.innerHTML = `<img src=${pic}>`
      main.appendChild(p)
    })
}

function fetchBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => renderBreeds(json));
}

function renderBreeds(json) {
    const ul = document.getElementById('dog-breeds')
    const breeds = json.message
    Object.keys(breeds).forEach(key => {
      const li = document.createElement("li")
      li.innerHTML = `${key}`
      ul.appendChild(li)
    })
}

function filterBreeds() {
    let dropDown = document.getElementById("breed-dropdown")
    dropDown.onchange = function() {
        let letter = dropDown.value;
        let breedContainer = document.getElementById('dog-breeds');
        let dogBreeds = breedContainer.querySelectorAll('li');

        const startsWithA = dogBreeds.filter((breed) => breed.innerText.startsWith("a"));
        const startsWithB = dogBreeds.filter((breed) => breed.innerText.startsWith("b"));
        const startsWithC = dogBreeds.filter((breed) => breed.innerText.startsWith("c"));
        const startsWithD = dogBreeds.filter((breed) => breed.innerText.startsWith("d"));

        if (letter == "a"){
            startsWithA.forEach(dog =>
                breedContainer.innerHTML += `<li>${dog.innerText}</li>`)
        }


    }


}

document.querySelectorAll('li').forEach(li => li.addEventListener('click', _ => li.style.color = 'red'));
  
document.addEventListener('DOMContentLoaded', function() {
    fetchImages();
    fetchBreeds();
    filterBreeds()
})
