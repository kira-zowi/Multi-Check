const inputNumber = document.getElementById("user-input");
const result = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const isValidUSPhone = (num) => {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
  return regex.test(num);
};

checkBtn.addEventListener("click", () => {
  const value = inputNumber.value.trim();

  if (value === "") {
    window.alert("Please provide a phone number.");
  } else if (isValidUSPhone(value)) {
    result.innerText = `Valid US number: ${value}`;
    result.style.color = "green";
  } else {
    result.innerText = `Invalid US number: ${value}`;
    result.style.color = "red";
  }
});

clearBtn.addEventListener("click", () => {
  inputNumber.value = "";
  result.innerText = "";
});
