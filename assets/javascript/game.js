$(document).ready(function() {
  var wins = 0;
  var losses = 0;
  var round = 0;
function startGame() {
  round++
 
  
  var counter = 0;
  var targetNumber = Math.ceil(Math.random()*101)+19
  console.log(targetNumber)
  $("#number-to-guess").html('Power to Generate :'+ targetNumber);
  $("#powerGenerated").html('Power Generated :'+ counter);
  $("#win-loss").html('Wins :'+wins+ " Losses: "+ losses);
  var crystalValue = []
  for (let i = 0; i < 4; i++) {
    crystalValue[i] = Math.floor(Math.random()*12+1)
  } 
    for (var i = 0; i < crystalValue.length; i++) {
      var imageCrystal = $("<img>");
      imageCrystal.addClass("crystal-image")
      imageCrystal.attr("src", "assets/images/crystal"+i+".png")
      imageCrystal.attr("data-crystalvalue", crystalValue[i]);
      $("#crystals").append(imageCrystal);  
    }
    $(".crystal-image").on("click", function() {
    var crystalVal = ($(this).attr("data-crystalvalue"));
    crystalVal = parseInt(crystalVal);
    counter += crystalVal;
    $("#powerGenerated").html('Power Generated :'+ counter);
    alert("New score: " + counter);

    if (counter === targetNumber) {
      wins++
      
    }
  
    else if (counter >= targetNumber) {
      losses++
      
    }
    $("#win-loss").html('Wins :'+wins+ " Losses: "+ losses);
  
  });
  

  }
  startGame();
  // reset function needs work ideally break start game into various functions ie: set-up and actually playing the game 
  //then use setup as a base code for the restart function.



})

