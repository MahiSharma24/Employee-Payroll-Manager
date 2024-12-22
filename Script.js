// JavaScript for SalaryBox functionality

// DOM Elements
const employeeForm = document.getElementById("employee-form");
const employeeTableBody = document.getElementById("employee-table-body");
const addEmployeeButton = document.getElementById("add-employee");

// Employee data (in-memory storage for this example)
let employees = [];

// Function to add a new employee
function addEmployee() {
    const nameInput = document.getElementById("name").value;
    const salaryInput = document.getElementById("salary").value;
    const attendanceInput = document.getElementById("attendance").value;

    if (!nameInput || !salaryInput || !attendanceInput) {
        alert("Please fill in all fields.");
        return;
    }

    const newEmployee = {
        id: Date.now(), // Unique ID based on timestamp
        name: nameInput,
        salary: parseFloat(salaryInput),
        attendance: parseInt(attendanceInput, 10),
    };

    employees.push(newEmployee);
    renderEmployeeTable();

    // Clear input fields
    employeeForm.reset();
}

// Function to render the employee table
function renderEmployeeTable() {
    employeeTableBody.innerHTML = ""; // Clear existing rows

    if (employees.length === 0) {
        employeeTableBody.innerHTML = "<tr><td colspan='4'>No employees found.</td></tr>";
        return;
    }

    employees.forEach((employee) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.salary.toFixed(2)}</td>
            <td>${employee.attendance}</td>
            <td>
                <button class="delete-button" onclick="deleteEmployee(${employee.id})">Delete</button>
            </td>
        `;

        employeeTableBody.appendChild(row);
    });
}

// Function to delete an employee by ID
function deleteEmployee(employeeId) {
    employees = employees.filter((employee) => employee.id !== employeeId);
    renderEmployeeTable();
}

// Event Listener for Add Employee Button
addEmployeeButton.addEventListener("click", addEmployee);

// Initial render
renderEmployeeTable();
