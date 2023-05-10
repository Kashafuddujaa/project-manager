// Get references to HTML elements
const form = document.querySelector('form');
const taskNameInput = document.querySelector('#task-name');
const descriptionInput = document.querySelector('#description');
const dueDateInput = document.querySelector('#due-date');
const assignedToInput = document.querySelector('#assigned-to');
const newUserContainer = document.querySelector('#new-user-container');
const newUserInput = document.querySelector('#new-user-name');
const table = document.querySelector('table tbody');

// Add event listener for form submit
form.addEventListener('submit', function(event) {
  // Prevent default form behavior
  event.preventDefault();

  let assignedTo = assignedToInput.value;

  // If "New User" is selected, use the value of the "New user name" input field
  if (assignedTo === 'New User') {
    assignedTo = newUserInput.value;

    // Add a new option to the dropdown list with the new user's name
    const newOption = document.createElement('option');
    newOption.value = assignedTo;
    newOption.text = assignedTo;
    assignedToInput.insertBefore(newOption, newUserContainer.previousSibling);
  }

  // Create a new row in the table
  const newRow = table.insertRow();

  // Add cells to the new row
  const taskNameCell = newRow.insertCell();
  const descriptionCell = newRow.insertCell();
  const dueDateCell = newRow.insertCell();
  const assignedToCell = newRow.insertCell();
  const statusCell = newRow.insertCell();

  // Set cell values from form inputs
  taskNameCell.textContent = taskNameInput.value;
  descriptionCell.textContent = descriptionInput.value;
  dueDateCell.textContent = dueDateInput.value;
  assignedToCell.textContent = assignedTo;
  statusCell.textContent = 'Not Started';

  // Clear form inputs
  taskNameInput.value = '';
  descriptionInput.value = '';
  dueDateInput.value = '';
  assignedToInput.value = 'Alice';
  newUserInput.value = '';
});

// Add event listener for "Assigned to" dropdown list change
assignedToInput.addEventListener('change', function(event) {
  if (assignedToInput.value === 'New User') {
    // Show the "New user name" input field
    newUserContainer.style.display = 'block';
  } else {
    // Hide the "New user name" input field
    newUserContainer.style.display = 'none';
  }
});
