'use strict';

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

var table = document.getElementById('shell'); //getting the location from DOM
var submitForm = document.getElementById('submitform');


submitForm.addEventListener('submit', function() {
  handleFormSubmit();
});

function handleFormSubmit(event) {
  event.preventDefault();
  var newLocation = event.target.location.value;
  var newMinimumCustomer = event.target.minimumcustomers.value;
  var newMaximumCustomer = event.target.maximumcustomers.value;
  var newAverage = event.target.averagecustomers.value;

  new Location(newLocation, newMinimumCustomer, newMaximumCustomer, newAverage);

  event.target.newLocation.value = null;
  event.target.newMinimumCustomer.value = null;
  event.target.newMaximumCustomer.value = null;
  event.target.newAverage.value = null;

  for(var i = 0; i < hours.length + 1; i++) {
    var answer = Math.floor(Math.random() * ((this.newMaximumCustomer + 1) - this.newMinimumCustomer)) + this.newMinimumCustomer;
    var cookiesPerHr = Math.floor(answer * this.newAverage);
    this.sum.push(cookiesPerHr);
    this.total = this.total + cookiesPerHr;
  }

  this.render = function() {
    var newRow = document.createElement('tr');
    var newLocationName = document.createElement('td');
    newLocationName.innerText = this.newLocation;
    newRow.appendChild(newLocationName);

    for (var col = 0; col < hours.length; col++) {
      var newData = document.createElement('td');
      newData.innerText = this.sum[col];
      newRow.appendChild(newData);
    }

    var newLocationTotals = document.createElement('td');
    newLocationTotals.innerText = this.total;
    newRow.appendChild(newLocationTotals);

    table.appendChild(newRow);

  };

}






// eslint-disable-next-line no-redeclare
function Location (name, min, max, avgSale, sum, total) { //creating constructor function parameters
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgSale = avgSale;
  this.sum = sum;
  this.total = total;

  for(var i = 0; i < hours.length + 1; i++) {
    var answer = Math.floor(Math.random() * ((this.max + 1) - this.min)) + this.min;
    var cookiesPerHr = Math.floor(answer * this.avgSale);
    this.sum.push(cookiesPerHr);
    this.total = this.total + cookiesPerHr;
  }

  this.render = function() {
    //Name of location
    var row = document.createElement('tr');
    var locationName = document.createElement('td');
    locationName.innerText = this.name;
    row.appendChild(locationName);

    //location data for each hour
    for (var col = 0; col < hours.length; col++) {
      var data = document.createElement('td');
      data.innerText = this.sum[col];
      row.appendChild(data);
    }

    //location total
    var locationTotals = document.createElement('td');
    locationTotals.innerText = this.total;
    row.appendChild(locationTotals);

    //apend to table
    table.appendChild(row);
  };
}

var firstAndPike = new Location('1st and Pike', 23, 65, 6.3, [], 0);
var seatac = new Location('SeaTac Airport', 3, 24, 1.2, [], 0);
var seattleCenter = new Location('Seattle Center', 11, 38, 3.7, [], 0);
var capitolHill = new Location('Capitol Hill', 20, 38, 2.3, [], 0);
var alki = new Location('Alki', 2, 16, 4.6, [], 0);

var locations = [firstAndPike, seatac, seattleCenter, capitolHill, alki]; //array containing objects created from constructor function

//This will create one blank item in the header row
var headerRow = document.createElement('tr');
var blank = document.createElement('th');
headerRow.appendChild(blank);

//This for loop will create the hour column headings
for (var i = 0; i < hours.length; i++) {
  var header = document.createElement('th');
  header.innerText = hours[i];
  headerRow.appendChild(header);
}

//This will create the daily total label
var lastDescription = document.createElement('th');
lastDescription.innerText = 'Daily Location Total';
headerRow.appendChild(lastDescription);

//This will append the header row to the table
table.appendChild(headerRow);

//This will render the row locations
for (var index = 0; index < locations.length; index++) {
  locations[index].render();
}

//This will create the bottom row for the totals
var footerRow = document.createElement('tr');
var total = document.createElement('td');
total.innerText = 'Totals';
footerRow.appendChild(total);

for (var r = 0; r < hours.length; r++) {
  var footer = document.createElement('td');
  var hourlyTotal = 0;
  for(var lastRow = 0; lastRow < locations.length; lastRow++) {
    hourlyTotal = hourlyTotal + locations[lastRow].sum[r];
  }
  footer.innerText = hourlyTotal;
  footerRow.appendChild(footer);
}

table.appendChild(footerRow);

//This will create the grand total
var grandTotal = document.createElement('td');
var salesTotal = 0;
for (var st = 0; st < locations.length; st++) {
  salesTotal = salesTotal + locations[st].total;
}
grandTotal.innerText = salesTotal;
footerRow.appendChild(grandTotal);



////////
