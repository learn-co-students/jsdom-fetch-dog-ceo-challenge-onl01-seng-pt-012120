console.log('%c HI', 'color: firebrick')

function fetchImage(){
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => renderImages(json));
};

function renderImages(pics) {
    const dogUl = document.getElementById('dog-breeds')
    dogUl.innerHTML = "<h1>Random 4</h1>"
    pics['message'].forEach(pic => {
        let li = document.createElement('li');
        let img = document.createElement('img');
        img.src = pic
        li.appendChild(img);
        dogUl.appendChild(li);
    });
};

document.addEventListener('DOMContentLoaded',function(){
    fetchImage()
});