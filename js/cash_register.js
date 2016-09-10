window.onload = function(){

	var todaysCalculator = calculator();

	$('#getBalance').click(function(){
		alert('the jquery is on');
		var displayBox = document.getElementById('display');
		var theBalance = todaysCalculator.getTotal();
		display.textContent = displayBox;
	});

};


