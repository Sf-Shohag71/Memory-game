let cardsArray = [
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

// step 2 to duplicate each card
const gameCard = cardsArray.concat(cardsArray);
console.log(gameCard);

// steps 3
// Note that this method creates a new shuffled array instead of modifying the original one.
// const myNumbers = (array) => {
//     for (let i = array.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1))
//         // console.log(i, j)
//         let temp = array[i]
//         array[i] = array[j]
//         array[j] = temp
//     }
//     return array
// }
//
// const shuffledChild = myNumbers(gameCard)
let shuffledChild = Array.from(gameCard).sort(() => 0.5 - Math.random());

let clickCount = 0;
let firstCard = "";
let secondCard = "";

// styling the match card
const card_matches = () => {
  let card_selected = document.querySelectorAll(".card_selected");

  card_selected.forEach((curElem) => {
    curElem.classList.add("card_match");
  });
};

// step 7

const resetGame = () => {
  firstCard = "";
  secondCard = "";
  clickCount = 0;

  let card_selected = document.querySelectorAll(".card_selected");

  card_selected.forEach((curElem) => {
    curElem.classList.remove("card_selected");
  });
};

// step 4
parentDiv.addEventListener("click", (event) => {
  let curCard = event.target;

  if (curCard.id === "card-section") {
    return false;
  }

  clickCount++;

  if (clickCount < 3) {
    if (clickCount === 1) {
      firstCard = curCard.parentNode.dataset.name;
      curCard.parentNode.classList.add("card_selected");
    } else {
      secondCard = curCard.parentNode.dataset.name;
      curCard.parentNode.classList.add("card_selected");
    }

    if (firstCard !== "" && secondCard !== "") {
      if (firstCard === secondCard) {
        // curCard.classList.add('card_match')
        setTimeout(() => {
          card_matches();
          resetGame();
        }, 1000);
      } else {
        setTimeout(() => {
          resetGame();
        }, 1000);
      }
    }
  }
});

// step 1 to add the card
for (let i = 0; i < shuffledChild.length; i++) {
  const childDiv = document.createElement("div");
  childDiv.classList.add("card");
  childDiv.dataset.name = shuffledChild[i].name;
  // childDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;

  const front_div = document.createElement("div");
  front_div.classList.add("front-card");

  const back_div = document.createElement("div");
  back_div.classList.add("back-card");

  back_div.style.backgroundImage = `url(${shuffledChild[i].img})`;

  parentDiv.appendChild(childDiv);

  childDiv.appendChild(front_div);
  childDiv.appendChild(back_div);
}

// const parentDiv = document.querySelector("#card-section");
// const gameCard = cardElement.concat(cardElement);
// let count = 0;
// let firstCard = "";
// let secondCard = "";

// const card_matches = () => {
//   let card_selected = document.querySelectorAll('.card_selected');

//   card_selected.forEach((curElem) => {
//       curElem.classList.add('card_match')
//   })
// }

// // step: 3 -> shuffle card randomly
// let shuffledChild = Array.from(gameCard).sort(() => 0.5 - Math.random());

// // step: 4, 5 -> select card by clicking and user can click maximum 2 times
// // step: 6 -> compare between two clickable card
// parentDiv.addEventListener("click", (event) => {
//   let selectedCard = event.target;
//   count++;
//   if (selectedCard.id === "card-section") {
//     return false;
//   }
//   if (count < 3) {
//     if (count === 1) {
//         firstCard = selectedCard.dataset.name;
//         selectedCard.classList.add("card-selected");
//     }else{
//         secondCard = selectedCard.dataset.name;
//         selectedCard.classList.add("card-selected");
//     }
//     if (firstCard !== "" && secondCard !== "") {
//         if (firstCard === secondCard) {
//             // selectedCard.classList.add('card-matched')
//             card_matches()
//         }
//     }
//   }

// });

// // step: 1 -> add card to the to UI
// for (let i = 0; i < shuffledChild.length; i++) {
//   const childDiv = document.createElement("div");
//   childDiv.classList.add("card");
//   childDiv.dataset.name = shuffledChild[i].name;
//   childDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;
//   childDiv.style.backgroundRepeat = "no-repeat";

//   parentDiv.appendChild(childDiv);
// }
