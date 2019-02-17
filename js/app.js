'use strict';

var table = document.getElementById('shell'); //getting the location from DOM
var data = []; //array to be filled with pushed data

var hours = [ //hours of operation for each cookie stand
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm',
];

function CookieStand(location, min, max, avgSale) { //creating constructor function parameters
  this.location = location;
  this.min = min;
  this.max = max;
  this.avgSale = avgSale;
  this.sum = [];
  this.totals = 0;

  for(var i = 0; i < hours.length + 1; i++) {
    var answer = Math.floor(Math.random() * ((this.max + 1) - this.min)) + this.min;
    var cookiesPerHr = Math.floor(answer * this.avgSale);
    this.sum.push(cookiesPerHr);
    this.totals = this.totals + cookiesPerHr;
  }
}



var firstAndPike = new CookieStand('1st and Pike', 23, 65, 6.3);
console.log(firstAndPike);

var seatac = new CookieStand('SeaTac Airport', 3, 24, 1.2);
console.log(seatac);

var seattleCenter = new CookieStand('Seattle Center', 11, 38, 3.7);
console.log(seattleCenter);

var capitolHill = new CookieStand('Capitol Hill', 20, 38, 2.3);
console.log(capitolHill);

var alki = new CookieStand('Alki', 2, 16, 4.6);
console.log(alki);



var objects = [firstAndPike, seatac, seattleCenter, capitolHill, alki];


for(var row = 0; row < objects.length; row++) {
  var newRow = document.createElement('tr');
  var locationName = document.createElement('td');
  locationName.innerText = objects[row].location;
  newRow.appendChild(locationName);

  for(var column = 0; column < hours.length; column++) {
    var newColumn = document.createElement('td');
    newColumn.innerText = objects[row].sum[column];
    newRow.appendChild(newColumn);
  } 

  var totalsColumn = document.createElement('td');
  totalsColumn.innerText = objects[row].totals;
  newRow.appendChild(totalsColumn);

  table.appendChild(newRow);
}







// var firstandpikeUl = document.getElementById('firstandpike');
// var seatacUl = document.getElementById('seatac');
// var seattlecenterUl = document.getElementById('seattlecenter');
// var capitolhillUl = document.getElementById('capitolhill');
// var alkiUl = document.getElementById('alki');



// var firstAndPike = {
//   location: '1st and Pike',
//   min: 23,
//   max: 65,
//   avgSale: 6.3,
//   sum: [],
//   totals: 0,

//   render: function() {
//     for(var i = 0; i < hours.length + 1; i++) {
//       var answer = Math.floor(Math.random() * ((this.max + 1) - this.min)) + this.min;
//       var cookiesPerHr = Math.floor(answer * this.avgSale);
//       var liEl = document.createElement('li');
//       liEl.textContent = `${hours[i]}: ${cookiesPerHr} cookies`;
//       firstandpikeUl.appendChild(liEl);
//       this.sum.push(cookiesPerHr);
//       this.totals = cookiesPerHr + this.totals;
//     } liEl.textContent = `Totals: ${this.totals - cookiesPerHr}`;
//   }
// };

// var seatac = {
//   location: 'SeaTac Airport',
//   min: 3,
//   max: 24,
//   avgSale: 1.2,
//   sum: [],
//   totals: 0,
//   render: function() {
//     for(var i = 0; i < hours.length; i++) {
//       var answer = Math.floor(Math.random() * ((this.max + 1) - this.min)) + this.min;
//       var cookiesPerHr = Math.floor(answer * this.avgSale);
//       var liEl = document.createElement('li');
//       liEl.textContent = `${hours[i]}: ${cookiesPerHr} cookies`;
//       seatacUl.appendChild(liEl);
//       this.sum.push(cookiesPerHr);
//       this.totals = cookiesPerHr + this.totals;
//     } liEl.textContent = `Totals: ${this.totals - cookiesPerHr}`;
//   }
// };


