// navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav =header.offsetTop;

    if(window.pageYOffset > fixedNav ) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}


//pojokan
const pojokan = document.querySelector('#pojokan');
const navMenu = document.querySelector('#nav-menu');

pojokan.addEventListener('click', function() {
    pojokan.classList.toggle('pojokan-aktif');
    navMenu.classList.toggle('hidden');
});


