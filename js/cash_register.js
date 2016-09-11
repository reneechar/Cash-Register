
//todaysCalculator will hold all the memory from the calculator
var todaysCalculator = calculatorModule();
//todaysCashRegister will hold all the memory from depositing and withdrawing cash
var todaysCashRegister = calculatorModule();

clearDisplay();

var currentDisplayArray = [];
var theOpperand = '';
var tempMemory;
var secondInputNum;
var clickCount = 1;
/* 1 + 2 = 3
* = -> 3 + 2 = 5
* = -> 5 + 2 = 7
*----
* 5 - 1 = 4
* = -> 4 - 1 = 3
* = -> 3 - 1 = 2
*
*
*/

function runEqualLoopAdd() {
	var result = parseFloat(currentDisplayArray.join('')) + secondInputNum;
	console.log('the second input number is ' + secondInputNum);
	todaysCalculator.load(result);
};
function runEqualLoopSubtract() {
	var result = parseFloat(currentDisplayArray.join('')) - secondInputNum;
	todaysCalculator.load(result);
};
function runEqualLoopDivide() {
	var result = parseFloat(currentDisplayArray.join('')) / secondInputNum;
	todaysCalculator.load(result);
};
function runEqualLoopMultiply() {
	var result = parseFloat(currentDisplayArray.join('')) * secondInputNum;
	todaysCalculator.load(result);
}



//instead of clearDisplay() for clicking opperands, manually use updatedisplay;
function clearDisplay() {
	updatedisplay('empty the current display array');
	display.innerHTML = '0';
};

function opperatorSelected() {
	updatedisplay('empty the current display array');
	display.innerHTML = tempMemory;
}

//controls what's currently on display
function updatedisplay(newcontent) {
	if (newcontent === 'empty the current display array') {
		currentDisplayArray = [];
		console.log('the current display array has been emptied.');
	} else {
	var display = document.getElementById('display');
	currentDisplayArray.push(newcontent);
	display.innerHTML = currentDisplayArray.join('');
	}
}

//
//
//manages cash register button clicks
//
//

//get the Balance
let getBalanceElement = document.getElementById('getBalance');
getBalanceElement.addEventListener('click', function(){
	clearDisplay();
	updatedisplay(todaysCashRegister.getTotal());
	updatedisplay('empty the current display array');
});


//clear the display
let clear = document.getElementById('clear');
clear.addEventListener('click', function(){
	clearDisplay();
});

//deposit cash
let deposit = document.getElementById('depositCash');
deposit.addEventListener('click', function(){
	todaysCashRegister.addition(parseFloat(currentDisplayArray.join('')));
	clearDisplay();
});

//withdraw cash
let withdraw = document.getElementById('withdrawCash');
withdraw.addEventListener('click', function(){
	if (todaysCalculator.getTotal() - parseFloat(currentDisplayArray.join('')) < 0) {
		clearDisplay();
		throw new Error('You withdrew too much money');
	} else {
		todaysCashRegister.subtract(parseFloat(currentDisplayArray.join('')));	
	}
	clearDisplay();
});




//
//
//controls clicks to number keys
//
//

let one = document.getElementById('1');
one.addEventListener('click', function(){
	updatedisplay('1');
});

let two = document.getElementById('2');
two.addEventListener('click', function(){
	updatedisplay('2');
	console.log('you clicked the 2 button');
});
let three = document.getElementById('3');
three.addEventListener('click', function(){
	updatedisplay('3');
	console.log('you clicked the 3 button')
});
let four = document.getElementById('4');
four.addEventListener('click', function(){
	updatedisplay('4');
	console.log('you clicked the 4 button')
});
let five = document.getElementById('5');
five.addEventListener('click', function(){
	updatedisplay('5');
	console.log('you clicked the 5 button')
});
let six = document.getElementById('6');
six.addEventListener('click', function(){
	updatedisplay('6');
	console.log('you clicked the 6 button')
});
let seven = document.getElementById('7');
seven.addEventListener('click', function(){
	updatedisplay('7');
	console.log('you clicked the 7 button')
});
let eight = document.getElementById('8');
eight.addEventListener('click', function(){
	updatedisplay('8');
	console.log('you clicked the 8 button')
});
let nine = document.getElementById('9');
nine.addEventListener('click', function(){
	updatedisplay('9');
	console.log('you clicked the 9 button')
});
let zero = document.getElementById('0');
zero.addEventListener('click', function(){
	updatedisplay('0');
	console.log('you clicked the 0 button')
});
let decimal = document.getElementById('.');
decimal.addEventListener('click', function(){
	updatedisplay('.');
	console.log('you clicked the . button')
});
let zerozero = document.getElementById('00');
zerozero.addEventListener('click', function(){
	updatedisplay('00');
	console.log('you clicked the 00 button')
});


//
//
//controls opperand clicks
//
//

let plus = document.getElementById('add');
plus.addEventListener('click', function(){
	tempMemory = todaysCalculator.load(parseFloat(currentDisplayArray.join('')));

	opperatorSelected();

	theOpperand = 'plus';
	console.log('you clicked the + button');
	clickCount = 0;

});

let minus = document.getElementById('subtract');
minus.addEventListener('click', function(){
	tempMemory = todaysCalculator.load(parseFloat(currentDisplayArray.join('')));

	opperatorSelected();


	theOpperand = 'minus';

	console.log('you clicked the - button');
	clickCount = 0;
});

let multiply = document.getElementById('multiply');
multiply.addEventListener('click', function(){
	tempMemory = todaysCalculator.load(parseFloat(currentDisplayArray.join('')));

	opperatorSelected();


	theOpperand = 'multiply';

	console.log('you clicked the × button');
	clickCount = 0;

});

let divide = document.getElementById('divide');
divide.addEventListener('click', function(){
	tempMemory = todaysCalculator.load(parseFloat(currentDisplayArray.join('')));

	opperatorSelected();

	theOpperand = 'divide';

	console.log('you clicked the ÷ button');
	clickCount = 0;

});

let equals = document.getElementById('equal');
equals.addEventListener('click', function(){
	console.log('the currentDisplayArray contains: ' + currentDisplayArray);
	clickCount++;

	if (clickCount < 2) {
		secondInputNum = parseFloat(currentDisplayArray.join(''));
	}
	
	console.log('clickCount is ' + clickCount);
	if (theOpperand === 'plus') {
		if (clickCount > 1) {
			runEqualLoopAdd();
		} else {
		todaysCalculator.addition(secondInputNum);
		}
	} else if (theOpperand === 'minus') {
		if (clickCount > 1) {
			runEqualLoopSubtract();
		} else {
		todaysCalculator.subtract(secondInputNum);
		}
	} else if (theOpperand === 'multiply') {
		if (clickCount > 1) {
			runEqualLoopMultiply();
		} else {
			todaysCalculator.multiply(secondInputNum);
		}
	} else if (theOpperand === 'divide') {
		if (clickCount > 1) {
			runEqualLoopDivide();
		} else {
			todaysCalculator.divide(secondInputNum);
		}
	} else {
		todaysCalculator.load(secondInputNum);
	}


	clearDisplay();
	updatedisplay(todaysCalculator.getTotal());

	console.log('you clicked the = button');
});
