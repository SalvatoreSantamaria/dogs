const API_URL = 'https://dog.ceo/api/breeds/image/random/3';
const randomDogsElement = document.querySelector('.random-dogs');
const loadButton = document.querySelector('.load-button');
const houndButton = document.querySelector('.hound-button');
const bulldogButton = document.querySelector('.bulldog-button');
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
    console.log(dogBreed)
  //   randomDogsElement.innerHTML += `
  //   <div class="grid-container">
  //     <div>
  //       <img src="${dogImage}" alt="Placeholder image">
  //     </div>    
  //     <div class="dog-name">
  //       <p>${dogBreed}</p>
  //     </div>
  //   </div>
  //   `;
  // });

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
  loadingElement.style.display = 'none';
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
    console.log(dogBreed)
  //   randomDogsElement.innerHTML += `
  //   <div class="grid-container">
  //     <div>
  //       <img src="${dogImage}" alt="Placeholder image">
  //     </div>    
  //     <div class="dog-name">
  //       <p>${dogBreed}</p>
  //     </div>
  //   </div>
  //   `;
  // });

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
  loadingElement.style.display = 'none';
}


loadButton.addEventListener('click', getRandomDogs);
//manual, but working
//houndButton.addEventListener('click', switchBreed);


houndButton.addEventListener('click', function() {
  let dog = 'hound'
  switchBreed(dog) //stopped here
});

bulldogButton.addEventListener('click', function() {
  let dog = 'bulldog'
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