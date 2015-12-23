// Get all the keys from document
var keys = document.querySelectorAll('#calculator span');
var decimalAdded = false;

// Add onclick event to all the keys and perform operations
for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		// Get the input and button values
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;

//append the key values (btnValue) to the input string and finally use javascript's eval function to get the result//

    if(btnVal == 'C') {
			input.innerHTML = '';
			decimalAdded = false;
		}

		// If eval key is pressed, calculate and display the result
		else if(btnVal == '=') {
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];

			if(equation)
				input.innerHTML = eval(equation);

			decimalAdded = false;
		}


		else {
			input.innerHTML += btnVal;
		}


	};
}
