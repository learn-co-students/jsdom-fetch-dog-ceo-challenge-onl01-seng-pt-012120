console.log('%c HI', 'color: firebrick')

function fetchImage(){
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => renderImages(json));
};

function renderImages(pics) {
    const dogUl = document.getElementById('dog-breeds')
    pics.forEach(pic => {
        debugger
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = pic
        li.appendChild(a);
        dogUl.appendChild(li);
    });
};

document.addEventListener('DOMContentLoaded',function(){
    fetchImage()
});