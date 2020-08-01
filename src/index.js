function fetchImages() {
    return fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => json.message.forEach(img => addImage(img)));
}
  
function addImage(img) {
    const main = document.getElementById('dog-image-container')
    const newImgEl = document.createElement('img');
    newImgEl.src = img;
    main.appendChild(newImgEl);
}

function fetchBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(results => {
        breeds = Object.keys(results.message);
        renderBreeds(breeds);
        addBreedSelectListener();
    });
}

function renderBreeds(breeds) {
    const ul = document.getElementById('dog-breeds')
    removeChildren(ul);
    breeds.forEach(breed => addBreed(breed))
}

function addBreed(breed) {
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    li.style.cursor = 'pointer';
    ul.appendChild(li);
    li.addEventListener('click', updateColor);
}

function updateColor(event) {
    event.target.style.color = 'palevioletred';
}

function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
    selectBreedsStartingWith(event.target.value);
  });
}

function selectBreedsStartingWith(letter) {
    renderBreeds(breeds.filter(breed => breed.startsWith(letter)));
}

function removeChildren(el) {
    let child = el.lastElementChild;
    while (child) {
        el.removeChild(child)
        child = el.lastElementChild;
    }
}


document.addEventListener('DOMContentLoaded', function() {
    fetchImages();
    fetchBreeds();
})
