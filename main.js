const studentForm = document.querySelector("form.student");
const traineeForm = document.querySelector("form.trainee");
const trainerForm = document.querySelector("form.trainer");
const hireForm = document.querySelector("form.hire");

const studentBtn = document.querySelector("label.student");
const traineeBtn = document.querySelector("label.trainee");
const trainerBtn = document.querySelector("label.trainer");
const hireBtn = document.querySelector("label.hire");

const studentText = document.querySelector(".student");
const traineeText = document.querySelector(".trainee");
const trainerText = document.querySelector(".trainer");
const hireText = document.querySelector(".hire");
console.log(traineeText);
traineeBtn.onclick = () => {
  traineeForm.style.marginLeft = "-500px";
  studentText.innerHTML = "Trainee Login";
};
trainerBtn.onclick = () => {
  trainerForm.style.marginLeft = "-500px";
  studentText.innerHTML = "Trainer Login";
};
hireBtn.onclick = () => {
  hireForm.style.marginLeft = "-500px";
  studentText.innerHTML = "Hire Login";
};
studentBtn.onclick = () => {
  studentForm.style.marginRight = "1500px";
};
console.log(studentForm);
