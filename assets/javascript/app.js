// Page timer is set to 60 seconds
//var limit = 60*1000;


// Countdown also starts at 60 seconds (same at the limit of the page timer)
var count = 60;


// Count of Right, Wrong, and unanswered Qustions
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;



// ------------------------ Game Functions are below ------------------------
$(document).ready(function(){

	// TimeOut page after 1 minute
	//setTimeout(timeUp, limit); <--- worked around it with a hack (count = 0 manaul set)



	// Intialize the game with hidden Divs
	$("#game-content").hide();
	$("#end-content").hide();

	

	// Set Scroll position so it looks good
	window.scrollTo(0, 500);




	$("#startButton").on("click", function(){

		// Hide the start Div from the user
		$("#start-content").hide();


		// Show the Game Div
		$("#game-content").show();

		startCountdown();
		return;

	});



	// Counts down and displays the time to the user
	function countdown(){

		// Decrement the counter, down from 60 seconds
		count--;

		// Display the count to the user in the DOM
    	$('#timer_number').html(count + " Seconds");

    	

    	// ----------- Handle Cases for Time ar 0 Seconds -----------
			// User finishes before time is up and clicks done
			$("#done_button").on("click", function(){

			// Stop the countdown and run the timeUp function
			//clearInterval(startCountdown);
			count = 0; // <---- Needed a hack since I couldn't get the clearInterval function to work... It's been a long week :/
			return;

			});


			// Finish the game after the timer reaches 0
			if(count == -1){

				// Collect the radio inputs
				timeUp();

				// Hide the game Div from the user
				$("#mid_game_container").hide();

			}


	}


	// Show the countdown, increment is 1 second
	function startCountdown(){

		setInterval(countdown, 1000);

	}


	// Function to be run after the timer is up
	function timeUp(){


		// Checked values of Radio Buttons
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





		// After answers are validated, display the score results
		$('#correct-answers').html(correctCount);
		$('#wrong-answers').html(wrongCount);
		$('#unanswered').html(unansweredCount);


		// Show the completed Score Div
		$("#end-content").show();


		// Set Scroll position so it looks good
		window.scrollTo(0, 550);

	}

});