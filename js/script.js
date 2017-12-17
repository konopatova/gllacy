/*var buttonSearchBg = document.querySelector('.button.search');
var buttonEnterBg = document.querySelector('.button.enter');
var buttonCartBg = document.querySelector('.button.cart');
var buttonSearch = document.querySelector('#search');
var buttonEnter = document.querySelector('#enter');
var buttonCart = document.querySelector('#cart');
var animateSvg = document.querySelector('.animate-svg');
var animateButton = document.querySelector('.animate-button-bg');

buttonSearchBg.onmouseover = function() {
    this.classList.toggle ('animate-button-bg');
    buttonSearch.classList.toggle ('animate-svg');
};

buttonEnterBg.onmouseover = function() {
    this.classList.toggle ('animate-button-bg');
    buttonEnter.classList.toggle ('animate-svg');
};

buttonCartBg.onmouseover = function() {
    this.classList.toggle ('animate-button-bg');
    buttonCart.classList.toggle ('animate-svg');
};

buttonSearchBg.onmouseout = function() {
    this.classList.remove ('animate-button-bg');
    buttonSearch.classList.remove ('animate-svg');
};

buttonEnterBg.onmouseout = function() {
    this.classList.remove ('animate-button-bg');
    buttonEnter.classList.remove ('animate-svg');
};

buttonCartBg.onmouseout = function() {
    this.classList.remove ('animate-button-bg');
    buttonCart.classList.remove ('animate-svg');
};
/*


/********************************************/

function initMap() {
var adress = {lat: 59.9387942, lng: 30.3208946};
var pin ='/img/hit.png'
var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: adress 
        });
var marker = new google.maps.Marker({
    position: adress,
    map: map,
    icon: pin,
    draggable:true,
    animation: google.maps.Animation.DROP,
    position: {lat: 59.9381, lng: 30.321},
    title:"",
        });
      }
map.title = '';
icon.style.borderRadius = '10px';
icon.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';