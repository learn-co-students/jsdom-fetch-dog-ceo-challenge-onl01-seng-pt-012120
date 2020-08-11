console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function(){
    loadImages();
    loadBreeds()
})


function loadImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json));
}

function renderImages(json) {
    const imgContainer = document.getElementById('dog-image-container');
    json.message.forEach(element => {
        const newImg = document.createElement('img');
        newImg.src = `${element}`
        imgContainer.appendChild(newImg)
        
    })
}

function loadBreeds() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {
       let breeds = Object.keys(json.message);
       renderBreeds(breeds);
       breedSelector(breeds);
    });
   
}

function renderBreeds(breeds) {
    const breedContainer = document.getElementById('dog-breeds');
    removeChildren(breedContainer);
    breeds.forEach(element => {
        const listItemBreeds = document.createElement('li');
        listItemBreeds.innerText = `${element}`
        listItemBreeds.addEventListener('click', updateColor)
        breedContainer.appendChild(listItemBreeds)
    })
}

function removeChildren(elements) {
    let child = elements.lastElementChild; 
    while (child) {
        elements.removeChild(child);
        child = elements.lastElementChild;
    }
}


function breedSelector(breeds) { 
    const selector = document.getElementById('breed-dropdown');
    selector.addEventListener('change', function(event){
        const letter = event.target.value;
        let selectedBreeds =  breeds.filter( breed => breed.startsWith(`${letter}`));
        renderBreeds(selectedBreeds);
    })
}

function updateColor(event) {
    event.target.style.color = 'blue';
}
