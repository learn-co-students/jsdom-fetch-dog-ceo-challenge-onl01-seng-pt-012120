console.log('%c HI', 'color: firebrick')
// api to query
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// images handler
let imageHandler = {
    // iterate over an array of img and insert it in the div element of the dom
    insertImages: function(images) {
        const div = document.getElementById("dog-image-container");
        images.forEach(image => {
            let img = document.createElement('img');
            img.setAttribute('src', image);
            img.sizes = '1'
            div.appendChild(img);
        });
    },
    // fetch the img api and insert the imgs in the dom
    fetchImages: function fetchImages() {
        fetch(imgUrl).then(resp => {return resp.json()}).then(images => this.insertImages(images.message));
    }
};

// breed handler
let breedHandler = {
    insertBreed: function(breeds) {
        const ul = document.getElementById("dog-breeds");
        ul.innerText = '';
       breeds.forEach (breed => {
        let li = document.createElement('li');
        li.innerHTML = breed;
        ul.appendChild(li);
       });
       this.ulEventing(ul);
    },
    ulEventing: function(element) {
        element.addEventListener('click', function(event){
            let elementClicked = event.target;
            elementClicked.style.color = '#ff2093';
        });
    },

    selectionEvent: function(breeds) {
        const selection = document.getElementById("breed-dropdown");

        selection.addEventListener('change', function() {
            breedHandler.insertBreed(breeds.filter(breed => breed.startsWith(selection.value)));
            
        },);
    },

    fetchBreeds: function() {
        fetch(breedUrl).then(resp => {return resp.json()}).then(results => {
            let  breeds = Object.keys(results.message);
            this.insertBreed(breeds);
            this.selectionEvent(breeds);
        });
    }
};

document.addEventListener('DOMContentLoaded', function(){
    imageHandler.fetchImages();
    breedHandler.fetchBreeds();
});




