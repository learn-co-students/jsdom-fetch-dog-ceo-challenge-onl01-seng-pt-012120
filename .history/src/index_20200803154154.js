console.log('%c HI', 'color: firebrick')

function fetchImage(){
    return fetch("https://dog.ceo/api/breeds/image/random/")
    .then(resp => resp.json())
    .then(json => renderImages(json))
}

function renderImages(pics) {
    debugger;
    const dogUl = document.getElementById('dog-breeds')
    pics.forEach(pic => {
        let li = document.createElement('li');
        let a = document.createElement('a');
        debugger;
    });
}

document.addEventListener('DOMContentLoaded',function(){
    fetchImage();
})