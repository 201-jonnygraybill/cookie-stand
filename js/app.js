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

// eslint-disable-next-line no-redeclare
function Location(name, min, max, avgSale) { //creating constructor function parameters
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgSale = avgSale;
  this.sum = [];
  this.total = 0;

  for (var i = 0; i < hours.length + 1; i++) {
    var answer = Math.floor(Math.random() * ((this.max + 1) - this.min)) + this.min;
    var cookiesPerHr = Math.floor(answer * this.avgSale);
    this.sum.push(cookiesPerHr);
    this.total = this.total + cookiesPerHr;
  }

  this.render = function () {
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

function createHeaderRow() {
  //This will create one blank item in the header row
  var headerRow = document.createElement('tr');
  var blank = document.createElement('th');
  blank.innerText = 'Locations';
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

}

//render each of the previous function to pull data into the table
function renderData() {
  createHeaderRow();
  renderLocations();
  footerTotals();
}

renderData(); //call render function containing all previous render functions - master call function 10/10

function footerTotals() {
  //This will create the bottom row for the totals
  var footerRow = document.createElement('tr');
  var total = document.createElement('td');
  total.innerText = 'Totals';
  footerRow.appendChild(total);

  for (var r = 0; r < hours.length; r++) {
    var footer = document.createElement('td');
    var hourlyTotal = 0;
    for (var lastRow = 0; lastRow < locations.length; lastRow++) {
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
}

function handleDataInput(event) { //Event handler to process what happens when form is submitted
  event.preventDefault();

  var name = event.target.name.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var avgSale = parseInt(event.target.avgSale.value);

  var newShop = new Location(name, min, max, avgSale); //New constructor variable - with parameters listed as variables previously redefined based on form input data

  //Clearing out data from submit form
  event.target.name.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.avgSale.value = null;

  //Take newShop data and push it into the locations array defined earlier
  locations.unshift(newShop);

  //Calling functions to clear table
  clearData();
  renderData();
}

//Clear data from table
function clearData() {
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }
}

//Render locations
function renderLocations() {
  for (var i = 0; i < locations.length; i++) {
    locations[i].render();
  }
}

submitForm.addEventListener('submit', handleDataInput);
