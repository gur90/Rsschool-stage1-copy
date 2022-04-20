/*hamburger*/ 
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.header__navigation');
const navigationNonbordered = document.querySelector('.navigation_nonbordered');
const background = document.querySelector('.start')
const body = document.querySelector('.body')
const wind = document.querySelector('.content-2')
const wrap = document.querySelector('.header-wrapper')

function toggleMenu() {
  hamburger.classList.toggle('open');
  navigation.classList.toggle('active');
  navigationNonbordered.classList.toggle('active');
  body.classList.toggle('nonactive')
  background.classList.toggle('active');
}
hamburger.addEventListener('click', toggleMenu);

function closeMenu() {
        hamburger.classList.remove('open');
        navigation.classList.remove('active');
        navigationNonbordered.classList.remove('active');
        background.classList.remove('active');
        body.classList.remove('nonactive');
    }
  
  navigation.addEventListener('click', closeMenu);
  wind.addEventListener('click', closeMenu)
  wrap.addEventListener('click', closeMenu)
  
  