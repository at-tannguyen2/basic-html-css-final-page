//Handle search box
var searchBox = document.querySelector('.search-box');
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('fa-search') && !searchBox.classList.contains('show')) {
    searchBox.classList.add('show');
  } else if (e.target.classList.contains('search-box') || e.target.classList.contains('search-input')) {
    searchBox.classList.add('show');
  } else {
    searchBox.classList.remove('show');
  }
})

