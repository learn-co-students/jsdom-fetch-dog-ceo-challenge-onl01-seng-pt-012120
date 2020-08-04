console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchImage(){
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json));
};

function fetchBreeds(){
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderBreeds(json));
};

function renderImages(pics) {
    const dogImgCont = document.getElementById('dog-image-container')
    pics['message'].forEach(pic => {
        let img = document.createElement('img');
        img.src = pic
        dogImgCont.appendChild(img);
    });
};

function renderBreeds(breeds) {
    let dogBreedUl = document.getElementById('dog-breeds')
    
    Object.keys(breeds['message']).forEach(breed => {
        let li = document.createElement('li');
        li.innerText = breed;
        dogBreedUl.appendChild(li);
    })
}



document.addEventListener('DOMContentLoaded',function(){
    fetchImage();
    fetchBreeds();
});

const dropDown = document.getElementById('breed-dropdown')

dropDown.children.forEach(option =>{
    option.addEventListener('click', (e)=>{
        let breeds = dogBreedUl.children;
        debugger;
    })
})