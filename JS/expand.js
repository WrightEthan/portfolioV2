// var themeToggle = document.querySelector('#themeSwap');
// var body = document.querySelector('body');
// var containerToggle = document.querySelector('.container');
// var logoToggle = document.querySelector('.logo');
// var navToggle = document.querySelector('nav');
// var oneToggle = document.querySelector('.one');
// var twoToggle = document.querySelector('.two');
// var threeToggle = document.querySelector('.three');
// var fourToggle = document.querySelector('.four');
// var fiveToggle = document.querySelector('.five');
// var circleToggle = document.querySelector('.circle');

// themeToggle.addEventListener('click', () => {


// });

// Logo and text
// Nav text
// All SVG icons
// All body text

var expand = document.querySelector('#expandButton');
var menuOpen1 = document.querySelector('#menuOpen1');
var menuOpen2 = document.querySelector('#menuOpen2');
var menuOpen3 = document.querySelector('#menuOpen3');
var menuOpen4 = document.querySelector('#menuOpen4');
var menuOpen5 = document.querySelector('#menuOpen5');


expandButton.addEventListener('click', () => {
    navbar.classList.toggle("navToggle");
    navbar.classList.toggle("navToggleD");
    menuArrow.classList.toggle("closed");
    menuArrow.classList.toggle("open");
    menuOpen1.classList.toggle("menuItem");
    menuOpen1.classList.toggle("menuItemExpanded");
    menuOpen2.classList.toggle("menuItem");
    menuOpen2.classList.toggle("menuItemExpanded");
    menuOpen3.classList.toggle("menuItem");
    menuOpen3.classList.toggle("menuItemExpanded");
    menuOpen4.classList.toggle("menuItem");
    menuOpen4.classList.toggle("menuItemExpanded");
    menuOpen5.classList.toggle("menuItem");
    menuOpen5.classList.toggle("menuItemExpanded");

})