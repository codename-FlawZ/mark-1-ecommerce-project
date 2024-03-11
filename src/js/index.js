/* Loading JS */

let i = 0;
let loading__title = document.querySelector('.loading__title');
let aqua = document.querySelector('.aqua');
let loading = document.querySelector('.loading');
let number = document.querySelector('.number');
let percentBar = document.querySelector('.percentBar');

let interval = setInterval(function(){
    number.innerHTML = i+ '<span>%</span>';
    percentBar.style.width = i+'%';
    i++
    if(i == 101){
        clearInterval(interval);
        setTimeout(function() {
         aqua.style.opacity = '0';
         aqua.style.visibility = 'hidden';
         loading.style.background = '#03a9f4';
         loading__title.style.opacity = '1';
         loading__title.style.visibility = 'visible';
        })
    }
}, 100)

/* Sliders JS */

let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// Config param

let countItem = items.length;
let itemActive = 0;

// Event next click
next.onclick = function () {
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}

// Event Prev Click
prev.onclick = function() {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
}

// Auto Run Slider
let refreshInterval = setInterval (() => {
    next.click();
}, 5500)

function showSlider() {
    // Remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // Active New Item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
}

// Click Thumbnail 
thumbnails.forEach((thumbnail, index)=>{
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})