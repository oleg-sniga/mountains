const $ = require('jquery');// если будет нужен
// const $ = require('./jquery/jquery.min.js');// если будет нужен


const slider = require('./common/slider');
const hamburger = require('./common/hamburger-menu');
const blur = require('./common/blur');
const parallax = require('./common/parallax');
const preload = require('./common/preloader');
const authorization = require('./common/authorization');
const blogmenu = require('./common/blog-menu');
const flipper = require('./common/flipper');

slider();
hamburger();
preload();
authorization();
blogmenu();
flipper();

if (document.querySelector('.reviews__content')) {
    blur.set();
    window.onresize = function () {
        blur.set();
    }
}

if (document.querySelector('.parallax')) {
    parallax();
}
