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




fetch('https://dog.ceo/api/breeds/list/all'
)
.then(function(response) {
  return response.json();
})
.then(function(json) {
  console.log(json)
});
 

// function fetchImgB() {
//     return fetch('https://dog.ceo/api/breeds/list/all')
//     .then(resp => resp.json())
//     .then(json => renderImgB(json));
//   }



//   function renderImgB(json) {
//   const ul = document.querySelector("#dog-breeds")
//   json.message.forEach(breedUrl => {
//   const imgB = document.createElement('imgB')
//   imgB.src= breedUrl
//   ul.appendChild(imgB)
// })
// }

// document.addEventListener('DOMContentLoaded', function() {
//     fetchImgB()
// })
