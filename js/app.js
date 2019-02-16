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

var firstAndPike = {
  location: '1st and Pike',
  min: 23,
  max: 65,
  avgSale: 6.3,
  render: function() {
    for(var i = 0; i < hours.length; i++) {
      var cookiesPerHour = Math.floor(Math.random() * ((this.max - this.min) + 1)) + this.min;
      console.log(cookiesPerHour);
    }
  }
};
firstAndPike.render();

// render: function () {
//   for (var i = 0; i < hours.length; i++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = `${hours[i]}: ${avgCustomers[i]}`;
//     firstandpikeUl.appendChild(liEl);

// }
// }

// console.log(firstAndPike.min);

// function cookiesPerHour(min, max) {
//   min = Math.floor(Math.random() * 30 ) + 1;
//   max = Math.floor(Math.random() * 50) + 1;
//   cust = Math.floor(Math.random() * 20) + 1;
// }

// var seatac = {
//   minCustomers: '',
//   maxCustomers: '',
//   avgCustomers: '',
// };

// var seattleCenter = {
//   minCustomers: '',
//   maxCustomers: '',
//   avgCustomers: '',
// };

// var capitolHill = {
//   minCustomers: '',
//   maxCustomers: '',
//   avgCustomers: '',
// };

// var alki = {
//   minCustomers: '',
//   maxCustomers: '',
//   avgCustomers: '',
