/* window.onscroll = function() {myFunction()};


var contener__header = document.getElementsByClassName("contener__header");

var sticky = contener__header.offsetTop;


function myFunction() {
  if (window.pageYOffset >= sticky) {
    contener__header.classList.add("sticky")
  } else {
    contener__header.classList.remove("sticky");
  }
} */

var link = document.querySelector('.main__link', '.portfolio__link', '.services__link', 'contacts__link' )

link.addEventListener('click', function(evt){
  evt.preventDefault();
  console.log('Клик по ссылке home');

});

