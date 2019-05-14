// Homework 5 JQuery Trivia Game with Timers

$(document).ready(function() {

    // Create array of questions, answers, and trivia
    var questions = [
        {
          question: "Who is the winningest coach in MSU history?",
          choices: ["Jud Heathcote", "Phil Jackson", "Tom Izzo", "Red Auerbach", "Gus Ganakas"],
          answer: "Tom Izzo",
          trivia: "Tom Izzo has won 606 games as MSU head coach.  He has a .723 winning percentage."
        }, 
        {
          question: "How many national championships has MSU won?",
          choices: ["Zero", "One", "Two", "Five", "Ten"],
          answer: "Two",
          trivia: "MSU won national championships in 1979 and 2000"
        }, 
        {
          question: "Who is MSU's all time leading scorer?",
          choices: ["Shawn Respert", "Magic Johnson", "Scott Skiles", "Draymond Green", "Steve Smith"],
          answer: "Shawn Respert",
          trivia: "Between 1991 and 1995, Respert scored 2531 points.  This is 2nd best all time in the Big Ten."
        }, 
        {
          question: "How many Big Ten regular season titles has MSU won?",
          choices: ["Five", "Thirteen", "Nine", "Fifteen", "Twenty"],
          answer: "Fifteen",
          trivia: "Purdue has the most regular season championships with 24"
        }, 
        {
          question: "How many Final Fours has MSU been to?",
          choices: ["Four", "Six", "Sixteen", "Eight", "Ten"],
          answer: "Ten",
          trivia: "MSU's ten Final Four appearances is tied with Ohio State for most in the B10."
        }];
    
    // Create game variables
    var correctGuesses = 0;
    var incorrectGuesses = 0;
    var counter = 0;
    var timer = 11;

    // Reset timer
    function resetTimer() {
        timer = 11;
    }

    // Reset game
    function resetGame() {
        correctGuesses = 0;
        incorrectGuesses = 0;
        counter = 0;
        timer = 11;
    }

    // Timer function
    function countDown() {
        clock = setInterval(seconds, 1000);
        function seconds() {
            if (timer === 0) {
                clearInterval(clock);
                timeout();
                $("#timer div").empty();
            } else if (timer > 0) {
                timer--;
                $("#timer").html("<div class='col-md-12 text-center'><p>You have " + timer + " seconds left!</p></div>");
            }
        }
    }

    // Function for when user runs out of time
	function timeout() {
        $("#game").html("<div class='col-md-12 text-center'><p>Sorry! You ran out of time!</p><p>The answer was " + questions[counter].answer + "</p></div>");
        incorrectGuesses++;
        counter++;
        setTimeout(resetTimer,5000);
        setTimeout(question,5000);
    }
    
    // Function to create the question
    function question() {
        if (counter < questions.length) {
            $("#game").html(
                "<div class='col-md-12 text-center'><p>" + questions[counter].question + "</p><p><button type='button' class='btn2 btn-outline-success'>" + questions[counter].choices[0] + "</button></p><p><button type='button' class='btn2 btn-outline-success'>" + questions[counter].choices[1] + "</button></p><p><button type='button' class='btn2 btn-outline-success'>" + questions[counter].choices[2] + "</button></p><p><button type='button' class='btn2 btn-outline-success'>" + questions[counter].choices[3] + "</button></p><p><button type='button' class='btn2 btn-outline-success'>" + questions[counter].choices[4] + "</button></p></div>"
            );
            countDown();
        }
        else {
            $("#game").html("<div class='col-md-12 text-center'><img src='assets/images/msu-logo-transparent-7.png'><p>The final results are: </p><p>Correct answers: " + correctGuesses + "</p><p>Incorrect answers: " + incorrectGuesses + "</p>");
            $("#game").append("<div class='col-12 text-center'><button type='button' class='btn btn-primary' id='start'>RESTART</button></div>");
            resetGame();
            $("#start").on("click", question);
        }
    }
    
    // Start button
    $("#start").on("click", question);

    // Function to determine right or wrong answer
    $("#game").on("click", ".btn2", (function() {
        var guess = $(this).text();
        console.log(guess);
		if (guess === questions[counter].answer) {
            clearInterval(clock);
            setTimeout(resetTimer,5000);
            setTimeout(question,5000);
            $("#timer div").empty();
            $("#game").html("<div class='col-md-12 text-center'><p>Great job! " + questions[counter].answer + " was the correct answer.</p><p>" + questions[counter].trivia + "</div>");
            correctGuesses++;
            counter++;
		}
		else {
            clearInterval(clock);
            setTimeout(resetTimer,5000);
            setTimeout(question,5000);
            $("#timer div").empty();
			$("#game").html("<div class='col-md-12 text-center'><p>Sorry, that was incorrect. " + questions[counter].answer + " was the correct answer.</p><p>" + questions[counter].trivia + "<div>");
            incorrectGuesses++;
            counter++;
		}
	}));

});