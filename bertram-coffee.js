/*
	Create an Employee class so that the employee's name, cost of their favorite
	beverage, and the amount they owe are all associated with each other. 
*/
const Employee = class {
  constructor(name, cost, tab=0) {
    this.name = name;
    this.cost = cost;
    this.tab = tab;
	this.optIn = true;
  }
};

/*
	Create a function for parsing employee data from template input. Note that
	in a production setting, a framework would be used instead and
	document.getElementById would be replaced with a binding.
*/
let employees;

function initializeEmployees(){
	employees = [];
	for(let i = 0; i < 7; ++i){
		employees.push(new Employee(document.getElementById("name" + i).value,
			parseFloat(document.getElementById("cost" + i).value),
			parseFloat(document.getElementById("tab" + i).value)));
	}
	outputPanel.innerHTML = "";
}

/*
	As we are not using a framework, this serves as a vanilla JavaScript
	alternative to ngOnInit, and creates references to DOM elements and
	initializing the employees array.
*/
let outputPanel;
document.addEventListener("DOMContentLoaded", function() {
	outputPanel = document.getElementById("output");
	salesTaxInput = document.getElementById("salesTaxInput");
	salesTaxCheckbox = document.getElementById("salesTaxCheckbox");
	tipInput = document.getElementById("tipInput");
	tipCheckbox = document.getElementById("tipCheckbox");
	initializeEmployees();
});

// Update existing employee data without modifying existing tabs.
function updateEmployees(){
	for(let i in employees){
		employees[i].name = document.getElementById("name" + i).value;
		employees[i].cost = parseFloat(document.getElementById("cost" + i).value);
		employees[i].optIn = document.getElementById("optIn" + i).checked;
		employees[i].tab = parseFloat(document.getElementById("tab" + i).value);
	}
}

// Modify the cost of an item based on tips and sales tax
function modifyCost(amount){
	if(tipCheckbox.checked){
		amount += amount * parseFloat(tipInput.value) / 100;
	}
	if(salesTaxCheckbox.checked){
		amount += amount * parseFloat(salesTaxInput.value) / 100;
	}
	return amount;
}

function determinePayee(){
	
	// Update employee data in case data has been modified
	updateEmployees();
	
	// Determine the total cost of the group order
	let totalCost = 0;
	for(let i in employees){
		if(employees[i].optIn){
			totalCost += modifyCost(employees[i].cost);
		}
	}
	
	let highestTab = employees[0].tab;
	let employeeToPay = employees[0];
	for(let i in employees){
		if(employees[i].optIn){
			// Add the cost of each employee's coffee to their tab
			employees[i].tab += modifyCost(employees[i].cost);
			
			// Calculate who owes the most (REFERENCE A)
			if(employees[i].tab > highestTab){
				highestTab = employees[i].tab;
				employeeToPay = employees[i];
			}
		}
	}
	
	// Display the output to the DOM
	outputPanel.innerHTML = "<div>" + employeeToPay.name + " should pay for this order.</div>";
	
	// Subtract the total cost from the payee's tab
	employeeToPay.tab -= totalCost;
	
	for(let i in employees){
		document.getElementById("tab" + i).value = (Math.round(employees[i].tab * 100) / 100.0);
	}
}
