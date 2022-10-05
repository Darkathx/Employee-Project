import { Request} from "./requests";


const form = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const departmentInput = document.getElementById("department");
const salaryInput = document.getElementById("salary");
const employeesList = document.getElementById("employees");
const updateEmployees = document.getElementById("update");

const request = new Request("http://localhost:3000/employees");
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

