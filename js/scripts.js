// factorial
var factorial = function(number){
  var newNumber = 1;
  if (number > 1){
    newNumber = number * factorial(number - 1);
  }
  return newNumber;
}

var listAllNumbersToArray = function(number, numberArray){
  if (number > 1){
    numberArray.push(number);
    listAllNumbersToArray(number - 1, numberArray);
  }

  return numberArray;
}

var isPrimeNumber = function(number){
  var numberArray = [];
  var numberArray = listAllNumbersToArray(number, numberArray);
  var isPrime = true;
  for (var i = 1; i < numberArray.length; i++){
    if (number % numberArray[i] === 0){
      isPrime = false;
    }
  }
  return isPrime;
}

var getPrimeNumber = function(number){
  var primeArray = [];
  var numberArray = [];
  var numberArray = listAllNumbersToArray(number, numberArray);
  for (var i in numberArray){
    if (isPrimeNumber(numberArray[i])){
      primeArray.push(numberArray[i]);
    }
  }
  console.log(primeArray);
  return primeArray;
}

$(document).ready(function() {
  $("form#PrimeFinder").submit(function(event) {
    $(".result").empty();
    var userNumber = $("input#number").val();
    $(".result").text(getPrimeNumber(userNumber)).fadeIn();
    event.preventDefault();
  });
});
