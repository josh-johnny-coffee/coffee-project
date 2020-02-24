"use strict"

// document.getElementById('roastType').addEventListener('search', roastTypeFunc);


// var thing = document.getElementsByClassName('theSelect');
// thing[0].addEventListener('change', updateCoffees, false);

document.getElementsByClassName('theSelect')[0].addEventListener('change', updateCoffees, false);


//
// var thing = document.getElementsByClassName('theSelect');
//     thing[0].addEventListener('change', updateCoffees, false);
//     thing[1].addEventListener('change', updateCoffees, false);
    // thing[2].addEventListener('change', updateCoffees, false);
// document.getElementById('medium').addEventListener('click', updateCoffees, false);
// document.getElementById('dark').addEventListener('click', updateCoffees, false);

document.getElementById('roastType').addEventListener('click', addKey, false);
function addKey() {
    document.addEventListener('keyup', updateCoffees, false);
    document.getElementById('roastType').addEventListener('change', removeCoffee, false);
}

function removeCoffee() {
    document.removeEventListener('keyup', updateCoffees, false);
    document.getElementById('roastType').removeEventListener('change', removeCoffee, false);
}

function roastTypeFunc(input) {
    console.log('hi');
}

document.getElementById('submitCreate').addEventListener('click', create);

function create(e) {

    e.preventDefault();

    if (document.forms.form2.createCoffee.value){

        var idNum = coffees.length + 1;

        console.log('creat works');

        var createObj = {
            id: idNum,
            name: document.forms.form2.createCoffee.value,
            roast: document.forms.form2.createRoast.value
        };


        coffees.push(createObj);



        updateCoffees();
    }


}

// var myCat = 5;




function renderCoffee(coffee) {
    // var html = '<tr class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    // html += '<td>' + coffee.name + '</td>';
    // html += '<td>' + coffee.roast + '</td>';
    // html += '</tr>';

    // var html = '<div class="coffee">';
    // html += '<h1>' + coffee.name + '</h1>';
    // html += '<p>' + coffee.roast + '</p>';


    var html = '<div class="card cardStuff" style="width: 100%;">';
    html += '<div class="card-body" >';
    // html += '<img src="img/mug4.png" class="mug">';
    html += '<h5 class="card-title">' + coffee.name + '</h5>';
    html += '<p class="card-text">' + coffee.roast + '</p>';
    html += '</div>';
    html += '</div>';


    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        if (i % 2 === 0){
            html += renderCoffee(coffees[i]);
        }
    }
    return html;
}

function renderCoffees2(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        if (i % 2 === 1){
            html += renderCoffee(coffees[i]);
        }
    }
    return html;
}





function updateCoffees(e) {
    if (e){
        e.preventDefault(); // don't submit the form, we just want to update the data
    }

    var selectedRoast = roastSelection.value;
    console.log(roastSelection.value);
    var filteredCoffees = [];
    var roast = document.forms.form1.roastType.value;
    console.log(roast);
    coffees.forEach(function(coffee) {

        // console.log(coffee.roast);
        // console.log(roast);
        // console.log(coffee.name.includes(roast));

        if ((coffee.roast === selectedRoast || selectedRoast === 'all') && coffee.name.toLowerCase().includes(roast.toLowerCase())) {
            filteredCoffees.push(coffee);
        }
    });


    filteredCoffees.sort();
    coffees.sort();
    tbody.innerHTML = renderCoffees(filteredCoffees);
    tbody2.innerHTML = renderCoffees2(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


var tbody = document.querySelector('#coffees');
var tbody2 = document.querySelector('#coffees2');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var roastCreate = document.querySelector('#createRoast');
var coffeeCreate = document.querySelector('#createCoffee');

tbody.innerHTML = renderCoffees(coffees);
tbody2.innerHTML = renderCoffees2(coffees);



submitButton.addEventListener('click', updateCoffees);
