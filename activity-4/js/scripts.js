var user = 'Mr. Hunsicker';
var salutation = 'Greetings';
var greeting = salutation + ' ' + user +  ', here are some Aseprite reviews!';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

var price = 19.99,
    studentDiscount = .10,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById('price'),
    studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);