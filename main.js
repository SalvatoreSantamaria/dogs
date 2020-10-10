const API_URL = 'https://dog.ceo/api/breeds/image/random/3';
const randomDogsElement = document.querySelector('.random-dogs');
const loadButton = document.querySelector('.load-button');

const dingoButton = document.querySelector('.dingo-button');
const vizslaButton = document.querySelector('.vizsla-button');
const labradorButton = document.querySelector('.labrador-button');
const beagleButton = document.querySelector('.beagle-button');
const boxerButton = document.querySelector('.boxer-button');
//let API_URL2
//let breed

function switchBreed(input) {
  let breed = input;
  let API_URL2 = `https://dog.ceo/api/breed/${breed}/images/random/3`
  console.log('this is breed ' + breed)
  console.log('this is API URL2 ' + API_URL2)
  getRandomDogs2(API_URL2)
}
//page load function to just manually load a dog
//switchBreed('hound')


async function getRandomDogs2(API_URL2) {
  randomDogsElement.innerHTML = '';
  const response = await fetch(API_URL2);
  const json = await response.json();

  //console.log(json.message);
  // output three random dogs, with the dog names. get dog names from URL
  json.message.forEach(dogImage => {
    console.log(dogImage.split('/'))
    let dogBreed = dogImage.split('/')[4]






    //console.log(dogBreed)


  randomDogsElement.innerHTML += `
  <div class="row">
    <div class="col-sm-6">
      <div class="dog-container">
        <img src="${dogImage}" alt="Placeholder image">
      </div>
    </div>    
    <div class="col-sm-6">
      <div class="dog-container">
        <div class="dog-name">
          ${dogBreed}
        </div>
      </div>
    </div>
  </div>
  `;
});

}

//og

async function getRandomDogs() {
  randomDogsElement.innerHTML = '';
  const response = await fetch(API_URL);
  const json = await response.json();

  //console.log(json.message);
  // output three random dogs, with the dog names. get dog names from URL
  json.message.forEach(dogImage => {
    console.log(dogImage.split('/'))
    let dogBreed = dogImage.split('/')[4] 
    dogBreed = dogBreed[0].toUpperCase() + dogBreed.slice(1)

    console.log(dogBreed)

    for (let i of dogBreed) {
      if (i == "-") {
        console.log('dash in dogBreed ' + dogBreed)
  
        let array = dogBreed.split('-')
        console.log('this is array ' + array)
        
        dogBreed =  array[1][0].toUpperCase() + array[1].slice(1) + ' ' + array[0][0].toUpperCase() + array[0].slice(1) 
        console.log('this is output ' + dogBreed)
      }
    }



  randomDogsElement.innerHTML += `
  <div class="row">
    <div class="col-sm-6">
      <div class="dog-container">
        <img src="${dogImage}" alt="Placeholder image">
      </div>
    </div>    
    <div class="col-sm-6">
      <div class="dog-container">
        <div class="dog-name">
          ${dogBreed}
        </div>
      </div>
    </div>
  </div>
  `;
});

}


loadButton.addEventListener('click', getRandomDogs);
//manual, but working
//houndButton.addEventListener('click', switchBreed);


dingoButton.addEventListener('click', function() {
  let dog = 'dingo'
  switchBreed(dog) //stopped here
});

vizslaButton.addEventListener('click', function() {
  let dog = 'vizsla'
  switchBreed(dog)
});

labradorButton.addEventListener('click', function() {
  let dog = 'labrador'
  switchBreed(dog) //stopped here
});

beagleButton.addEventListener('click', function() {
  let dog = 'beagle'
  switchBreed(dog)
});

boxerButton.addEventListener('click', function() {
  let dog = 'boxer'
  switchBreed(dog)
});





window.addEventListener('load', getRandomDogs);

//Nav
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}