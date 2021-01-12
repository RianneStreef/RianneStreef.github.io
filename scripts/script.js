console.log('test');



const header = document.getElementById('sticky-header');

setTimeout(() => sticky-header.classList.add('header-fx'), 100)


window.onscroll = function () {
  changeStickyClass()
}

// Get the offset position of the navbar
var sticky = header.offsetTop

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function changeStickyClass() {
  if (window.pageYOffset > '230') {
    header.classList.add('sticky')
  } else {
    header.classList.remove('sticky')
  }
}