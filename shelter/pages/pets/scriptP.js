
  /*hamburger*/ 
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.header__navigation');
const navigationNonbordered = document.querySelector('.navigation_nonbordered');
const background = document.querySelector('.start')
const body = document.querySelector('.body')
const wind = document.querySelector('.pets-content')
const wrap = document.querySelector('.header-wrapper')
const foot = document.querySelector('.footer')
const darkS = document.querySelector('.dark');
function toggleMenu() {
   
  hamburger.classList.toggle('open');
  navigation.classList.toggle('active');
  navigationNonbordered.classList.toggle('active');
  body.classList.toggle('nonactive')
  background.classList.toggle('active');
 foot.classList.toggle('active')
}
hamburger.addEventListener('click', toggleMenu);

function closeMenu() {
    
        hamburger.classList.remove('open');
        navigation.classList.remove('active');
        navigationNonbordered.classList.remove('active');
        background.classList.remove('active');
        foot.classList.remove('active')
        body.classList.remove('nonactive');
    }
    darkS.addEventListener('click', closeMenu)
  navigation.addEventListener('click', closeMenu);
  wind.addEventListener('click', closeMenu)
  wrap.addEventListener('click', closeMenu)


  /*popup*/ 
  const popupWrapper = document.querySelector('.popup-wrapper')
   const popupContent = document.querySelector('.popup-content')
   const buttonJ = document.querySelector('#jennifer')
   const buttonK = document.querySelector('#katrine')
   const buttonW = document.querySelector('#woody')
   const buttonS = document.querySelector('#scarlett')
   const buttonT = document.querySelector('#timmy')
   const buttonF = document.querySelector('#fredie')
   const buttonC = document.querySelector('#charly')
   const buttonSo = document.querySelector('#sophia')
   const closePopup = document.querySelector('.close-popup')
   const buttonLearn = document.querySelector('.button-learn')
   const butCloseW = document.querySelector('.body')


   /*json*/
   const nam =document.querySelector('.name')
   const type = document.querySelector('.type')
   const breed = document.querySelector('.breed')
   const description = document.querySelector('.description')
   const age = document.querySelector('.age')
   const inoculations = document.querySelector('.inoculations')
   const diseases = document.querySelector('.diseases')
   const parasites = document.querySelector('.parasites')
   const img = document.querySelector('.modal-pet')
   const jen = document.querySelector('#jen')
   const cardPet =document.querySelector('.pets-slider__card')
   const petsSlider = document.querySelector('.pets-cards')
   const popup = document.querySelector('.popup-wrapper');
   
  const sliderList = document.querySelector('.slider-style');
  const petsSection = document.querySelector('.pets-content');
   fetch('pets.json')
   .then((res) => res.json())
   .then((json) => {
     const petCardTempl = document.querySelector('#pet-pet-card').content;
     const petsSlider =  document.querySelector('.pets-cards')
     console.log(petsSlider)
petsSlider.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (evt.target.parentNode.classList.contains('pets-slider__card')) {
      const petId = evt.target.parentNode.getAttribute('id');
      console.log(petId)
      const pet = json.find((el) => el.id === petId);
      popupWrapper.classList.add('active');
      popupContent.classList.add('active');
      popupWrapper.querySelector('.modal-pet').src =  pet.img;
      popupWrapper.querySelector('.name').textContent = pet.name;
      popupWrapper.querySelector('.type').textContent = pet.type;
      popupWrapper.querySelector('.breed').textContent = pet.breed;
      popupWrapper.querySelector('.description').textContent = pet.description;
      popupWrapper.querySelector('.age').textContent = pet.age;
      popupWrapper.querySelector('.inoculations').textContent = pet.inoculations;
      popupWrapper.querySelector('.diseases').textContent = pet.diseases;
      popupWrapper.querySelector('.parasites').textContent = pet.parasites;
      document.body.style.overflowY = 'hidden';
    }
    const popupClose = (evt) => {
        evt.preventDefault();
        popupWrapper.classList.remove('active');
        document.body.style.overflowY = 'visible';
      };
      const closePopup = document.querySelector('.close-popup')
      const darkS = document.querySelector('.dark');
    closePopup.addEventListener('click', popupClose);
    darkS.addEventListener('click', popupClose);
    popupWrapper.addEventListener('mouseleave', () => { closePopup.style.backgroundColor = '#FDDCC4'});
    popupWrapper.addEventListener('mouseenter', (e) => {closePopup.style.backgroundColor = null})
    });
    })