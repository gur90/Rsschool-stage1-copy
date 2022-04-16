console.log("в работе есть нестыковки с макетом в навигации, но не более 5 пикселей. Все требования тз выполнены. Оценка:100");
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.header__navigation');
const navigationNonbordered = document.querySelector('.navigation_nonbordered');
function toggleMenu() {
  hamburger.classList.toggle('open');
  navigation.classList.toggle('active');
  navigationNonbordered.classList.toggle('active');
}
hamburger.addEventListener('click', toggleMenu);

function closeMenu() {
     
        hamburger.classList.remove('open');
        navigation.classList.remove('active');
        navigationNonbordered.classList.remove('active');
       
    }
  
  navigation.addEventListener('click', closeMenu);