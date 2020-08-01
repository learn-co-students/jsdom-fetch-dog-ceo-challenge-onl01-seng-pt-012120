 let breedList = [];

// Challenge 1
// Add JavaScript so that:
// on page load
// fetch the images using the url above ⬆️
// parse the response as JSON
// add image elements to the DOM for each🤔 image in the array

    function fetchImgUrl() {
        return fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(resp => resp.json())
        .then(json => renderImg(json));
      }

 

      function renderImg(json) {
      const div = document.querySelector("#dog-image-container")
      json.message.forEach(dogUrl => {
      const img = document.createElement('img')
      img.src= dogUrl
      div.appendChild(img)
    })
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    fetchImgUrl()
  })

//   Challenge 2
// After the first challenge is completed, add JavaScript so that:
// on page load, fetch all the dog breeds using the url above ⬆️
// add the breeds to the page in an <ul> (take a
// const breedUrl = 'https://dog.ceo/api/breeds/list/all'




// fetch('https://dog.ceo/api/breeds/list/all'
// )
// .then(function(response) {
//   return response.json();
// })
// .then(function(json) {
//   console.log(json)
// });

// Once all of the breeds are rendered in the <ul>, add JavaScript so that the font color of a particular <li> changes on click. This can be a color of your choosing.
// When the user clicks any of the dog breed list items, the color the text should change.
 

function fetchImgB() {
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => 
        // breedList.push(json);
        renderImgB(json));
  }



  function renderImgB(json) {
    //   debugger
   const ul = document.querySelector("#dog-breeds")
 breedList = Object.keys(json.message);

 breedList.forEach(breedUrl => {
  const imgB = document.createElement('li')
  imgB.innerText= breedUrl
  imgB.addEventListener('click', _ => imgB.style = ('color: red'));
  ul.appendChild(imgB)
})
}

document.addEventListener('DOMContentLoaded', function() {
    fetchImgB()
})




// Challenge 4
// Once we are able to load all of the dog breeds onto the page, add JavaScript so that the user can filter breeds that start with a particular letter using a dropdown.
// For example, if the user selects 'a' in the dropdown, only show the breeds with names that start with the letter a. For simplicity, the dropdown only includes the letters a-d. However, we can imagine expanding this to include the entire alphabet






//         if (breedList[0][0]== event.target.value) {
    
document.getElementById('submit').onclick = function() {
  var selected = [];
  for (var option of document.getElementById('breed-dropdown').options) {
    if (option.selected) {
      selected.push(option.value);
    }
  }
  alert(selected);
}