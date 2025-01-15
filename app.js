// const openFormBtn = document.getElementById("openFormBtn");
// const popupForm = document.getElementById("popupForm");
// const closeFormBtn = document.getElementById("closeFormBtn");
// const userForm = document.getElementById("userForm");
// const submittedDataTable = document.getElementById("submittedDataTable");
// const dataTableBody = document.getElementById("dataTableBody");

// // Show popup form
// openFormBtn.addEventListener("click", () => {
//   popupForm.classList.remove("hidden");
// });

// // Hide popup form
// closeFormBtn.addEventListener("click", () => {
//   popupForm.classList.add("hidden");
// });

// popupForm.addEventListener("click", (event) => {
//   if (event.target === popupForm) {
//     popupForm.classList.add("hidden");
//   }
// });

// // Handle form submission
// userForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   // Collect form data
//   const firstName = document.getElementById("firstName").value;
//   const lastName = document.getElementById("lastName").value;
//   const email = document.getElementById("email").value;
//   const gender = userForm.gender.value; // Gender radio button
//   const languages = Array.from(userForm.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.value);

//   // Create a new table row
//   const row = document.createElement("tr");

//   row.innerHTML = `
//     <td><input type="checkbox"></td>
//     <td>${firstName} ${lastName}</td>
//     <td>${gender}</td>
//     <td>${languages.join(", ") || "None"}</td>
//     <td>${email}</td>
//   `;

//   // Add the row to the table body
//   dataTableBody.appendChild(row);

//   // Show the table if it was hidden
//   submittedDataTable.classList.remove("hidden");

//   // Close the popup form
//   popupForm.classList.add("hidden");

//   // Optionally reset the form
//   userForm.reset();
// });


const openFormBtn = document.getElementById("openFormBtn");
const popupForm = document.getElementById("popupForm");
const closeFormBtn = document.getElementById("closeFormBtn");
const thankYouPopup = document.getElementById("thankYouPopup");
const closeThankYouBtn = document.getElementById("closeThankYouBtn");
const userForm = document.getElementById("userForm");
const submittedDataTable = document.getElementById("submittedDataTable");
const dataTableBody = document.getElementById("dataTableBody");

// Show popup form
openFormBtn.addEventListener("click", () => {
  popupForm.classList.remove("hidden");
});

// Hide popup form
closeFormBtn.addEventListener("click", () => {
  popupForm.classList.add("hidden");
});

popupForm.addEventListener("click", (event) => {
  if (event.target === popupForm) {
    popupForm.classList.add("hidden");
  }
});

// Handle form submission
userForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Collect form data
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const gender = userForm.gender.value; // Gender radio button
  const languages = Array.from(userForm.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.value);

  // Create a new table row
  const row = document.createElement("tr");

  row.innerHTML = `
    <td><input type="checkbox"></td>
    <td>${firstName} ${lastName}</td>
    <td>${gender}</td>
    <td>${languages.join(", ") || "None"}</td>
    <td>${email}</td>
  `;

  // Add the row to the table body
  dataTableBody.appendChild(row);

  // Show the table if it was hidden
  submittedDataTable.classList.remove("hidden");

  // Close the popup form
  popupForm.classList.add("hidden");

  // Show the "Thank You" popup
  thankYouPopup.classList.remove("hidden");

  // Optionally reset the form
  userForm.reset();
});

// Close the "Thank You" popup
closeThankYouBtn.addEventListener("click", () => {
  thankYouPopup.classList.add("hidden");
});

thankYouPopup.addEventListener("click", (event) => {
  if (event.target === thankYouPopup) {
    thankYouPopup.classList.add("hidden");
  }
});

