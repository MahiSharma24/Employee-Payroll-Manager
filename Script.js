document.getElementById('employeeForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  const employeeName = document.getElementById('employeeName').value;
  const baseSalary = parseFloat(document.getElementById('baseSalary').value);
  const attendance = parseInt(document.getElementById('attendance').value);

  // Create a new table row
  const employeeTableBody = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
  const newRow = employeeTableBody.insertRow();

  // Insert cells
  newRow.insertCell(0).textContent = employeeName;
  newRow.insertCell(1).textContent = `₹${baseSalary.toFixed(2)}`;
  newRow.insertCell(2).textContent = attendance;

  // Create delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = function() {
      employeeTableBody.deleteRow(newRow.rowIndex - 1); // Adjust for header row
      updateStatistics(); // Update statistics after deletion
  };
  
  newRow.insertCell(3).appendChild(deleteButton);

  // Clear the form
  this.reset();

  // Update statistics
  updateStatistics();
});

function updateStatistics() {
  const employeeTableBody = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
  const rows = employeeTableBody.rows;
  const totalEmployees = rows.length;
  let totalSalary = 0;

  for (let i = 0; i < totalEmployees; i++) {
      const salaryText = rows[i].cells[1].textContent; // Get the base salary from the table
      const salary = parseFloat(salaryText.replace(/[^0-9.-]+/g, ""));
      totalSalary += salary; // Sum the total salary
  }

  const averageSalary = totalEmployees > 0 ? (totalSalary / totalEmployees).toFixed(2) : 0;

  document.getElementById('totalEmployees').textContent = `Total Employees: ${totalEmployees}`;
  document.getElementById('averageSalary').textContent = `Average Salary: $${averageSalary}`;
}

document.getElementById('themeSwitch').addEventListener('change', function() {
  document.body.classList.toggle('dark-mode', this.checked);
});
