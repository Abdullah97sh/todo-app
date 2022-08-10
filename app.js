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
