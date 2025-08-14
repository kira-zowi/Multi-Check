const inputNumber = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const result = document.getElementById("output");

const romanMap = [
  { value: 1000, numeral: "M" },
  { value: 900, numeral: "CM" },
  { value: 500, numeral: "D" },
  { value: 400, numeral: "CD" },
  { value: 100, numeral: "C" },
  { value: 90, numeral: "XC" },
  { value: 50, numeral: "L" },
  { value: 40, numeral: "XL" },
  { value: 10, numeral: "X" },
  { value: 9, numeral: "IX" },
  { value: 5, numeral: "V" },
  { value: 4, numeral: "IV" },
  { value: 1, numeral: "I" },
];

function toRoman(num) {
  if (num === 0) return "";
  for (let i = 0; i < romanMap.length; i++) {
    if (num >= romanMap[i].value) {
      return romanMap[i].numeral + toRoman(num - romanMap[i].value);
    }
  }
}

const convert = () => {
  const value = parseInt(inputNumber.value);

  if (!value) {
    result.innerText = "Please enter a valid number";
    return;
  } else if (value < 0) {
    result.innerText = "Please enter a number greater than or equal to 1";
    return;
  } else if (value >= 4000) {
    result.innerText = "Please enter a number less than or equal to 3999";
    return;
  }

  const romanNumeral = toRoman(value);

  result.innerText = romanNumeral;
};

convertButton.addEventListener("click", convert);
