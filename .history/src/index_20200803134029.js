console.log('%c HI', 'color: firebrick')

function fetchImage(){
    return fetch("https://dog.ceo/api/breeds/image/random/")
}

document.addEventListener('DOMContentLoaded',function(){
    fetchImage()
})