console.log('%c HI', 'color: firebrick')

function fetchImage(){
    return fetch("https://dog.ceo/api/breeds/image/random/4")
}

document.addEventListener('DOMContentLoaded',function(){
    fetchImage()
})