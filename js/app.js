'use strict';

var hours = [
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


var firstandpikeUl = document.getElementById('firstandpike');
var seatacUl = document.getElementById('seatac');
var seattlecenterUl = document.getElementById('seattlecenter');
var capitolhillUl = document.getElementById('capitolhill');
var alkiUl = document.getElementById('alki');



var firstAndPike = {
  location: '1st and Pike',
  min: 23,
  max: 65,
  avgSale: 6.3,
  sum: [],
  totals: 0,

  render: function() {
    for(var i = 0; i < hours.length + 1; i++) {
      var answer = Math.floor(Math.random() * ((this.max + 1) - this.min)) + this.min;
      var cookiesPerHr = Math.floor(answer * this.avgSale);
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${cookiesPerHr} cookies`;
      firstandpikeUl.appendChild(liEl);
      this.sum.push(cookiesPerHr);
      this.totals = cookiesPerHr + this.totals;
    } liEl.textContent = `Totals: ${this.totals - cookiesPerHr}`;
  }
};

var seatac = {
  location: 'SeaTac Airport',
  min: 3,
  max: 24,
  avgSale: 1.2,
  sum: [],
  totals: 0,
  render: function() {
    for(var i = 0; i < hours.length; i++) {
      var answer = Math.floor(Math.random() * ((this.max + 1) - this.min)) + this.min;
      var cookiesPerHr = Math.floor(answer * this.avgSale);
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${cookiesPerHr} cookies`;
      seatacUl.appendChild(liEl);
      this.sum.push(cookiesPerHr);
      this.totals = cookiesPerHr + this.totals;
    } liEl.textContent = `Totals: ${this.totals - cookiesPerHr}`;
  }
};


var seattleCenter = {
  location: 'Seattle Center',
  min: 11,
  max: 38,
  avgSale: 3.7,
  sum: [],
  totals: 0,
  render: function() {
    for(var i = 0; i < hours.length; i++) {
      var answer = Math.floor(Math.random() * ((this.max + 1) - this.min)) + this.min;
      var cookiesPerHr = Math.floor(answer * this.avgSale);
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${cookiesPerHr} cookies`;
      seattlecenterUl.appendChild(liEl);
      this.sum.push(cookiesPerHr);
      this.totals = cookiesPerHr + this.totals;
    } liEl.textContent = `Totals: ${this.totals - cookiesPerHr}`;
  }
};

var capitolHill = {
  location: 'Seattle Center',
  min: 20,
  max: 38,
  avgSale: 2.3,
  sum: [],
  totals: 0,
  render: function() {
    for(var i = 0; i < hours.length; i++) {
      var answer = Math.floor(Math.random() * ((this.max + 1) - this.min)) + this.min;
      var cookiesPerHr = Math.floor(answer * this.avgSale);
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${cookiesPerHr} cookies`;
      capitolhillUl.appendChild(liEl);
      this.sum.push(cookiesPerHr);
      this.totals = cookiesPerHr + this.totals;
    } liEl.textContent = `Totals: ${this.totals - cookiesPerHr}`;
  }
};


var alki = {
  location: 'Seattle Center',
  min: 2,
  max: 16,
  avgSale: 4.6,
  sum: [],
  totals: 0,
  render: function() {
    for(var i = 0; i < hours.length; i++) {
      var answer = Math.floor(Math.random() * ((this.max + 1) - this.min)) + this.min;
      var cookiesPerHr = Math.floor(answer * this.avgSale);
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${cookiesPerHr} cookies`;
      alkiUl.appendChild(liEl);
      this.sum.push(cookiesPerHr);
      this.totals = cookiesPerHr + this.totals;
    } liEl.textContent = `Totals: ${this.totals - cookiesPerHr}`;
  }
};


firstAndPike.render();
seatac.render();
seattleCenter.render();
capitolHill.render();
alki.render();