const cards = document.querySelector(".cards");

const animalsToAdopt = [
  {
    name: "Lucky",
    picture: "https://placekitten.com/200/287",
  },
  {
    name: "Symba",
    picture: "https://placekitten.com/200/139",
  },
  {
    name: "Léo",
    picture: "https://placekitten.com/200/90",
  },
  {
    name: "Milo",
    picture: "https://placekitten.com/200/194",
  },
  {
    name: "Charly",
    picture: "https://placekitten.com/200/179",
  },
];

function createAndAppendElementWithClass(elementType, className, parentElement) {
  const element = document.createElement(elementType);
  element.classList.add(className);
  parentElement.appendChild(element);
  return element;
}

function createCard(title, imageUrl) {
  const card = createAndAppendElementWithClass("div", "card", cards);

  const cardHeader = createAndAppendElementWithClass("div", "card-header", card);

  const cardImg = createAndAppendElementWithClass("div", "card-img", cardHeader);
  cardImg.style.backgroundImage = `url(${imageUrl})`;

  // Step1: Create the cardBody div, add the class card-body and add it to the card
  const cardBody = createAndAppendElementWithClass("div", "card-body", card);

  // Step2: Create the cardTitle h2, add the class card-title,
  // set the text inside the tag to the "title" parameter of this function
  // and add it to the cardBody
  const cardTitle = createAndAppendElementWithClass("h2", "card-title", cardBody);
  cardTitle.textContent = title;

  // Step3: Create the cardButton button, add the class card-button,
  // set the text inside the tag to be "Adopt Now"
  // and add it to the cardBody
  const cardButton = createAndAppendElementWithClass("button", "card-button", cardBody);

  cardButton.textContent = "Adopt now";
}

/* Step 4: Create a for loop, for each element of the array, 
 call the function createCard with the corresponding parameter */

animalsToAdopt.forEach(function(animal) {
  createCard(animal.name, animal.picture);
});
