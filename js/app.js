/*
 * Create a list that holds all of your cards
 */
let icons = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-leaf", "fa fa-bicycle", "fa fa-bomb", 
	"fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-leaf", "fa fa-bicycle", "fa fa-bomb"];

let cards = document.getElementsByClassName("card");
let amountClicked = 0;
let compareList = [];
let cardList = [];
let numOfMoves = 0;
let moveCount = document.querySelector(".moves");
let stars = document.getElementsByClassName("fa-star");

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
function createGrid(){
	shuffle(icons);
	let count = 0;
	//go through each card element and add icon from list of icons
	for (let card of cards){
		let icon = document.createElement("i");
		icon.setAttribute("class", icons[count])
		count++;
		card.appendChild(icon);
	}
}
createGrid();

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Add classes to flip card and show icon
function show(element){
	element.classList.add("open");
	element.classList.add("show");
}

// Remove clasess so card is flipped over and icon is hidden
function hide(element){
	element.classList.remove("open");
	element.classList.remove("show");
}

// Function to compare the two cards that have been clicked on
function compare(card){
	let cardIcon = card.firstElementChild.classList[1];
	cardList.push(card);
	compareList.push(cardIcon);
	amountClicked += 1;
	if (amountClicked >= 2){
		moveCounter();
		if(compareList[0] == compareList[1]){
			compareList = [];
			cardList = [];
			amountClicked = 0;
		} else {
			compareList = [];
			amountClicked = 0;
			closeCards(cardList); 
		}
	}
}

// Flips the cards that were clicked so icon is hidden
function closeCards(openedCards){
	for(let openedCard of openedCards){
		hide(openedCard);
	}
	cardList = [];
}

// Increments and displays the current number of moves and changes the star rating
function moveCounter(){
	numOfMoves++;
	moveCount.textContent = numOfMoves;
	if (numOfMoves == 9) {
		stars[2].setAttribute("class", "fa fa-star-o");
	} else if (numOfMoves == 17){
		stars[1].setAttribute("class", "fa fa-star-o");
	}
}
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

for (let card of cards){
	card.addEventListener("click", function(event){
		show(card);	
		compare(card);
	})
}