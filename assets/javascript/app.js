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
          choices: ["Shawn Respert", "Magic Johnson", "Scott Skiles", "Draymond Greenn", "Steve Smith"],
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
    var timer = 5;

    // Reset timer
    function resetTimer() {
        timer = 5;
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
        $("#game").html(
            "<div class='col-md-12 text-center'><p>" + questions[counter].question + "</p><p><button type='button' class='btn btn-outline-success'>" + questions[counter].choices[0] + "</button></p><p><button type='button' class='btn btn-outline-success'>" + questions[counter].choices[1] + "</button></p><p><button type='button' class='btn btn-outline-success'>" + questions[counter].choices[2] + "</button></p><p><button type='button' class='btn btn-outline-success'>" + questions[counter].choices[3] + "</button></p><p><button type='button' class='btn btn-outline-success'>" + questions[counter].choices[4] + "</button></p></div>"
        );
        countDown();
    }
    
    // Start button
    $("#start").on("click", question);

});