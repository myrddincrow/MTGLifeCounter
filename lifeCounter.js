//MTG Life(HP) Counter v1.32 - By MyrddinCROW, HP starts at 20, + or - adds or subtracts life from your total
//Poison Starts at 0 counters, at 10 you be dead son!
//----DEFINE ALL THE FUNCTIONS!!-------
//-------Life(HP) Counter-------------------
$( document ).ready(function() {
//Vars for Displaying How much HP/Poison was added or subtracted
var display = 0,
    current,
    addRemove,
    addOrSub,
    timerHpUp,
    timerHpDown,
    timerPoisUp,
    timerPoisDown;
//Hide Minus Poison Button when Poison counters = 0
function hidePoisDown(){
    if ($("#poison").text() == 0){
        $("#POISdown").addClass("hidePminus");
    } else {
        $("#POISdown").removeClass("hidePminus");
    }
}
function addSubCounter(){
  var currentHpPois = $(current).text();
  if (addOrSub == "+") {
  currentHpPois = parseInt(currentHpPois) + 1 ;
} else if (addOrSub == "-"){
currentHpPois = parseInt(currentHpPois) - 1 ;
}
  $(current).text(currentHpPois);
  //increment the amount of HP added & write it to display
  display++;
  $(addRemove).text(addOrSub + display);
}
hidePoisDown();
$("input:button").click(function(){
//Add HP
  if ( $(this).is( "input#HPup" ) ) {
    current = "#hp";
    addRemove = "#plusHP";
    addOrSub = "+"
    //Stop the Timer for displaying how much HP is added
    clearTimeout(timerHpUp);
    //Add or Subtract the Counter
    addSubCounter();
    //Start the timer for how much HP is added
    timerHpUp = setTimeout(function (){display = 0; $(addRemove).text("");}, 1000);
  //Minus HP
  } else if ( $(this).is( "input#HPdown" ) ) {
    current = "#hp";
    addRemove = "#minusHP";
    addOrSub = "-";
    //Stop the Timer for displaying how much HP is added
    clearTimeout(timerHpDown);
    //Add or Subtract the Counter
    addSubCounter();
    //Start the timer for how much HP is added
    timerHpDown = setTimeout(function (){display = 0; $(addRemove).text("");}, 1000);
    if ($("#hp").text() == 0) {
      alert("YOU BE DEAD SON!");
    }
    //Reset HP
  } else if ( $(this).is( "input#HPreset") ) {
    $("#hp").text("20");
    //Add Poison
  } else if ( $(this).is( "input#POISup" ) ) {
    current = "#poison";
    addRemove = "#plusPOIS";
    addOrSub = "+";
    //Stop the Timer for displaying how much HP is added
    clearTimeout(timerPoisUp);
    //Add or Subtract the Counter
    addSubCounter();
    //Start the timer for how much HP is added
    timerPoisUp = setTimeout(function (){display = 0; $(addRemove).text("");}, 1000);
    hidePoisDown();
    if ($("#poison").text() == 10) {
      alert("YOU BE DEAD FROM POISON SON!");
    }
    } else if ( $(this).is( "input#POISdown" ) ) {
      current = "#poison";
      addRemove = "#minusPOIS";
      addOrSub = "-";
      //Stop the Timer for displaying how much HP is added
      clearTimeout(timerPoisDown);
      //Add or Subtract the Counter
      addSubCounter();
      //Start the timer for how much HP is added
      timerPoisDown = setTimeout(function (){display = 0; $(addRemove).text("");}, 1000);
      hidePoisDown();
    } else if ( $(this).is( "input#POISreset") ) {
      $("#poison").text("0");
      hidePoisDown();
    }
});
});
