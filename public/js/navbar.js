'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let navbar = document.querySelector('.nav-perso');

  document.addEventListener('scroll', () => {
    if ( document.documentElement.scrollTop > window.innerHeight / 2 ){
      navbar.classList.add('collapsed');
    } else {
      navbar.classList.remove('collapsed');
    }
  })
})
