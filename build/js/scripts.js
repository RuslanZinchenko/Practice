"use strict";

var add = document.querySelector('.add');
var remove = document.querySelector('.remove');
var foto = document.querySelector('img');
var global;
document.addEventListener('DOMContentLoaded', getFromLS);
add.addEventListener('click', createLS);
remove.addEventListener('click', removeLS);

function createLS() {
  var fotka = 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
  localStorage.setItem('first', fotka);
  location.reload();
}

;

function getFromLS() {
  var getLS = localStorage.getItem('first');
  foto.setAttribute('src', getLS);
}

function removeLS() {
  localStorage.clear();
  location.reload();
}