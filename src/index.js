document.addEventListener('DOMContentLoaded', () => {
    // renderImg();
    dropDown();
    renderAll();
});

function renderImg() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(result =>result.message.forEach(img => renderdog(img))); 
};

function renderdog(dog) {
    let container = document.getElementById('dog-image-container');
    let newImg = document.createElement('img');
    newImg.src = dog;
    container.appendChild(newImg)
};

function renderAll() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(result =>{
            breeds = Object.keys(result.message).forEach(breed => addBreed(breed))
            }); 
};

function addBreed(breed) {
    let list = document.getElementById('dog-breeds');
    let li = document.createElement('li');
    li.innerHTML = breed;
    list.appendChild(li);
    li.addEventListener('click', event => {
        event.target.style.color = "purple";
    })
}

function dropDown() {
    let li= document.querySelector('li');
    let drop = document.getElementById('breed-dropdown');
    drop.addEventListener('click', event => {
        if(event.target.value == 'a') {
        li.filter((breed) => breed.startsWith('a'));
        };
        if(event.target.value == 'b') {
            console.log('b');
        };
        if(event.target.value == 'c') {
            console.log('c');
        };    
        if(event.target.value == 'd') {
            console.log('d');
        };
    });
}

