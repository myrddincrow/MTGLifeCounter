//MTG Life(HP) Counter v1.2 - By MyrddinCROW, HP starts at 20, + or - adds or subtracts life from your total
//Poison Starts at 0 counters, at 10 you be dead son!

//-------Life(HP) Counter-------------------
//Add HP
function addHp(){
  var currentHP = document.getElementById("hp").innerHTML;
  currentHP = parseFloat(currentHP);
  var hpUP = currentHP + 1;
  document.getElementById("hp").innerHTML = hpUP;
}
//Minus HP
function minusHp(){
  var currentHP = document.getElementById("hp").innerHTML;
  currentHP = parseFloat(currentHP);
  var hpDOWN = currentHP - 1;
  document.getElementById("hp").innerHTML = hpDOWN;
  if (hpDOWN == 0) {
    alert("YOU BE DEAD SON!");
  }
}
//Reset HP
function resetHp(){
  var currentHP = document.getElementById("hp").innerHTML;
  document.getElementById("hp").innerHTML = 20;
}
//-----------Poison Counter--------------
//Add Poison Counters
function addPois(){
  var currentPOIS = document.getElementById("poison").innerHTML;
  currentPOIS = parseFloat(currentPOIS);
  var poisUP = currentPOIS + 1;
  document.getElementById("poison").innerHTML = poisUP;
  if (poisUP == 10) {
    alert("YOU BE DEAD SON!");
  }
}
//Minus Poison Counters
function minusPois(){
  var currentPOIS = document.getElementById("poison").innerHTML;
  currentPOIS = parseFloat(currentPOIS);
  var poisDOWN = currentPOIS - 1;
  document.getElementById("poison").innerHTML = poisDOWN;
}
//Reset Poison Counters
function resetPois(){
  var currentHP = document.getElementById("poison").innerHTML;
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
