var currentTime = new Date();
var day = currentTime.getDay();
let week = "";

switch (day) {
  case 0:
    week = "Domingo";
  case 1:
    week = "Segunda-feira";
    break;
  case 2:
    week = "Terça-feira";
  case 3:
    week = "Quarta-feira";
  case 4:
    week = "Quinta-feira";
  case 5:
    week = "Sexta-feira";
  case 6:
    week = "Sabado";
}

var displayHours = document.getElementById("displayHours");
var displayMinutes = document.getElementById("displayMinutes");
var displayDay = document.getElementById("displayDay");

displayHours.innerHTML = currentTime.getHours() + " :";
displayMinutes.innerHTML = currentTime.getMinutes();


displayDay.innerHTML = week
