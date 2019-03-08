//$(document).ready(function() {
    //initial variables
    var intervalId;
    var gameTimer = 120;
    var gameRunning = false;
    var timeBoard = $("#timer");
    var question = $("#question");
    var answer = $("#answer");

    // timer function
    function timer() {
    
            intervalId = setInterval(decrement, 1000);
            gameRunning = true;
    
        if (gameTimer === 0) {
            clearInterval(intervalId);
            gameRunning = false;
        }
    }
    function decrement() {
        gameTimer--;
        console.log(gameTimer);
       timeBoard.text("Time remaining: " + gameTimer);        
    }
    
    // function that generates content on page

    //     start button 
   startButton();

    function startButton() {
        timer.html("<button id='start'>Start Game</button>");
        $("#start").on("click", tester);
    }

    function tester() {
        timer();
     
    }

    //     questions and answers

    //8 questions with 4 answer options 

  function questions () {
      question.html("");
      // timer();
      timeBoard.text("Time remaining: " + gameTimer);

        for (var k = 1; k < 9; k++) {
            console.log("this is a test" + k);
            
            var newDiv = $("<div>");
            var newQ = $("<h3>");
            var newA = $("<h4>");
            newDiv.attr("id", "q" + k);
            newQ.attr("id", "question" + k);
            newA.attr("id", "answer" + k);
            
            $("#content").append(newDiv);
            newDiv.append(newQ);
            newQ.text("Question " + k);
            
            newDiv.append(newA);
            for (var i=1; i < 5; i++) {
               newA.append("<input type='radio' name='q1'>" + i + " </input>");            
              }
                   
        }


    }

  
    //     submit button

    //     game over content 


//})