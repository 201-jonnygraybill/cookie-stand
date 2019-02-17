'use strict';

var table = document.getElementById('shell'); //getting the location from DOM

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
var seatac = new CookieStand('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new CookieStand('Seattle Center', 11, 38, 3.7);
var capitolHill = new CookieStand('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStand('Alki', 2, 16, 4.6);

var objects = [firstAndPike, seatac, seattleCenter, capitolHill, alki]; //array containing objects created from constructor function

var footerRow = document.createElement('tr');
var bottomTotals = document.createElement('td');
bottomTotals.innerText = 'Totals';
footerRow.appendChild(bottomTotals);

for(var j = 0; j < hours.length; j++) {
  var bottom = document.createElement('td');
  var hourlyTotal = 0;
  for(var k = 0; k < objects.length; k++) {
    hourlyTotal = hourlyTotal + objects[k].sum[j];
  }
  bottom.innerText = hourlyTotal;
  footerRow.appendChild(bottom);
}

for(var row = 0; row < objects.length; row++) { //starting for loop to go through objects array
  var newRow = document.createElement('tr'); //defining new row variable - creating DOM element row
  var locationName = document.createElement('td'); //defining location name variable - creating DOM elem. table data
  locationName.innerText = objects[row].location; //taking table data created and inserting text into it
  newRow.appendChild(locationName); //taking new row created and inserting location name into correct table spot

  for(var column = 0; column < hours.length; column++) { //
    var newColumn = document.createElement('td');
    newColumn.innerText = objects[row].sum[column];
    newRow.appendChild(newColumn);
  }

  var totalsColumn = document.createElement('td');
  totalsColumn.innerText = objects[row].totals;
  newRow.appendChild(totalsColumn);

  table.appendChild(newRow);
  table.appendChild(footerRow);
}
