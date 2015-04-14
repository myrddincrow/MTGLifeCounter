//MTG Life(HP) Counter v1.21 - By MyrddinCROW, HP starts at 20, + or - adds or subtracts life from your total
//Poison Starts at 0 counters, at 10 you be dead son!
//----DEFINE ALL THE FUNCTIONS!!-------
//-------Life(HP) Counter-------------------
//Add HP
function addHp(){
  var currentHP = document.getElementById("hp").innerHTML;
  currentHP = parseFloat(currentHP);
  currentHP = currentHP + 1;
  document.getElementById("hp").innerHTML = currentHP;
}
//Minus HP
function minusHp(){
  var currentHP = document.getElementById("hp").innerHTML;
  currentHP = parseFloat(currentHP);
  currentHP = currentHP - 1;
  document.getElementById("hp").innerHTML = currentHP;
  if (currentHP == 0) {
    alert("YOU BE DEAD SON!");
  }
}
//Reset HP
function resetHp(){
  document.getElementById("hp").innerHTML = 20;
}
//-----------Poison Counter--------------
//Add Poison Counters
function addPois(){
  var currentPOIS = document.getElementById("poison").innerHTML;
  currentPOIS = parseFloat(currentPOIS);
  currentPOIS = currentPOIS + 1;
  document.getElementById("poison").innerHTML = currentPOIS;
  if (currentPOIS == 10) {
    alert("YOU BE DEAD SON!");
  }
}
//Minus Poison Counters
function minusPois(){
  var currentPOIS = document.getElementById("poison").innerHTML;
  currentPOIS = parseFloat(currentPOIS);
  currentPOIS = currentPOIS - 1;
  document.getElementById("poison").innerHTML = currentPOIS;
}
//Reset Poison Counters
function resetPois(){
  document.getElementById("poison").innerHTML = 0;
}
//------ CALL ALL THE FUNCTIONS! --------
//Run Add HP function when UP+ is clicked of Minus HP function when DOWN- is clicked
document.getElementById("HPup").onclick = function () {addHp()};
document.getElementById("HPdown").onclick = function () {minusHp()};
//Reset HP on click
document.getElementById("HPreset").onclick = function () {resetHp()};
//Run Add Poison Counter function when UP+ is clicked of Minus Poison function when DOWN- is clicked
document.getElementById("POISup").onclick = function () {addPois()};
document.getElementById("POISdown").onclick = function () {minusPois()};
//Reset Poison Counters on click
document.getElementById("POISreset").onclick = function () {resetPois()};
