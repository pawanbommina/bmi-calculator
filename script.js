function calculateBMI() {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  if (height === "" || weight === "") {
    alert("Please enter valid values");
    return;
  }

  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  document.getElementById("bmi-value").innerText = `Your BMI: ${bmi}`;

  let status = "";

  if (bmi < 18.5) {
    status = "Underweight";
  } else if (bmi < 25) {
    status = "Normal";
  } else if (bmi < 30) {
    status = "Overweight";
  } else {
    status = "Obese";
  }

  document.getElementById("bmi-status").innerText = status;
}
