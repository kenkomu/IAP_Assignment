// Query and store elements
const submit = document.querySelector("#submit");
const newTask = document.querySelector("#new-task");
const taskList = document.querySelector("#task-list");
const taskForm = document.querySelector("#task-form");

// Disable submit button by default
submit.disabled = true;

// Listen for input in the task field
newTask.addEventListener("input", () => {
  // Enable/disable submit button based on input value
  submit.disabled = newTask.value.trim() === "";
});

// Listen for form submission
taskForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get the task from the input field
  const taskValue = newTask.value.trim();
  if (!taskValue) return;

  // Create a list item for the new task
  const listItem = document.createElement("li");
  listItem.textContent = taskValue;

  // Add the new task to the unordered list
  taskList.append(listItem);

  // Clear the input field and disable submit button again
  newTask.value = "";
  submit.disabled = true;

  return false; // Prevent default form submission
});