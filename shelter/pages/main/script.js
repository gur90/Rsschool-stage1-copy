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
  
  /*popup */
   const popupWrapper = document.querySelector('.popup-wrapper')
   const popupContent = document.querySelector('.popup-content')
   const buttonJ = document.querySelector('#jennifer')
   const buttonK = document.querySelector('#katrine')
   const closePopup = document.querySelector('.close-popup')

   function openPop () {
    popupWrapper.classList.add('active')
    popupContent.classList.add('active')
    body.classList.toggle('nonactive')
   }
  
   function closePop() {
    popupWrapper.classList.remove('active')
    popupContent.classList.remove('active')
    body.classList.remove('nonactive')
   }

  
   buttonJ.addEventListener('click', openPop)
   buttonK.addEventListener('click', openPop)
   closePopup.addEventListener('click', closePop)


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
   var pets = {};
   async function getData(url) {
    const res = await fetch(url);
    pets = await res.json();
    console.log(pets);
    console.log(pets['Jennifer']);
    openPop()
  }
  /*getData('pets.json')*/

 
  let jenifer = 
  {
    "name": "Jennifer",
    "img":  "../../assets/images/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  }
  function lookInfo () {
      age.innerHTML = jenifer.age;
      nam.innerHTML = jenifer.name;
      type.innerHTML = jenifer.type;
      breed.innerHTML = jenifer.breed;
      description.innerHTML = jenifer.description;
      inoculations.innerHTML = jenifer.inoculations;
      diseases.innerHTML = jenifer.diseases;
      parasites.innerHTML = jenifer.parasites;
     img.src = jenifer.img;
  }
  /*buttons.addEventListener('click', lookInfo)*/
  jen.addEventListener('click', lookInfo)

  let katrine = {
    "name": "Katrine",
    "img": "../../assets/images/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  }
  function lookInfoK () {
    age.innerHTML = katrine.age;
    nam.innerHTML = katrine.name;
    type.innerHTML = katrine.type;
    breed.innerHTML = katrine.breed;
    description.innerHTML = katrine.description;
    inoculations.innerHTML = katrine.inoculations;
    diseases.innerHTML = katrine.diseases;
    parasites.innerHTML = katrine.parasites;
   img.src = katrine.img;
}

buttonK.addEventListener('click', lookInfoK)