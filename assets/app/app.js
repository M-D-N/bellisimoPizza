const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');
const nav4 = document.getElementById('nav4');

const navLink1 = document.getElementById('navlink1');
const navLink2 = document.getElementById('navlink2');
const navLink3 = document.getElementById('navlink3');
const navLink4 = document.getElementById('navlink4');

const imgnav1 = document.getElementById('navimg1');
const imgnav2 = document.getElementById('navimg2');
const imgnav3 = document.getElementById('navimg3');
const imgnav4 = document.getElementById('navimg4');

nav1.addEventListener('click',()=>{

    navLink1.classList.add('red');
    navLink2.classList.remove('red');
    navLink3.classList.remove('red');
    navLink4.classList.remove('red');

    imgnav1.classList.remove('displaB');
    imgnav2.classList.add('displaB');
    imgnav3.classList.add('displaB');
    imgnav4.classList.add('displaB');
});
nav2.addEventListener('click',()=>{

    navLink1.classList.remove('red');
    navLink2.classList.add('red');
    navLink3.classList.remove('red');
    navLink4.classList.remove('red');

    imgnav1.classList.add('displaB');
    imgnav2.classList.remove('displaB');
    imgnav3.classList.add('displaB');
    imgnav4.classList.add('displaB');
});
nav3.addEventListener('click',()=>{

    navLink1.classList.remove('red');
    navLink2.classList.remove('red');
    navLink3.classList.add('red');
    navLink4.classList.remove('red');

    imgnav1.classList.add('displaB');
    imgnav2.classList.add('displaB');
    imgnav3.classList.remove('displaB');
    imgnav4.classList.add('displaB');
});
nav4.addEventListener('click',()=>{

    navLink1.classList.remove('red');
    navLink2.classList.remove('red');
    navLink3.classList.remove('red');
    navLink4.classList.add('red');

    imgnav1.classList.add('displaB');
    imgnav2.classList.add('displaB');
    imgnav3.classList.add('displaB');
    imgnav4.classList.remove('displaB');
});

const langLi = document.getElementById('lang__li');
const langDrop = document.getElementById('lang__drop');
const droparr = document.getElementById('droparr');

langLi.addEventListener('click', ()=>{
    langDrop.classList.toggle('displaB');
    droparr.classList.toggle('rotate');
})