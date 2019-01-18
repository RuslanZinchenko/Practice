
const remove = document.querySelector('.remove');
const removeImg = document.querySelector('img');

document.addEventListener('DOMContentLoaded', getFromLS);
remove.addEventListener('click', removeLS);
removeImg.addEventListener('click', removeLS);

function getFromLS(){
    localStorage.clear();
}

function removeLS(){
    localStorage.clear();
}