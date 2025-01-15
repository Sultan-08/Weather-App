const openFormBtn = document.getElementById("openFormBtn");
const popupForm = document.getElementById("popupForm");
const closeFormBtn = document.getElementById("closeFormBtn");
const thankYouPopup = document.getElementById("thankYouPopup");
const closeThankYouBtn = document.getElementById("closeThankYouBtn");
const userForm = document.getElementById("userForm");
const submittedDataTable = document.getElementById("submittedDataTable");
const dataTableBody = document.getElementById("dataTableBody");
const firstName = document.getElementById("firstName").value;
const lastName = document.getElementById("lastName").value;
const email = document.getElementById("email").value;
const gender = userForm.gender.value;
const languages = Array.from(userForm.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.value);
const row = document.createElement("tr");

openFormBtn.addEventListener("click", () => {
  popupForm.classList.remove("hidden");
});

closeFormBtn.addEventListener("click", () => {
  popupForm.classList.add("hidden");
});

popupForm.addEventListener("click", (event) => {
  if (event.target === popupForm) {
    popupForm.classList.add("hidden");
  }
});

userForm.addEventListener("submit", (event) => {
  event.preventDefault();

row.innerHTML = `
    <td><input type="checkbox"></td>
    <td>${firstName} ${lastName}</td>
    <td>${gender}</td>
    <td>${languages.join(", ") || "None"}</td>
    <td>${email}</td>`;

dataTableBody.appendChild(row);

  submittedDataTable.classList.remove("hidden");
  popupForm.classList.add("hidden");
  thankYouPopup.classList.remove("hidden");
  userForm.reset();
});

closeThankYouBtn.addEventListener("click", () => {
  thankYouPopup.classList.add("hidden");
});

thankYouPopup.addEventListener("click", (event) => {
  if (event.target === thankYouPopup) {
    thankYouPopup.classList.add("hidden");
  }
});
