const navList = document.querySelector('.nav-list');
const toggleMenu = document.querySelector('.toggle-menu');
const openIcon = document.querySelector('.open-icon')
const closeIcon = document.querySelector('.close-icon')

var imgSrc = document.querySelector('.toggle-icon');




console.log(navList);
console.log(toggleMenu);

toggleMenu.addEventListener('click', () => {
    navList.classList.toggle('nav-active');
    if (imgSrc.getAttribute('src') === 'assets/images/icon-hamburger.svg' ){
       imgSrc.setAttribute('src','assets/images/icon-close.svg')
    } else {
        imgSrc.setAttribute('src', 'assets/images/icon-hamburger.svg')
    }
})
