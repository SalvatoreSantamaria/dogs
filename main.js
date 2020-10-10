const API_URL = 'https://dog.ceo/api/breeds/image/random/3';
const randomDogsElement = document.querySelector('.random-dogs');
const loadButton = document.querySelector('.load-button');



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



    randomDogsElement.innerHTML += `
    <div>
      <img src="${dogImage}" alt="Placeholder image">
      <p>${dogBreed}</p>
    </div>
    `;
  });
  loadingElement.style.display = 'none';
}

loadButton.addEventListener('click', getRandomDogs);
window.addEventListener('load', getRandomDogs);

