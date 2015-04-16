//MTG Life(HP) Counter v1.21 - By MyrddinCROW, HP starts at 20, + or - adds or subtracts life from your total
//Poison Starts at 0 counters, at 10 you be dead son!
//----DEFINE ALL THE FUNCTIONS!!-------
//-------Life(HP) Counter-------------------
function lifeCounter(){
//Add HP

//Vars for Displaying How much HP/Poison was added or subtracted
var displayHPUP = 0;
var displayHPDOWN = 0;
var timerHPUP;
var timerHPDOWN;

document.getElementById("HPup").onclick = function (){
  //Stop the Timer for displaying how much HP is added
  clearTimeout(timerHPUP);
  var currentHP = document.getElementById("hp").innerHTML;
  currentHP = parseFloat(currentHP);
  currentHP++;
  document.getElementById("hp").innerHTML = currentHP;
  //increment the amount of HP added & write it to display
  displayHPUP++;
  document.getElementById("plusHP").innerHTML = "+" + displayHPUP;
  //Start the timer for how much HP is added
  timerHPUP = setTimeout(function (){displayHPUP = 0; document.getElementById("plusHP").innerHTML = "";}, 1000);
};

//Minus HP
document.getElementById("HPdown").onclick = function () {
  //Stop the Timer for displaying how much HP is added
  clearTimeout(timerHPDOWN);
  var currentHP = document.getElementById("hp").innerHTML;
  currentHP = parseFloat(currentHP);
  currentHP--;
  document.getElementById("hp").innerHTML = currentHP;
  //increment the amount of HP removed & write it to display
  displayHPDOWN++;
  document.getElementById("minusHP").innerHTML = "-" + displayHPDOWN;
  //Start the timer for how much HP is removed
  timerHPDOWN = setTimeout(function (){displayHPDOWN = 0; document.getElementById("minusHP").innerHTML = "";}, 1000);
  if (currentHP == 0) {
    alert("YOU BE DEAD SON!");
  }
};
//Reset HP
document.getElementById("HPreset").onclick = function (){
  document.getElementById("hp").innerHTML = 20;
};
//-----------Poison Counter--------------
//Add Poison Counters
document.getElementById("POISup").onclick = function () {
  var currentPOIS = document.getElementById("poison").innerHTML;
  currentPOIS = parseFloat(currentPOIS);
  currentPOIS++;
  document.getElementById("poison").innerHTML = currentPOIS;
  if (currentPOIS == 10) {
    alert("YOU BE DEAD FROM POISON SON!");
  }
};
//Minus Poison Counters
document.getElementById("POISdown").onclick = function (){
  var currentPOIS = document.getElementById("poison").innerHTML;
  currentPOIS = parseFloat(currentPOIS);
  currentPOIS--;
  document.getElementById("poison").innerHTML = currentPOIS;
};
//Reset Poison Counters
document.getElementById("POISreset").onclick = function (){
  document.getElementById("poison").innerHTML = 0;
};
}
//Ready ALL the Functions onload!
window.onload = function() {lifeCounter()};
