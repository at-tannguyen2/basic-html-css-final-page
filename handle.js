//Handle search box
const searchBox = document.querySelector('.search-box')
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('fa-search') && !searchBox.classList.contains('show')) {
    searchBox.classList.add('show')
  } else if (e.target.classList.contains('btn-clear')) {
    searchBox.classList.remove('show')
  }
})
//Handle header scroll
const nav = document.querySelector('.header-nav')
document.addEventListener('scroll', function() {
  if (window.pageYOffset >= 250) {
    nav.classList.add('fixed')
  } else {
    nav.classList.remove('fixed')
  }
})
//Handle slide
// var slideIndex = 0
// function handleSlide() {
//   const slide = document.getElementsByClassName('item-slide')
//   // for (var i = 0; i <= slide.length; i++) {
//   //   slide[i].style.display = 'none'
//   //   console.log(i)  
//   // }
//   // slideIndex++
//   // if (slideIndex > slide.length) {slideIndex = 1}
//   // slide[slideIndex - 1].style.display = 'block';
//   // setTimeout(handleSlide, 2000)
//   console.log(slide)
// }
// handleSlide()
