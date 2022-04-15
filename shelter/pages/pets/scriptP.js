console.log("100");
const hamburger = document.querySelector('.hamburger');
const headerNavigation = document.querySelector('.header__navigation');
const navigationNonbordered = document.querySelector('.navigation_nonbordered');
function toggleMenu() {
  hamburger.classList.toggle('open');
  headerNavigation.classList.toggle('active');
  navigationNonbordered.classList.toggle('active');
}
hamburger.addEventListener('click', toggleMenu);

function closeMenu() {
     
        hamburger.classList.remove('open');
        headerNavigation.classList.remove('active');
        link.classList.remove('active');
       
    }
  
  headerNavigation.addEventListener('click', closeMenu);