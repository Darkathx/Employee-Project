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
let updateState = null;

eventListeners();

function eventListeners() {
    document.addEventListener("DOMContentLoaded", getAllEmployees);
    form.addEventListener("submit", addEmployee);  
    employeesList.addEventListener("click", updateOrDelete); 
    updateEmployees.addEventListener("click", updateEmployee);
}
function getAllEmployees() {
    request.get()
    .then(employees => {
        ui.addAllEmployeesToUI(employees);
    })
    .catch(err => console.err(err));
}

function addEmployee(event) {

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
    event.preventDefault();
}

function updateOrDelete(e) {

    if(e.target.id === "delete-employee") {
        deleteEmployee(e.target);
    }
    else if(e.target.id === "update-employee") {
        updateEmployeeController(e.target.parentElement.parentElement);
    }
}

function deleteEmployee(target) {
    const id = target.parentElement.previousElementSibling.previousElementSibling.textContent;

    request.delete(id)
    .then(message => {
        console.log(message);
        ui.deleteEmployeeFromUI(target.parentElement.parentElement);
    })
    .catch(err => console.error(err));

    

}

function updateEmployeeController(tr) {
    ui.toggleUpdateButton(tr);
    if(updateState === null) {
        updateState = {
            updateID: tr.children[3].textContent,
            updateParent: tr,
        }
    }
    else {
        updateState = null;
    }
}

function updateEmployee() {

    if(updateState) {
        const data = {
            name: nameInput.value.trim(),
            department: departmentInput.value.trim(),
            salary: Number(salaryInput.value.trim())
        }
        request.put(updateState.updateID, data)
        .then(updatedEmployee => {
            ui.updateEmployeeOnUI(updatedEmployee, updateState.updateParent);
        })
        .catch(err => console.error(err));
    }
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

