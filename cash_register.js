
const todaysCalculator = require('./calculator.js')();

//load will load each number as you click the button
//save memory must run when you click any button besides the 12 keys on the left
var currentDisplay;
var totalFunds = 0.00;
currentDisplay = parseFloat(todaysCalculator.load().join(''));


console.log(todaysCalculator.load('.'));
console.log(todaysCalculator.load(5));
console.log(todaysCalculator.load(5));
console.log(todaysCalculator.saveMemory() + ' is saved in memory');
//start loading a new displayed number
console.log(todaysCalculator.load(9));
console.log(todaysCalculator.load(2));
console.log('the total is ' + todaysCalculator.add(todaysCalculator.load()));
console.log('break***');



console.log('This is on display: ' + currentDisplay);
console.log();

function getBalance() {
	currentDisplay = totalFunds;
};

function depositCash() {
	totalFunds += currentDisplay; 
	clearDisplay();
};
function withdrawCash() {
	totalFunds -= currentDisplay;
	clearDisplay();
};
function clearDisplay() {
	currentDisplay = 0.00;
};

/*
$("#getBalance").click(function(){
	alert("the jquery is on");
	var displayBox = document.getElementById('display');
	var theBalance = todaysCalculator.getTotal();
	displayBox.textContent = theBalance;
	
});
*/

let getBalanceElement = document.getElementById('getBalance');
let getBalanceBtn = document.createElement('button');

btn.addEventListener('click', function(){
	console.log(this.id);
});
getBalanceElement.appendChild(getBalanceBtn);

