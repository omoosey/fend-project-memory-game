/*
 * Create a list that holds all of your cards
 */
let icons = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-leaf", "fa fa-bicycle", "fa fa-bomb", 
	"fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-leaf", "fa fa-bicycle", "fa fa-bomb"];

let cards = document.getElementsByClassName("card");
let amountClicked = 0;
let compareList = [];
// console.log(cards[1].firstElementChild.className);
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

function show(element){
	element.classList.add("open");
	element.classList.add("show");
}

function compare(card){
	let clickedCard = card.firstElementChild.classList[1];
	compareList.push(clickedCard);
	amountClicked += 1;
	if (amountClicked >= 2){
		if(compareList[0] == compareList[1]){
			console.log("match!");
			compareList = [];
			amountClicked = 0;
		} else {
			console.log("no match :(");
			compareList = [];
			amountClicked = 0;
		}
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