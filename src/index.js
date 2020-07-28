console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    fetchDogs()
    fetchBreeds()
})

async function fetchDogs() {
    const resp = await fetch('https://dog.ceo/api/breeds/image/random/4')
    const json = await resp.json()
    return renderDogs(json)
}

async function fetchBreeds() {
    const resp = await fetch('https://dog.ceo/api/breeds/list/all')
    const json = await resp.json()
    return renderBreeds(json)
}

function renderDogs(json) {
    const dogImgContainer = document.getElementById('dog-image-container')
    json.message.forEach(dog => {
        dogImgContainer.innerHTML += `<img src = '${dog}'>`
    })
}

function renderBreeds(json) {
    const dogBreed = document.querySelector('#dog-breeds');
    const dogObj = json.message
    Object.keys(dogObj).forEach(dog => {
      dogBreed.innerHTML += `<li id='${dog.charAt(0)}'>${dog}</li>`;
    })
    textColor()

    let dropDown = document.querySelector('#breed-dropdown')

    dropDown.addEventListener('change', (e) => {
        let breedChildren = document.querySelector('#dog-breeds').children
        let breedsArray = [...breedChildren]
        breedsArray.forEach(breed => {
            if (breed.id === e.target.value) {
                breed.style.display = null      
            } else {
                breed.style.display = 'none'
            }
        }) 
    })
}


function textColor() { 
    let dogBreedContainer = document.querySelector('#dog-breeds')
    dogBreedContainer.addEventListener("click", (e) => {
        e.target.style.color = '#69b9ff'       
    })
}

