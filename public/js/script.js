const navList = document.querySelector('.nav-list');
const toggleMenu = document.querySelector('.toggle-menu');


toggleMenu.addEventListener('click', () => {
    navList.classList.toggle('nav-active');
    toggleMenu.classList.toggle('toggle-ani');
})
