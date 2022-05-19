let changeDogNext = document.querySelector('#nextDog');
let changeDogPrev = document.querySelector('#previousDog');

// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.background = 'red';
// });

let grabImg = document.querySelector('img');
let dogArr = ['https://cf.ltkcdn.net/dogs/images/std/279404-800x533-australian-shepherd.webp', 'https://thehappypuppysite.com/wp-content/uploads/2019/01/Rottweiler-Temperament-long.jpg'];
let curDogIndex = 0;

changeDogNext.addEventListener("click", nextDog);
changeDogPrev.addEventListener("click", prevDog);

function nextDog() {
  curDogIndex++;
  grabImg.src = dogArr[curDogIndex];

}

function prevDog() {
  curDogIndex--;
  grabImg.src = dogArr[curDogIndex];

}