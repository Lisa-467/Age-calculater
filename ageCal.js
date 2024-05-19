document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const dateInput = document.querySelector('input[type="date"]');
  const resultParagraph = document.querySelector("p");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const selectedDate = new Date(dateInput.value);
    if (isNaN(selectedDate)) {
      resultParagraph.textContent = " select a valid date please ";
      return;
    }
    const age = calculateAge(selectedDate);
    resultParagraph.textContent = `Calculated age is ${age} years`;
  });

  form.addEventListener("reset", function () {
    resultParagraph.textContent = "Calculated age is";
  });

  function calculateAge(dateOfBirth) {
    const today = new Date();
    let age = today.getFullYear() - dateOfBirth.getFullYear();
    const monthDifference = today.getMonth() - dateOfBirth.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < dateOfBirth.getDate())
    ) {
      age--;
    }
    return age;
  }
});
