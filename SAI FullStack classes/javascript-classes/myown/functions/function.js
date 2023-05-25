//pick every element that we need fom html
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
debugger;
// Event listeners (parent function or direct function) logic-1
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // checkRequired(inputArr);

  checkRequired([username, email, password, password2]);
});

//check required fields  logic-5 //inputArr this name act like a local varibale in the function
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}
// Get fieldname  logic-2
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// show input error message  logic-8
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error"; //inject class name
  const small = formControl.querySelector("small");
  small.innerText = message;
}
// show success message  logic-7
function showSuccess(input) {
  formControl = input.parentElement;
  formControl.className = "form-control success";
}
