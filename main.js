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

function renderCoffee(coffee) {
    // var html = '<tr class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    // html += '<td>' + coffee.name + '</td>';
    // html += '<td>' + coffee.roast + '</td>';
    // html += '</tr>';

    var html = '<div class="coffee">';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}



function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
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
    tbody.innerHTML = renderCoffees(filteredCoffees);
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
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
