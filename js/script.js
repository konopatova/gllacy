var buttonSearchBg = document.querySelector('.button.search');
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
buttonSearch.onmouseover = function() {
    buttonSearch.classList.toggle ('animate-svg')
};
*/


    /* event.preventDefault();
while (button) {
var buttonHover = document.querySelector('.search');
    buttonHover.style.fill='#000000';
}
});

 */
