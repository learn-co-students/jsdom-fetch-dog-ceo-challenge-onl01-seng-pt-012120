console.log('%c HI', 'color: firebrick')

function fetchImage(){
    return fetch("https://dog.ceo/api/breeds/image/random/")
    .then(resp => resp.json())
    .then(json => renderImages(json))
}

function renderImages(pics) {
    debugger;
    const main = document.querySelector('main');
    pics.forEach(pic => {
        
    });
}

document.addEventListener('DOMContentLoaded',function(){
    fetchImage()
})