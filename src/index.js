document.addEventListener('DOMContentLoaded', () => {
    // renderImg();
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
    li.li = breed;
    list.appendChild(li);
}

