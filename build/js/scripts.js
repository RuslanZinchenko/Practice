"use strict";

var remove = document.querySelector('.remove');
var removeImg = document.querySelector('img');
document.addEventListener('DOMContentLoaded', getFromLS);
remove.addEventListener('click', removeLS);
removeImg.addEventListener('click', removeLS);

function getFromLS() {
  localStorage.clear();
}

function removeLS() {
  localStorage.clear();
}