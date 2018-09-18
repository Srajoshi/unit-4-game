 var wins = 0;
 var losses = 0;
 var targetNum = 0;
 var userNum = 0;
 var purpleNum = 0;
 var greenNum = 0;
 var redNum = 0;
 var blueNum = 0;
 var crystal = "";
 var gameFlag = true;


 // generate target score
 // var max = 120;
 // var min = 19;
 function getRndInteger(min, max) {
   return randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

 };

 // getRndInteger(1,12);
 // console.log(randomNum);

 function reset() {

   targetNum = 0;
   userNum = 0;
   gameFlag = true;
   targetNum = getRndInteger(19, 120);
   purpleNum = getRndInteger(1, 12);
   greenNum = getRndInteger(1, 12);
   redNum = getRndInteger(1, 12);
   blueNum = getRndInteger(1, 12);

   $("#targetNum").html(targetNum);
   $("#message").text("");
   $("#userNum").empty();


 }

 reset();
 console.log("targetNum: " + targetNum);
 console.log("userNum: " + userNum);
 console.log("purpleNum: " + purpleNum);
 console.log("redNum: " + redNum);
 console.log("greenNum: " + greenNum);
 console.log("blueNum: " + blueNum);

 function endGame() {

   if (userNum === targetNum) {

     $("#message").text("You won!");
     wins = wins + 1;
     $("#wins").html(wins);

   }
   if (userNum > targetNum) {

     $("#message").text("You lost!");
     losses = losses + 1;
     $("#losses").html(losses);

   }

 }

//  if (gameFlag === false) {

//    endGame();
//    console.log(gameFlag);
//  }


 $("#purple").on("click", function () {
  
   if (gameFlag === true) {
     userNum = userNum + purpleNum;
     $("#userNum").html(userNum);
     if (userNum === targetNum || userNum > targetNum) {
       gameFlag = false;
       
     };

   };
  });
  

   $("#green").on("click", function () {
    
     if (gameFlag === true) {
       userNum = userNum + greenNum;
       
       $("#userNum").html(userNum);
       if (userNum === targetNum || userNum > targetNum) {
         gameFlag = false;
         
       }
     }

   });

   $("#red").on("click", function () {
     if (gameFlag === true) {
       userNum = userNum + redNum;
       
       $("#userNum").html(userNum);
       if (userNum === targetNum || userNum > targetNum) {
         gameFlag = false;
        
       }
     }

   });

   $("#blue").on("click", function () {

    if (gameFlag === true) {
     userNum = userNum + blueNum;
     
     $("#userNum").html(userNum);
     if (userNum === targetNum || userNum > targetNum) {
      gameFlag = false;
      
    }
  }

   });

   if (gameFlag === false) {

     endGame();
     console.log(gameFlag);
   }
 