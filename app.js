let userName = prompt("Please enter your name", "name");

let userGender = prompt("Please enter your gender", "enter male or female");
let title;

if (userGender == "male") {
  title = "Mr.";
} else if (userGender == "female") {
  title = "Ms.";
} else {
  title = "Wrong gender entered";
}

let userAge = prompt("Please enter your age", "age");

if (userAge <= 0) {
  alert("Illogical age entered");
}

let confirmCondition = confirm("Do you want to skip the welcoming message");

if (confirmCondition == true) {
  // skip welcoming message
} else if (confirmCondition == false && userGender == "male") {
  alert("Hello " + title + userName);
} else if (confirmCondition == false && userGender == "female") {
  alert("Hello " + title + userName);
} else {
  alert("Hello " + userName);
}
console.log("Hello " + userName);

const answers = [];
// yes or no questions, so I'll use array to use it in switch statement
const questions = [];

questions[0] = prompt(
  "Do you exercise in the morning ?",
  "Enter: yes, y, no ,n"
);
questions[1] = prompt(
  "Do you complete all your daily tasks ?",
  "Enter: yes, y, no ,n"
);
questions[2] = prompt("Do you sleep enough hours ?", "Enter: yes, y, no ,n");

for (let i = 0; i < 3; i++) {
  switch (questions[i]) {
    case "yes":
    case "y":
    case "no":
    case "n":
      answers.push(questions[i]);
      break;

    default:
      answers.push("invalid");
  }
}

console.log("answers: " + answers);
// do NOT miss () after reverse function :)))))
console.log("answers after reverse: ", answers.reverse());

let qRate = prompt("How do you rate our app ?", "Enter: 0 - 5");
console.log("qRateInt is :", qRate);

/*
switch (true) {
  case qRate > 4:
    alert(" Thank you for rating our app ***** stars");
    break;

  case qRate == 4:
    alert(" Thank you for rating our app **** stars");
    break;

  case qRate == 3:
    alert(" Thank you for rating our app *** stars");
    break;

  case qRate == 2:
    alert(" Thank you for rating our app ** stars");
    break;

  case qRate == 1:
    alert(" Thank you for rating our app * stars");
    break;

  default:
    alert("We're sorry you didn't like our app");
}
*/

// Best practices use if statements instead

if (qRate > 4) {
  alert(" Thank you for rating our app ***** stars");
} else if (qRate == 4) {
  alert(" Thank you for rating our app **** stars");
} else if (qRate == 3) {
  alert(" Thank you for rating our app *** stars");
} else if (qRate == 2) {
  alert(" Thank you for rating our app ** stars");
} else if (qRate == 1) {
  alert(" Thank you for rating our app * stars");
} else {
  alert("We're sorry you didn't like our app");
}
