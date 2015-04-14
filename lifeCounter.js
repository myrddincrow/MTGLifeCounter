//MTG Life Counter, starts at 20, + or - adds or subtracts life from your total

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
}

//Reset HP
function resetHp(){
  var currentHP = document.getElementById("hp").innerHTML;
  document.getElementById("hp").innerHTML = 20;
}

//Run Add HP function when UP+ is clicked of Minus HP function when DOWN- is clicked
document.getElementById("up").onclick = function () {addHp()};
document.getElementById("down").onclick = function () {minusHp()};
//Reset HP on click
document.getElementById("reset").onclick = function () {resetHp()};
