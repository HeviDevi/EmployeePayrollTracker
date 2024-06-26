
const addEmployeesBtn = document.querySelector('#add-employees-btn');

let employeesArray = [];

const collectEmployees = function() {
  
  let confirmNewEmployee = true;
  confirmNewEmployee = window.confirm('Would you like to add new memeber to the team?')

  while (confirmNewEmployee) {
  let addfirstName = window.prompt(`What is their first name?`);
  let addlastName = window.prompt(`What is their last name?`);
  let addsalary = parseFloat(window.prompt(`What is their annual salary?`));
 
  if(isNaN(addsalary)){
  window.prompt(`Please enter ONLY a number in the salary box`);
  return false;
 }
  let Employee = {
    firstName : addfirstName,
    lastName: addlastName,
    salary : addsalary,   
                  };
  employeesArray.push(Employee);
  confirmNewEmployee = window.confirm('Would you like to add new memeber to the team?');

    };


    return employeesArray
   
}

const displayAverageSalary = function(employeesArray) {

      let totalSalary = 0 ;
  for (let i = 0; i < employeesArray.length; i++)
      {totalSalary += employeesArray[i].salary}
      averageSalary = totalSalary/employeesArray.length;

    console.log(`The average salary of our ${employeesArray.length} employees is ${averageSalary.toLocaleString(`en-US`, {style: `currency`, currency : `USD`})}. Cha-Ching!!`)

  
}

const getRandomEmployee = function(employeesArray) {

  
randomEmployeeSelection = employeesArray[Math.floor(Math.random() * employeesArray.length)];
console.log(`Congratulations ${randomEmployeeSelection.firstName} ${randomEmployeeSelection.lastName} you have been randomly selected for a permanent vacation in Upstate New York, enjoy your new life! `)
 

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
 