// var seattleCenter = {
//   location: 'Seattle Center',
//   min: 11,
//   max: 38,
//   avgSale: 3.7,
//   sum: [],
//   totals: 0,
//   render: function() {
//     for(var i = 0; i < hours.length; i++) {
//       var answer = Math.floor(Math.random() * ((this.max + 1) - this.min)) + this.min;
//       var cookiesPerHr = Math.floor(answer * this.avgSale);
//       var liEl = document.createElement('li');
//       liEl.textContent = `${hours[i]}: ${cookiesPerHr} cookies`;
//       seattlecenterUl.appendChild(liEl);
//       this.sum.push(cookiesPerHr);
//       this.totals = cookiesPerHr + this.totals;
//     } liEl.textContent = `Totals: ${this.totals - cookiesPerHr}`;
//   }
// };

// var capitolHill = {
//   location: 'Capitol Hill',
//   min: 20,
//   max: 38,
//   avgSale: 2.3,
//   sum: [],
//   totals: 0,
//   render: function() {
//     for(var i = 0; i < hours.length; i++) {
//       var answer = Math.floor(Math.random() * ((this.max + 1) - this.min)) + this.min;
//       var cookiesPerHr = Math.floor(answer * this.avgSale);
//       var liEl = document.createElement('li');
//       liEl.textContent = `${hours[i]}: ${cookiesPerHr} cookies`;
//       capitolhillUl.appendChild(liEl);
//       this.sum.push(cookiesPerHr);
//       this.totals = cookiesPerHr + this.totals;
//     } liEl.textContent = `Totals: ${this.totals - cookiesPerHr}`;
//   }
// };


// var alki = {
//   location: 'Alki',
//   min: 2,
//   max: 16,
//   avgSale: 4.6,
//   sum: [],
//   totals: 0,
//   render: function() {
//     for(var i = 0; i < hours.length; i++) {
//       var answer = Math.floor(Math.random() * ((this.max + 1) - this.min)) + this.min;
//       var cookiesPerHr = Math.floor(answer * this.avgSale);
//       var liEl = document.createElement('li');
//       liEl.textContent = `${hours[i]}: ${cookiesPerHr} cookies`;
//       alkiUl.appendChild(liEl);
//       this.sum.push(cookiesPerHr);
//       this.totals = cookiesPerHr + this.totals;
//     } liEl.textContent = `Totals: ${this.totals - cookiesPerHr}`;
//   }
// };


// firstAndPike.render();
// seatac.render();
// seattleCenter.render();
// capitolHill.render();
// alki.render();


// var liEl = document.createElement('li');
//       liEl.textContent = `${hours[i]}: ${cookiesPerHr} cookies`;
//       firstandpikeUl.appendChild(liEl);
//     } liEl.textContent = `Totals: ${this.totals - cookiesPerHr}`




// for(i = 0; i < hours.length; i++) {
//   var seattleCenter = new CookieStand('Seattle Center', Math.floor(Math.random() * ((24 + 1) - 3)) + 3, 3, 24, 1.2, [], 0);
//   var hourlyCookies = Math.floor(seattleCenter.hourlySales * seattleCenter.avgSale);
//   console.log(hourlyCookies);
// }

// for(i = 0; i < hours.length; i++) {
//   var capitolHill = new CookieStand('Capitol Hill', Math.floor(Math.random() * ((38 + 1) - 20)) + 20, 20, 38, 2.3, [], 0);
//   var hourlyCookies = Math.floor(capitolHill.hourlySales * capitolHill.avgSale);
//   console.log(hourlyCookies);
// }

// for(i = 0; i < hours.length; i++) {
//   var alki = new CookieStand('Alki', Math.floor(Math.random() * ((16 + 1) - 2)) + 2, 2, 16, 4.6, [], 0);
//   var hourlyCookies = Math.floor(alki.hourlySales * alki.avgSale);
//   console.log(hourlyCookies);
// }
