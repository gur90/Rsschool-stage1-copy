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
   const buttonW = document.querySelector('#woody')
   const buttonS = document.querySelector('#scarlett')
   const buttonT = document.querySelector('#timmy')
   const buttonF = document.querySelector('#fredie')
   const buttonC = document.querySelector('#charly')
   const buttonSo = document.querySelector('#sophia')
   const closePopup = document.querySelector('.close-popup')
   const buttonLearn = document.querySelector('.button-learn')
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

  
    buttonLearn.addEventListener('click', openPop)
   buttonJ.addEventListener('click', openPop)
   buttonK.addEventListener('click', openPop)
   buttonW.addEventListener('click', openPop)
   buttonS.addEventListener('click', openPop)
   buttonT.addEventListener('click', openPop)
   buttonF.addEventListener('click', openPop)
   buttonC.addEventListener('click', openPop)
   buttonSo.addEventListener('click', openPop)
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
   const cardPet =document.querySelector('.pets-slider__card')
   var pets = {};
   async function getData() {
    const res = await fetch('pets.json');
    pets = await res.json();
    console.log(pets);
    console.log(pets['Jennifer'].name);
    openPop()
   look()
  }
  cardPet.addEventListener('click',getData )
  
  function look() {
    if (cardname.innerHTML === 'Katrine') {
       age.innerHTML = katrine.age;
       nam.innerHTML = katrine.name;
       type.innerHTML = katrine.type;
       breed.innerHTML = katrine.breed;
       description.innerHTML = katrine.description;
       inoculations.innerHTML = katrine.inoculations;
       diseases.innerHTML = katrine.diseases;
       parasites.innerHTML = katrine.parasites;
      img.src = katrine.img;
      console.log(cardname.innerHTML)
    } else if (cardname.innerHTML === 'Jennifer') {
       age.innerHTML = jennifer.age;
     nam.innerHTML = jennifer.name;
     type.innerHTML = jennifer.type;
     breed.innerHTML = jennifer.breed;
     description.innerHTML = jennifer.description;
     inoculations.innerHTML = jennifer.inoculations;
     diseases.innerHTML = jennifer.diseases;
     parasites.innerHTML = jennifer.parasites;
    img.src = jennifer.img;
    console.log(cardname.innerHTML)
    } else if (cardname.innerHTML === 'Woody') {
       age.innerHTML = woody.age;
       nam.innerHTML = woody.name;
       type.innerHTML = woody.type;
       breed.innerHTML = woody.breed;
       description.innerHTML = woody.description;
       inoculations.innerHTML = woody.inoculations;
       diseases.innerHTML = woody.diseases;
       parasites.innerHTML = woody.parasites;
      img.src = woody.img;
    }

}


 


  let jennifer = 
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


  /*function lookInfojen () {
      age.innerHTML = jenifer.age;
      nam.innerHTML = jenifer.name;
      type.innerHTML = jenifer.type;
      breed.innerHTML = jenifer.breed;
      description.innerHTML = jenifer.description;
      inoculations.innerHTML = jenifer.inoculations;
      diseases.innerHTML = jenifer.diseases;
      parasites.innerHTML = jenifer.parasites;
     img.src = jenifer.img;
  }*/
  /*buttons.addEventListener('click', lookInfo)*/
  /*jen.addEventListener('click', lookInfojen)*/

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
  /*function lookInfoK () {
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

buttonK.addEventListener('click', lookInfoK)*/

