//MTG Life(HP) Counter v1.21 - By MyrddinCROW, HP starts at 20, + or - adds or subtracts life from your total
//Poison Starts at 0 counters, at 10 you be dead son!
//----DEFINE ALL THE FUNCTIONS!!-------
//-------Life(HP) Counter-------------------
function lifeCounter(){
//Add HP
var displayUP = 0;
var timer = 1000;

document.getElementById("HPup").onclick = function (){
  var currentHP = document.getElementById("hp").innerHTML;
  currentHP = parseFloat(currentHP);
  currentHP++;
  document.getElementById("hp").innerHTML = currentHP;
  displayUP++;
  document.getElementById("plusHP").innerHTML = "+" + displayUP;
  timer = 1000;
  setTimeout(function (){displayUP = 0; document.getElementById("plusHP").innerHTML = "+" + displayUP;}, timer);
};
//Minus HP
document.getElementById("HPdown").onclick = function () {
  var currentHP = document.getElementById("hp").innerHTML;
  currentHP = parseFloat(currentHP);
  currentHP--;
  document.getElementById("hp").innerHTML = currentHP;
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
