//$(document).ready(function() {
    //initial variables
    var intervalId;
    var gameTimer = 120;
    var gameRunning = false;
    var timeBoard = $("#timer");
    var question = $("#question");
    var answer = $("#answer");
    var content = $("#content");
    var correct = 0;
    var incorrect = 0;
    var unanswered = 8;


    var allQuestions = [

        q1 = {
            question: "Question one?",
            answers: ["a1", "a2", "a3", "a4"],
            correct: "a2"
        },
        q2 = {
            question: "Question two?",
            answers: ["a1", "a2", "a3", "a4"],
            correct: "a1"
        },
        q3 = {
            question: "Question three?",
            answers: ["a1", "a2", "a3", "a4"],
            correct: "a4"
        },
        q4 = {
            question: "Question four?",
            answers: ["a1", "a2", "a3", "a4"],
            correct: "a3"
        },
        q5 = {
            question: "Question five?",
            answers: ["a1", "a2", "a3", "a4"],
            correct: "a2"
        },
        q6 = {
            question: "Question six?",
            answers: ["a1", "a2", "a3", "a4"],
            correct: "a4"
        },
        q7 = {
            question: "Question seven?",
            answers: ["a1", "a2", "a3", "a4"],
            correct: "a1"
        },
        q8 = {
            question: "Question eight?",
            answers: ["a1", "a2", "a3", "a4"],
            correct: "a3"
        }
    ];


    // timer function
    function timer() {
    
        gameRunning = true;
        intervalId = setInterval(decrement, 1000);
    
    }
    function decrement() {
        gameTimer--;
       // console.log(gameTimer);
       timeBoard.html("Time remaining: " + gameTimer);        
       if (gameTimer === 0) {
        stop();
    }

    }
    
    function stop() {
        clearInterval(intervalId);
        gameRunning = false;
    }
    // function that generates content on page

    //     start button 
   startButton();

    function startButton() {
        timeBoard.html("Time remaining: " + gameTimer);
        content.html("<button id='start'>Start Game</button>");
        $("#start").on("click", questions);
    }

    function tester() {
        timer();
     
    }

    //     questions and answers

    //8 questions with 4 answer options 

  function questions () {      
    timer();
    content.html("");

        for (var k = 0; k < allQuestions.length; k++) {
            
            var newDiv = $("<div>");
            var newQ = $("<h3>");
            var newA = $("<h4>");
            newDiv.attr("id", "q" + k);
            newQ.attr("id", "question" + k);
            newA.attr("id", "answer" + k);
            
            
            content.append(newDiv);
            newDiv.append(newQ);
            newQ.text(allQuestions[k].question);
            newDiv.append(newA);

            for (var i=0; i < allQuestions[k].answers.length; i++) {
                var options = allQuestions[k].answers[i]; 
                var select = $("<input>")
                select.attr({
                    type: "radio",
                    name: "q" + k,
                    id: "a" + i,
                    value: options
                });
                newA.append(select, " " + options + " ");
  
             
              }
                   
        }
    
        submitButton();
    }

  
    //     submit button
    function submitButton() {
        content.append("<button type='submit' id='submit' value='get value'>Submit</button>");
        $("#submit").on("click", function() {
        checkAnswers();
        gameOver();
        });
    }

    function testAnswers() {
        var ua0 = $("input[name='q0']:checked").val();
            if (ua0) {
                unanswered--;
                if (ua0 === allQuestions[0].correct) {
                    correct++;
                } else {
                    incorrect++;
                }
            }
    }

    function checkAnswers() {
        for (var k = 0; k < allQuestions.length; k++) {
            var userAnswer = $("input[name='q" + k + "']:checked").val();
            if (userAnswer) {
                unanswered--;
                if (userAnswer === allQuestions[k].correct) {
                    correct++;
                } else {
                    incorrect++;
                }
            } 
        }
    }

    //     game over content 

    function gameOver() {
        stop();
        content.html("");
        var newDiv = $("<div>");
        var newCorrect = $("<h3>");
        var newWrong = $("<h3>")
        var newUnanswered = $("<h3>");
        content.append(newDiv);
        newDiv.append(newCorrect);
        newDiv.append(newWrong);
        newDiv.append(newUnanswered);
        newCorrect.text("Total Correct: " + correct);
        newWrong.text("Total Wrong: " + incorrect);
        newUnanswered.text("Total Unanswered: " + unanswered);
    }


//})