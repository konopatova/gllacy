var openModal = document.querySelector('.is-active');
var modalWindow = document.querySelector('.modal-contact');
var modalForm = document.querySelector('form');
var contactForm = document.querySelector('.map-contact');
var closeModal = document.querySelector('.modal-contact-close');

contactForm.addEventListener('submit',function(e){
    e.preventDefault();
    modalWindow.classlist.toggle('is-active');
});

closeModal.addEventListener('click',function(){
    modalWindow.classList.toggle('is-active');
});

window.addEventListener('keydown', function(esc) {
    if (esc.keyCode===27) {
        modalWindow.classlist.toggle('is-active');
    };
});

console.log(openModal)

function initMap() {
var adress = {lat: 59.9387942, lng: 30.3208946};
var pin ="./img/pin.png";
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
pin.style.boxShadow ='0 2px 6px rgba(0,0,0,.3)';


