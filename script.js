const input = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("output");

button.addEventListener("click", function() {
  const number = input.value;
  if (number === "") {
    output.innerText = "Please enter a valid number";
  } else if (Number(number) < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (Number(number) >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
  } else {
    output.innerText = convertToRoman(Number(number));
  }
});

function convertToRoman(num) {
  const romanNumerals = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
  ];

  let roman = "";
  for (let [value, numeral] of romanNumerals) {
    while (num >= value) {
      roman += numeral;
      num -= value;
    }
  }
  return roman;
}