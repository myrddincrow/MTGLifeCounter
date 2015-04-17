//MTG Life(HP) Counter v1.32 - By MyrddinCROW, HP starts at 20, + or - adds or subtracts life from your total
//Poison Starts at 0 counters, at 10 you be dead son!
//----DEFINE ALL THE FUNCTIONS!!-------
//-------Life(HP) Counter-------------------
function lifeCounter(){
//Add HP
//Vars for Displaying How much HP/Poison was added or subtracted
var displayHpUp = 0,
    displayHpDown = 0,
    displayPoisUp = 0,
    displayPoisDown = 0,
    timerHpUp,
    timerHpDown,
    timerPoisUp,
    timerPoisDown;
//Hide Minus Poison button at start
hidePoisDown();
document.getElementById("HPup").onclick = function (){
  //Stop the Timer for displaying how much HP is added
  clearTimeout(timerHpUp);
  var currentHp = document.getElementById("hp").innerHTML;
  currentHp = parseInt(currentHp);
  currentHp++;
  document.getElementById("hp").innerHTML = currentHp;
  //increment the amount of HP added & write it to display
  displayHpUp++;
  document.getElementById("plusHP").innerHTML = "+" + displayHpUp;
  //Start the timer for how much HP is added
  timerHpUp = setTimeout(function (){displayHpUp = 0; document.getElementById("plusHP").innerHTML = "";}, 1000);
};

//Minus HP
document.getElementById("HPdown").onclick = function () {
  //Stop the Timer for displaying how much HP is added
  clearTimeout(timerHpDown);
  var currentHp = document.getElementById("hp").innerHTML;
  currentHp = parseInt(currentHp);
  currentHp--;
  document.getElementById("hp").innerHTML = currentHp;
  //increment the amount of HP removed & write it to display
  displayHpDown++;
  document.getElementById("minusHP").innerHTML = "-" + displayHpDown;
  //Start the timer for how much HP is removed
  timerHpDown = setTimeout(function (){displayHpDown = 0; document.getElementById("minusHP").innerHTML = "";}, 1000);
  //Let player know if they are dead
  if (currentHp == 0) {
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
  //Stop the Timer for displaying how much Poison is added
  clearTimeout(timerPoisUp);
  currentPois = document.getElementById("poison").innerHTML;
  currentPois = parseInt(currentPois);
  currentPois++;
  document.getElementById("poison").innerHTML = currentPois;
  //increment the amount of Poison added & write it to display
  displayPoisUp++;
  document.getElementById("plusPOIS").innerHTML = "+" + displayPoisUp;
  //Start the timer for how much Poison is added
  timerPoisUp = setTimeout(function (){displayPoisUp = 0; document.getElementById("plusPOIS").innerHTML = "";}, 1000);
  //Check if Minus Poison should be hidden
  hidePoisDown();
  //Let Plater know if they have died
  if (currentPois == 10) {
    alert("YOU BE DEAD FROM POISON SON!");
  }
};

//Minus Poison Counters
document.getElementById("POISdown").onclick = function (){
  //Stop the Timer for displaying how much Poison is added
  clearTimeout(timerPoisDown);
  currentPois = document.getElementById("poison").innerHTML;
  currentPois = parseInt(currentPois);
  currentPois--;
  document.getElementById("poison").innerHTML = currentPois;
  //increment the amount of Poison added & write it to display
  displayPoisDown++;
  document.getElementById("minusPOIS").innerHTML = "-" + displayPoisDown;
  //Start the timer for how much Poison is added
  timerPoisDown = setTimeout(function (){displayPoisDown = 0; document.getElementById("minusPOIS").innerHTML = "";}, 1000);
  //Check if Minus Poison should be hidden
  hidePoisDown();
};

//Reset Poison Counters
document.getElementById("POISreset").onclick = function (){
  document.getElementById("poison").innerHTML = 0;
  hidePoisDown();
};
//Hide Minus Poison Button when Poison counters = 0
function hidePoisDown(){
if (document.getElementById("poison").innerHTML == 0){
  document.getElementById("POISdown").style.display = "none";
} else {
  document.getElementById("POISdown").style.display = "";
}
}
}
//Ready ALL the Functions onload!
window.onload = function() {lifeCounter()};
