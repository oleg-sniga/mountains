const $ = require('jquery');// если будет нужен

const doc = document;

// const modal = require('./common/modal');
const softScroll = require('./common/scroll-soft');
const slider = require('./common/slider');
const hamburger = require('./common/hamburger-menu');
const blur = require('./common/blur');
const parallax = require('./common/parallax');
const preload = require('./common/preloader');
const authorization = require('./common/authorization');
const blogmenu = require('./common/blog-menu');
const flipper = require('./common/flipper');
const contact = require('./common/contact-form');
const skills = require('./common/skills');
const adminTab = require('./common/admin-tab');
// const googlMap = require('./common/map');

softScroll();
slider();
hamburger();
authorization();
blogmenu();
flipper();
contact();
adminTab();

// if (doc.querySelector('.google-map')){
//   googlMap();
// }
function initMap(){
  var elem = document.getElementById('map');
  var options = {
      zoom: 5,
      center: { lat: 41.1257836, lng: 1.1685435}
  };

  var myMap = new google.maps.Map(elem, options);
}


if (doc.querySelector('.skills')){
  skills();
}
if (doc.querySelector('.preloader')){
  preload();
}

if (doc.querySelector('.reviews__content')) {
    blur.set();
    window.onresize = function () {
        blur.set();
    }
}

if (doc.querySelector('.parallax')) {
  if ($(window).width() >= '769') {
    parallax();
  } else {
    $('.parallax__layer').remove();
  }
}
