// Palindrome
// Write a function that takes a string of letters and returns 
// true or false to determine whether it is palindromic. For example:

function is_palindrome(string) {
	string = string.toLowerCase().replace(/[^a-z]/g, "");
	return string.split("").reverse().join("") === string;
}

// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("something here"));


// Matching parentheses in an expression
// For version 1, the parentheses you need to consider are ( and ).
//  Finding a close parenthesis without an open parenthesis is an error
//   (report the location of the close); reaching the end of the string while
//   still "holding" 
// an open parenthesis is also an error (report the location of the open).

function balancedParens(str) {
	var stack = []
	var stackClosed = []

	for (var i = 0, len = str.length; i < len; i++) {
		if (str[i] === '(' || str[i] === '[' || str[i] === '{' || str[i] === '"') {
			stack.push([str[i], i]);
		} else if (str[i] === ')' || str[i] === ']' || str[i] === '}' || str[i] === '\"') {
			stack.pop();
		}
	}

	for (var i = str.length, len = str.length; i > 0; i--) {
		if (str[i] === ')' || str[i] === ']' || str[i] === '}' || str[i] === "'") {
			stackClosed.push([str[i], i]);
		} else if (str[i] === '(' || str[i] === '[' || str[i] === '[' || str[i] === "\'") {
			stackClosed.pop();
		}
	}

	if (stack.length !== 0) {
		return ("false", stack);
	} else if (stackClosed !== 0) {
		return (stackClosed);
	} else {
		return true;
	}
}

// console.log(balancedParens("hello(there) and stuff"));  //true
// console.log(balancedParens("hello(there() and stuff"));  // false - missing close
// console.log(balancedParens("hello(there) and st)uff"));  // false - missing open
// console.log(balancedParens("hello(there() and (stuff"));  // false - missing multiple closes
// console.log(balancedParens("hello(there) and st)uf)f"));  // false - missing multiple opens
// console.log(balancedParens('hello"there"!'));
// console.log(balancedParens('hello"there!'));  // false
// console.log(balancedParens("hello'there'!"));
// console.log(balancedParens("hello'there!"));  // false
// console.log(balancedParens("([)]"));


// regex version

function checkParentheses(word) {
 var stack = [];
 //word = word.toLowerCase().replace(/([\w])/ig, ''); // strip out all special char !/,
  var map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  for (var i = 0; i < word.length; i++) {
    if (word[i] === '(' || word[i] === '[' || word[i] === '{') {
      stack.push(word[i]);
    } else if (word[i] === ')' || word[i] === ']' || word[i] === '}') {
      var last = stack.pop();
      if (word[i] !== map[last]) {
        console.log('missing syntax at,' + word[i]);
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
}
function test() {
  // if (checkParentheses('([]{}{}[])') === true) {
  //   console.log('yes');
  // }
  
    if (checkParentheses('hello(world)') === true) {
    console.log('yes');
  }
 
}
//test();
// console.log(checkParentheses(")"));
// test()

// SQUARE DANCE PAIRING

function squareDancePairing(arr) {
	let guys = [];
	let girls = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === "M") {
			if (girls.length !== 0){
				console.log("Pairing off!");
				console.log([arr[i], girls.shift()]);
			} else {
				guys.push("M");
			}
		} else {
			if (guys.length !== 0) {
				console.log("Pairing off the new girl");
				console.log([guys.shift(), arr[i]]);
			} else {
				girls.push("W");
			}
		}
	}

	console.log("remaining guys: " + guys);
	console.log("remaining girls: " + girls);
}

squareDancePairing(["M", "M", "M", "W", "M", "W", "W", "M"]);


// The Ophidian Bank

// At the Ophidian Bank, a single teller serves a long queue of people. 
// New customers join the end of the queue, and the teller will serve a 
// customer only if s/he has all the appropriate paperwork.
//  Write a representation of this queue; 25% of the time (random),
//   a customer's paperwork isn't quite right, and it's back to the end of the queue. 
// Show what a few minutes of the bank's lobby would look like.

function bank(line) {
  while (line.length > 0) {
    if (Math.random() < 0.25) {
      var badCustomer = line.shift();
      line.push(badCustomer);
      console.log(badCustomer + ' sent to the back')
    } else {
      var finishedCustomer = line.shift();
      console.log(finishedCustomer + ' is done!')
    }
    //console.log('now the line is', line)
  }
}

bank(['billy', 'sam', 'jane', 'margot', 'jazz', 'mary']);















































