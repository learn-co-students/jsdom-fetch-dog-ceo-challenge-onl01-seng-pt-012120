console.log('%c HI', 'color: firebrick')

function fetchImage(){
    return fetch("https://dog.ceo/api/breeds/image/random/")
    .then(resp => resp.json())
    .then(json => console.log(json))
}

document.addEventListener('DOMContentLoaded',function(){
    fetchImage()
})