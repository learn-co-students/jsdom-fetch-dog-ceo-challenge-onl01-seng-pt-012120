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
        dropDown(result.message);    
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

function dropDown(message) {
    let drop = document.getElementById('breed-dropdown');
    drop.addEventListener('click', event => {
        // Clear any children elements in the <ul id="dog-breeds">
        dogBreeds = document.getElementById('dog-breeds');
        dogBreeds.innerHTML = '';
      // Then readd li elements based on what we are able to parse 
      // using the '.filter()' function on our collection of breeds
      for(const breedName in message) {
          if(breedName.startsWith(event.target.value)) {
            let li = document.createElement('li');
            li.innerHTML = breedName;
            dogBreeds.appendChild(li);
          }
      }
      
    //   if(event.target.value == 'a') {
    //         console.log(list)
    //     list.filter((breed) => breed.startsWith('a'));
    //     };
    //     if(event.target.value == 'b') {
    //         console.log('b');
    //     };
    //     if(event.target.value == 'c') {
    //         console.log('c');
    //     };    
    //     if(event.target.value == 'd') {
    //         console.log('d');
    //     };
    });
}

// function dropDown() {
//     let li= document.querySelector('li');
//     let drop = document.getElementById('breed-dropdown');
    
//     drop.addEventListener('click', event => {
      
//     });
//   }