let woody = {
    "name": "Woody",
    "img": "../../assets/images/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  }
  /*function lookInfoW () {
    age.innerHTML = woody.age;
    nam.innerHTML = woody.name;
    type.innerHTML = woody.type;
    breed.innerHTML = woody.breed;
    description.innerHTML = woody.description;
    inoculations.innerHTML = woody.inoculations;
    diseases.innerHTML = woody.diseases;
    parasites.innerHTML = woody.parasites;
   img.src = woody.img;
}

buttonW.addEventListener('click', lookInfoW)*/
let scarlett = {
    "name": "Scarlett",
    "img": "../../assets/images/pets-scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  }
  function lookInfoS () {
    age.innerHTML = scarlett.age;
    nam.innerHTML = scarlett.name;
    type.innerHTML = scarlett.type;
    breed.innerHTML = scarlett.breed;
    description.innerHTML = scarlett.description;
    inoculations.innerHTML = scarlett.inoculations;
    diseases.innerHTML = scarlett.diseases;
    parasites.innerHTML = scarlett.parasites;
   img.src = scarlett.img;
}

buttonS.addEventListener('click', lookInfoS)
let timmy = {
    "name": "Timmy",
    "img": "../../assets/images/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  }
  function lookInfoT () {
    age.innerHTML = timmy.age;
    nam.innerHTML = timmy.name;
    type.innerHTML = timmy.type;
    breed.innerHTML = timmy.breed;
    description.innerHTML = timmy.description;
    inoculations.innerHTML = timmy.inoculations;
    diseases.innerHTML = timmy.diseases;
    parasites.innerHTML = timmy.parasites;
   img.src = timmy.img;
}

buttonT.addEventListener('click', lookInfoT)
let freddie= {
    "name": "Freddie",
    "img": "../../assets/images/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  } 
  function lookInfoF () {
    age.innerHTML = freddie.age;
    nam.innerHTML = freddie.name;
    type.innerHTML = freddie.type;
    breed.innerHTML = freddie.breed;
    description.innerHTML = freddie.description;
    inoculations.innerHTML = freddie.inoculations;
    diseases.innerHTML =freddie.diseases;
    parasites.innerHTML = freddie.parasites;
   img.src = freddie.img;
}

buttonF.addEventListener('click', lookInfoF)
let charly = {
    "name": "Charly",
    "img": "../../assets/images/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
  function lookInfoC () {
    age.innerHTML = charly.age;
    nam.innerHTML = charly.name;
    type.innerHTML = charly.type;
    breed.innerHTML = charly.breed;
    description.innerHTML = charly.description;
    inoculations.innerHTML = charly.inoculations;
    diseases.innerHTML =charly.diseases;
    parasites.innerHTML = charly.parasites;
   img.src = charly.img;
}

buttonF.addEventListener('click', lookInfoF)
let sophia = {
    "name": "Sophia",
    "img": "../../assets/images/pets-sofia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  }
  function lookInfoSo () {
    age.innerHTML = sophia.age;
    nam.innerHTML = sophia.name;
    type.innerHTML = sophia.type;
    breed.innerHTML = sophia.breed;
    description.innerHTML = sophia.description;
    inoculations.innerHTML = sophia.inoculations;
    diseases.innerHTML =sophia.diseases;
    parasites.innerHTML = sophia.parasites;
   img.src = sophia.img;
}

buttonSo.addEventListener('click', lookInfoSo)


/*slider */

let btnRight = document.querySelector('.button_right')
let btnLeft = document.querySelector('.button_left')
let cardname = document.querySelector('.card-name')
let imgname = document.querySelector('.katrine')
let card = document.querySelectorAll('.pets-slider__card')
let cards = document.querySelectorAll('.pets-cards')

 pets = [
    {
      "name": "Jennifer",
      "img": "../../assets/images/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/pets-sofia.jpg",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/pets-freddy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/pets-charly.jpg",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
]



class Petcard {
    constructor({name,img, }) {
        this.name=name;
        this.img = img;
    }

    addCard() {
        let template = "";
        let card = document.createElement('div');
        card.className = "pets-slider__card";
        template += `<div class= "katrine"><img src=${this.img} alt="pet"></div>`;
        template += `<p class = "card-name">${this.name}</p>`;
        template += `<button class = "button-learn">Learn more</button>`;
        card.innerHTML = template;
        return card;
    }

}
const generateCards = (pet) => {
    let cards = [];
    pet.forEach((card) => {
        cards.push(new Petcard(card))
    })
    return cards;
}
let cardArr = generateCards(pets);

let ind=0;
steps=3;
function left () {
   function set () { 
        if (document.body.clientWidth >1279) {
            steps = 3
        } else if (1279>=document.body.clientWidth >767) {
            steps = 2
        } else { steps = 1}
    }
    if(ind-steps <0) {
        ind = ind-steps +cardArr.length
    } else { ind -=steps}
    let direction = "left"
    moveBy(direction)
}
function moveBy(direction ) {
   let current = document.querySelectorAll('.pets-slider__card')
    current.forEach((card)=> {
       if(direction === 'left') {card.classList.add('left')} else {card.classList.add('right')}
    })
}


btnLeft.addEventListener('click', changeCard )
function changeCard () {
    
    const randomNum = Math.floor(Math.random()*pets.length);
    const naming = pets[randomNum].name;
    const imging = pets[randomNum].img;
    
    cardname.innerHTML = naming
    imgname.src = imging
     
    }







