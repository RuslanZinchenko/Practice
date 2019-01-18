
const add = document.querySelector('.add');
const remove = document.querySelector('.remove');
const foto = document.querySelector('img');
let global;

document.addEventListener('DOMContentLoaded', getFromLS);
add.addEventListener('click', createLS);
remove.addEventListener('click', removeLS);

function createLS(){
    const fotka = 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
    localStorage.setItem('first', fotka);
    location.reload();
};

function getFromLS(){
    const getLS = localStorage.getItem('first');
    foto.setAttribute('src', getLS);
}

function removeLS(){
    localStorage.clear();
    location.reload();
}

