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
    timer;
//Hide Minus Poison Button when Poison counters = 0
function hidePoisDown(){
    if ($("#poison").text() == 0){
        $("#POISdown").addClass("hidePminus");
    } else {
        $("#POISdown").removeClass("hidePminus");
    }
}
function addSubCounter(){
  //Stop the Timer for displaying how much HP or Poison is added
  clearTimeout(timer);
  var currentHpPois = $(current).text();
  //Add HP or Poison
  if (addOrSub == "+") {
    currentHpPois = parseInt(currentHpPois) + 1 ;
  //Minus HP or Poison
  } else if (addOrSub == "-"){
    currentHpPois = parseInt(currentHpPois) - 1 ;
  }
  $(current).text(currentHpPois);
  //increment the amount of HP or poinson added & write it to display
  display++;
  $(addRemove).text(addOrSub + display);
  //Start the timer for how much HP or Poison is added
  timer = setTimeout(function (){display = 0; $("#plusHP").text(""); $("#minusHP").text("");$("#plusPOIS").text("");$("#minusPOIS").text("");}, 500);
}
hidePoisDown();
$("input:button").click(function(){
//Add HP
  if ( $(this).is( "input#HPup" ) ) {
    current = "#hp";
    addRemove = "#plusHP";
    addOrSub = "+"
    addSubCounter();
  //Minus HP
  } else if ( $(this).is( "input#HPdown" ) ) {
    current = "#hp";
    addRemove = "#minusHP";
    addOrSub = "-";
    addSubCounter();
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
    addSubCounter();
    hidePoisDown();
    if ($("#poison").text() == 10) {
      alert("YOU BE DEAD FROM POISON SON!");
    }
    //Minus Poison
    } else if ( $(this).is( "input#POISdown" ) ) {
      current = "#poison";
      addRemove = "#minusPOIS";
      addOrSub = "-";
      addSubCounter();
      hidePoisDown();
    //Reset Poison
    } else if ( $(this).is( "input#POISreset") ) {
      $("#poison").text("0");
      hidePoisDown();
    }
});
});
