let cardElement = [
  {
    name: "Cat",
    img: "images/cat.jpg",
  },
  {
    name: "Bear",
    img: "images/bear.jpg",
  },
  {
    name: "Dear",
    img: "images/deer.jpg",
  },
  {
    name: "Dog",
    img: "images/dog.jpg",
  },
  {
    name: "Lion",
    img: "images/lion.jpg",
  },
  {
    name: "Tiger",
    img: "images/tiger.jpg",
  },
];

const parentDiv = document.querySelector("#card-section");
const gameCard = cardElement.concat(cardElement);

// step: 3 -> shuffle card randomly
let shuffledChild = Array.from(gameCard).sort(() => 0.5 - Math.random());

// step: 4, 5 -> select card by clicking and user can click maximum 2 times
let count = 0;
parentDiv.addEventListener("click", (event) => {
    let selectedCard = event.target;
    count++;
    if (selectedCard.id === 'card-section') {
        return false;
    }
    if (count < 3) {
        selectedCard.classList.add('card-selected');
    }
});

// step: 1 -> add card to the to UI
for (let i = 0; i < shuffledChild.length; i++) {
  const childDiv = document.createElement("div");
  childDiv.classList.add("card");
  childDiv.dataset.name = shuffledChild[i].name;
  childDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;
  childDiv.style.backgroundRepeat = "no-repeat";

  parentDiv.appendChild(childDiv);
}
