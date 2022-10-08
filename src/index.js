import {Request} from "./requests.js";
import {UI} from "./ui.js"

const form = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const departmentInput = document.getElementById("department");
const salaryInput = document.getElementById("salary");
const employeesList = document.getElementById("employees");
const updateEmployees = document.getElementById("update");

const request = new Request("http://localhost:3000/employees");
const ui = new UI();

eventListeners();

function eventListeners() {
    document.addEventListener("DOMContentLoaded", getAllEmployees);
    form.addEventListener("submit", addEmployee);   
}
function getAllEmployees() {
    request.get()
    .then(employees => {
        ui.addAllEmployeesToUI(employees);
    })
    .catch(err => console.err(err));
}

function addEmployee(e) {

    const employeeName = nameInput.value.trim();
    const departmentName = departmentInput.value.trim();
    const salaryName = salaryInput.value.trim();
    request.post({
        name: employeeName,
        department: departmentName,
        salary: Number(salaryName)
    })
    .then(employee => {
        ui.addEmployeeToUI(employee);
    })
    .catch(err => console.error(err));

    ui.clearInputs();
    e.preventDefault();
}


// request.get()
// .then(employees => console.log(employees))
// .catch(err => console.error(err));

// request.post({
//     name: "Serhat Say",
//     department: "Marketing",
//     salary: 6000
// })
// .then(employee => console.log(employee))
// .catch(err => console.error(err));

// request.put(1, {
//     name: "Ahmet Eroğlu",
//     department: "HR",
//     salary: 1
// })
// .then(response => console.log(response))
// .catch(err => console.error(err));

// request.delete(1)
// .then(response => console.log(response))
// .catch(err => console.error(err));

