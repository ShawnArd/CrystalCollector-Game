$(document).ready(function() {
  var wins = 0;
  var losses = 0;
  var counter = 0;
  for (var i = 0; i < 4; i++){
    
  }

  //almost working but on each "reset"/startover the attribute is increasing with 
  //each run
 
  function setup() {
    counter = 0
    var targetNumber = Math.ceil(Math.random()*101)+19
    console.log(targetNumber)
    $("#number-to-guess").html('Power to Generate :'+ targetNumber);
    $("#powerGenerated").html('Power Generated :'+ counter);
    $("#win-loss").html('Wins :'+wins+ " Losses: "+ losses);
    
   
      
     var crystalValue = []
      for (var i = 0; i < 4; i++) {
        
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image")
        imageCrystal.attr("src", "assets/images/crystal"+i+".png")
        imageCrystal.attr("data-crystalvalue", Math.floor(Math.random()*12+1));
        $("#crystals").append(imageCrystal);  
      }
    

  }


  function startGame() {
    
  var targetNumber = Math.ceil(Math.random()*101)+19
  console.log(targetNumber)
  $("#number-to-guess").html('Power to Generate :'+ targetNumber);
  $("#powerGenerated").html('Power Generated :'+ counter);
  $("#win-loss").html('Wins :'+wins+ " Losses: "+ losses);
  
 
    
   var crystalValue = [0,0,0,0]
    for (var i = 0; i < 4; i++) {
      
      var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image")
        imageCrystal.attr("src", "assets/images/crystal"+i+".png")
        imageCrystal.attr("data-crystalvalue", Math.floor(Math.random()*12+1));
        
    
    }
    $(".crystal-image").on("click", function() {
    var crystalVal = ($(this).attr("data-crystalvalue"));
    crystalVal = parseInt(crystalVal);
    counter += crystalVal;
    $("#powerGenerated").html('Power Generated :'+ counter);
    

    if (counter === targetNumber) {
      wins++
      alert("you Win! Click to play again!")
      counter = 0
       startGame();
      // counter = 0;
      // targetNumber = Math.ceil(Math.random()*101)+19;
      // for (var i = 0; i < 4; i++) {
      //   crystalValue[i] = Math.floor(Math.random()*12+1)
      
      
     
      
    }
  
    else if (counter >= targetNumber) {
       losses++
       alert("you lose! Click to play again!")
       counter = 0
       startGame();
      // counter = 0;
      // targetNumber = Math.ceil(Math.random()*101)+19;
      // for (var i = 0; i < 4; i++) {
      //   crystalValue[i] = Math.floor(Math.random()*12+1)
      // }
      
    }
    $("#win-loss").html('Wins :'+wins+ " Losses: "+ losses);
  
  });
  }
  setup()
  startGame();
  

  
  // reset function needs work ideally break start game into various functions ie: set-up and actually playing the game 
  //then use setup as a base code for the restart function.



})

