//$(document).ready(function() {
    //initial variables
    var intervalId;
    var gameTimer = 100;
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
            question: "1. Fin met Rey while escaping The First Order on which somewhat-familiar desert planet?",
            answers: ["Tatooine", "Jakku", "Arrakis", "Barstow"],
            correct: "Jakku"
        },
        q2 = {
            question: "2. Rey, Fin, and BB-8 escaped The First Order with the help of which iconic space ship from the original Star Wars trilogy?",
            answers: ["The Millennium Falcon", "The Millennial Faction", "The Milliliter Fraction", "The Milli-Vanilli"],
            correct: "The Millennium Falcon"
        },
        q3 = {
            question: "3. Who was Kylo Ren’s biggest hero?",
            answers: ["Luke Skywalker", "Darth Vader", "Han Solo", "Jabba the Hutt"],
            correct: "Darth Vader"
        },
        q4 = {
            question: "4. Kylo Ren was son of Han Solo and Princess Leia before he turned to the Dark Side of The Force. What was his given name?",
            answers: ["Bart", "Bill", "Ben", "Bob"],
            correct: "Ben"
        },
        q5 = {
            question: "5. What was the name of the mysterious Supreme Leader of The First Order who seduced Kylo Ren to the Dark Side of The Force?",
            answers: ["Smaug", "Smoke", "Snaug", "Snoke"],
            correct: "Snoke"
        },
        q6 = {
            question: "6. The droid named BB-8 carried with him a map to which iconic Star Wars character?",
            answers: ["Luke Skywalker", "Princess Leia", "Han Solo", "Jar Jar Binks"],
            correct: "Luke Skywalker"
        },
        q7 = {
            question: "7. Rey found Luke Skywalker on a remote island inhabited by these furry penguin-hamster creatures. What are…",
            answers: ["Borg?", "Pork?", "Porg?", "Tribbles?"],
            correct: "Porg?"
        },
        q8 = {
            question: "8. Rey discovered much more after finding Luke Skywalker. She discovered that her parents were who?",
            answers: ["Han and Leia", "Luke and Mon Mothma", "Luke and Lando", "Nobody in particular"],
            correct: "Nobody in particular"
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
        gameOver();
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
        content.append("<h4>Prove your knowledge of the Star Wars sequel trilogy</h4>");
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
            newDiv.attr("id", "question");
            
            
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
        checkAnswers();
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