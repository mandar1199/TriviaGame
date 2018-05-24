//---Global Variables
//timer is set to 60 seconds
//countdown starts at 60 seconds, same as timer
var count = 60;

//keeping track of right, wrong, and unanswered questions
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;

//---Funtions
//beginnning game function
$(document).ready(function(){

    //start with hidden divs
	$("#game-content").hide();
	$("#end-content").hide();

	//set scroll
	window.scrollTo(0, 500);

    //when start button is clicked
    $("#startButton").on("click", function(){
        //show the game
        $("#game-content").show();
        //start timer
        startCountdown();
		return;
    });

    //countdown and show time left to the user
	function countdown(){
		count--;
        //show the count in the DOM
        $('#timer_number').html(count + " Seconds");
            //if user finishes before time is up and clicks done
			$("#done_button").on("click", function(){
            //stop the countdown and run the timeUp function
			count = 0; 
			return;
        });

           //if they go over in time
			if(count == -1){
                //collect the radio inputs
				timeUp();
                //hide the game div 
				$("#game-content").hide();
            }
    }

    //start the countdown with one second intervals 
	function startCountdown(){
        clearInterval(countdown);
        countdown = setInterval(decrement, 1000);
    }

    function decrement() {
        number--;
        $("#show-number").html("<h2>" + number + "</h2>");
            if (number === 0) {
            stop();
            alert("Time Up!");
            }
    }
  
    //run after the timer is up, tally answers
	function timeUp(){

        //check values of radio buttons
		var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		var Q5 = $('input:radio[name="q5"]:checked').val();
		var Q6 = $('input:radio[name="q6"]:checked').val();

        //correct answers to question
		if(Q1 == undefined){
			unansweredCount++;
		}
		else if(Q1 == "jason"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q2 == undefined){
			unansweredCount++;
		}
		else if(Q2 == "hercules"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q3 == undefined){
			unansweredCount++;
		}
		else if(Q3 == "apollo&artemis"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q4 == undefined){
			unansweredCount++;
		}
		else if(Q4 == "dionysus"){
			correctCount++;
		}
		else{
			wrongCount++;
        }
        
		if(Q5 == undefined){
			unansweredCount++;
		}
		else if(Q5 == "cerberus"){
			correctCount++;
		}
		else{
			wrongCount++;
        }
        
		if(Q6 == undefined){
			unansweredCount++;
		}
		else if(Q6 == "persephone"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

        //after questions are answered, display the score results
		$('#correct-answers').html(correctCount);
		$('#wrong-answers').html(wrongCount);
		$('#unanswered').html(unansweredCount);

        //show scores page
		$("#end-content").show();

        //set scroll 
		window.scrollTo(0, 550);
    }
});