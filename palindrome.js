const textInput = document.getElementById("text-input");
const result = document.getElementById("result");
const button = document.getElementById("check-btn");

function check() {
  const userInput = textInput.value.trim();

  if (userInput === "") {
    alert("Please input a value");
    return;
  }

  result.textContent = "";
  result.style.color = "";

  const cleanedInput = userInput.toLowerCase().replace(/[^a-z0-9]/gi, "");

  const reversedInput = cleanedInput.split("").reverse().join("");

  if (cleanedInput === reversedInput) {
    result.textContent = `${userInput} is a palindrome.`;
    result.style.color = "green";
    return;
  } else {
    result.textContent = `${userInput} is not a palindrome.`;
    result.style.color = "red";
    return;
  }
}
button.addEventListener("click", check);
