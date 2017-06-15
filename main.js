// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {
  'use strict';

  var url = 'https://randomuser.me/api/?results=12';
  var customers = document.querySelector('.customers');
  // ------------Title----------//
  var peopleTitle = document.createElement('h1');
  peopleTitle.className = 'title';
  peopleTitle.textContent = "Internal Company Directory";
  customers.appendChild(peopleTitle);
  var peopleSection = document.createElement('div');
  peopleSection.className = 'section';
  customers.appendChild(peopleSection);
  //----------Fetch------------//

  fetch(url).then((resp) => resp.json())
  .then(function(data){
  for (var i = 0; i < data.results.length; i++) {
  var people = data.results[i];
  console.log(people.name.first + people.name.last);
  var peopleDiv = document.createElement('div');
  peopleDiv.className = "column-lg-3";
  peopleSection.appendChild(peopleDiv);
  var peoplePic = document.createElement('img');
  peoplePic.className = 'pic';
  peoplePic.src = people.picture.large;
  peopleDiv.appendChild(peoplePic);
  var peopleName = document.createElement('h5');
  peopleName.className = 'name';
  peopleName.textContent = people.name.first + " " + people.name.last;
  peopleDiv.appendChild(peopleName);
  var peopleEmail = document.createElement('h5');
  peopleEmail.className = 'email';
  peopleEmail.textContent = people.email;
  peopleDiv.appendChild(peopleEmail);
  var peopleStreet1 = document.createElement('h5');
  peopleStreet1.className = 'street1';
  peopleStreet1.textContent = people.location.street;
  peopleDiv.appendChild(peopleStreet1);
  var peopleCity2 = document.createElement('h5');
  peopleCity2.className = 'city';
  peopleCity2.textContent = people.location.city + ', ' +
  people.location.state + ', ' + people.location.postcode;
  peopleDiv.appendChild(peopleCity2);
  var peoplePhone = document.createElement('h5');
  peoplePhone.className = 'phone';
  peoplePhone.textContent = people.cell;
  peopleDiv.appendChild(peoplePhone);
  var peopleBlurNum = document.createElement('h5');
  peopleBlurNum.className = 'blurNum';
  peopleBlurNum.textContent = randSocial();
  peopleDiv.appendChild(peopleBlurNum);
  }
});


  // Your Code Goes Here
function randSocial() {
  var first = Math.floor(Math.random() * 300) + 100;
  var second = Math.floor(Math.random() * 99) + 10;
  var third = Math.floor(Math.random() * 9999) + 1000;
  var soc = first + '-' + second + '-' + third;
  return soc;
}
})();
