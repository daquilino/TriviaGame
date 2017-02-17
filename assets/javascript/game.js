/*  Douglas Aquilino       February 18, 2017   */
/*  RCB - "Trivia Game"    Homework #5         */
/*                game.js                      */

/*  	TO DO's
		
		instructions
		colors - fonts - 
		correct, incorrect animations?
*/

// Global Variable Declarations

	// Array of flag objects
	var flags= [];	

	//Holds current flag object for question.
	var currentFlag = 0;

	// Keeps track of correct answers
	var correct = 0;

	// Keeps track of incorrect answers
	var incorrect = 0;

	// Keeps track of missed answers
	var missed = 0;

	//Assigns the number of questions to be asked each game.
	var numQuestions = 10;

	//Stores the Id for setInterval()
	var intervalId = 0;


// flag object constructor
	function flag(image, country, motto)
	{
	// ===== flag object properties =========	
		//private
		const IMAGE = image;
		const COUNTRY = country;
		
	// ==== flag object methods =============

		//=======================================

		//returns objects IMAGE property value
		this.getImage = function()
		{
			return IMAGE;
		}//END getImage
		
		//=======================================

		//returns objects COUNTRY property value
		this.getCountry = function()
		{
			return COUNTRY;
		}//END getCountry

		//=======================================

		
	};// END flag object constructor


	//Flag objects declerations.	
	//               flag(image       , country)
	var flag1  = new flag("flag1.png" ,"Australia");
	var flag2  = new flag("flag2.png" ,"Belgium");
	var flag3  = new flag("flag3.png" ,"Canada");
	var flag4  = new flag("flag4.png" ,"China");
	var flag5  = new flag("flag5.png" ,"France");
	var flag6  = new flag("flag6.png" ,"Germany");
	var flag7  = new flag("flag7.png" ,"Ghana");
	var flag8  = new flag("flag8.png" ,"Greece");
	var flag9  = new flag("flag9.png" ,"India");
	var flag10 = new flag("flag10.png" ,"Italy");
	var flag11 = new flag("flag11.png" ,"Japan");
	var flag12 = new flag("flag12.png" ,"Macedonia");
	var flag13 = new flag("flag13.png" ,"Mexico");
	var flag14 = new flag("flag14.png" ,"Poland");
	var flag15 = new flag("flag15.png" ,"Russia");
	var flag16 = new flag("flag16.png" ,"Saudi Arabia");
	var flag17 = new flag("flag17.png" ,"South Korea");
	var flag18 = new flag("flag18.png" ,"Thailand");
	var flag19 = new flag("flag19.png" ,"UK");
	var flag20 = new flag("flag20.png" ,"USA");
	
	
//================== document.ready ==============================
	
$(document).ready(function()
{
	//Event handler when #play button clicked
	$("#play").on("click" , function()
	{
		resetGame();
		
		//Changes #play button to "Play Again" and Hides it. 
		$("#play").html("Play Again").css("visibility","hidden");
		
		game();
		
	});//END $("#play").click

	//Event handler when answer is clicked.
	$(".answers").on("click" , clickedAnswer);

});//END $(document).ready


//===================== Global Functions ============================

//Returns a random flag object from flags.
//Then removes that flag object from flags array.
function randomFlag()
{
	var index = Math.floor(Math.random()* flags.length);

	var tempFlag = flags[index];
	
	//removes flags[index] (tempFlag) from flags.
	flags.splice(index, 1);

	return tempFlag;

}//END randomFlag()

//==========================================================

//Assigns flag objects to "flags" array.
function fillFlags()
{
	//Clears out "flags" array
	flags=[];
	
	//Assigns flag object
	for(var i = 1;i < 21; i++)  //change for # final flags
	{
		flags.push(window["flag" + i]); //window[] converts string to object
	}

}//END fillFlags


//==========================================================

//Resets variables and elements to initial state
function resetGame()
{
	//resets variables
	correct = 0;
	incorrect = 0;
	missed = 0;
	currentFlag = 0;
	numQuestions = 10;
	fillFlags(); //resets flags array

	//rests element visibilities
	$("#question-panel").css("visibility", "hidden");
	$("#results-panel").css("visibility", "hidden");

}//END resetGame

//===================================

//Recursive function containing main logic of game.
//Checks if any quesions left. If no, then displays results.
//If yes, calls getQuestion() and uses setInterval as 15s timer.
//Every 1000ms time decremented and displayed via jQuery.
//When 'time=0' clearInterval() is called, showAnswer() is
//called, question count is decremented and missed count is 
//incremented.
//Last setTimeout delays 4s then calls game();
function game()
{
	//Checks if questions remaining.
	if (numQuestions > 0)
	{	
		//Counter for setInterval/clearInterval
		var time = 15; //seconds

		$("#time").html(time);

		//$("#left").html(numQuestions - 1);   may not use 
	
		getQuestion();

		//runs code in function every 1s until "time = 0".
		intervalId = setInterval(function()
		{
			//decrements and displays time	
			time--;
			$("#time").html(time);
			
			//when time runs out clear interval
			if(time == 0)
			{	
				clearInterval(intervalId);
		
				showAnswer("TIMES UP!");

				numQuestions--;
					
				missed++;	
				
				//waits 4s then calls game()
				setTimeout(function()   
				{
					game();	
				
				}, 4000);//END setTimeout
								
			}//END if

		},1000);//END setInterval

	}//END if
	else  // if no more questions left.
	{
		showResults();
	}
			
}//END game
//===================================================

//Called when an answer is clicked.
//Checks if answer is correct or not.
//Displays proper messege.
function clickedAnswer()
{	
	//used to set messege
	var messege="";	

	clearInterval(intervalId);
	
	numQuestions--;

	//	code to check if answer is correct
	if ($(this).html() == currentFlag.getCountry())
	{
		messege = "CORRECT!";
		correct++;
	}
	else
	{
		messege = "WRONG!";
		incorrect++;
	}	
		
	showAnswer(messege);
		
	//waits 4s then calls game()
	setTimeout(function() 
	{	
		game();

	}, 4000);//END setTimeout

}//END clickedAnswer

//===========================================================

//Sets up random answer choices for question.
function populateAnswers()
{
	// Gets a random .answers <p>. Puts currentFlag country in it
	var x = Math.floor((Math.random()*4)+1);
	$("#a" + x).html(currentFlag.getCountry());	
	
	//Array to store already used countries	
	var usedIndexes=[]

	//Holds random index
	var tempRandIndex = 0;
			
	// Loops through numbers 1-4 used for .answers <p>s ids. 
	for (var i = 1; i < 5; i++)		
	{
		
		//If .answers <p> not already populated, populate it.
		if(i !=x)
		{						
			// gets a unique random index for flag object.		
			do
			{
				tempRandIndex = Math.floor(Math.random()*flags.length);
			}
			while(usedIndexes.indexOf(tempRandIndex) > -1);

			//pushes randomIndex to usedIndexes
			usedIndexes.push(tempRandIndex);
			
			//Displays country of random flag in .answers <p>
			//with id of "#a" + i
			$("#a" + i).html(flags[tempRandIndex].getCountry());		
		}

	}//END for
	
}//END populateAnswers

//================================================================

//Generates random question.
function getQuestion()
{
	$("#results-panel").css("visibility", "hidden");
	$("#question-panel").css("visibility", "visible");

	//Assigns currentFlag a random flag
	currentFlag = randomFlag();
	
	//Displays currentFlag
	$("#flag-image").attr("src","assets/images/flags/" + currentFlag.getImage());
	
	//Populates Answer choices.
	populateAnswers();
}

//=====================================================

//Sets html to results-panel to display correct answer.
function showAnswer(messege)
{
	var results = "<br>" +
				  "<p>" + messege + "</p>" + 
				  "<p>Answer: " + currentFlag.getCountry() + "</p>";

	$("#results-panel").html(results);
	$("#results-panel").css("visibility", "visible");
}//END showAnswer

//============================================================

//Sets html of #results-panel to display game results.
//Shows #play button.
function showResults()
{	
	var results = "<p>Correct: " + correct + "</p>" +
				  " <p>Incorrect: " + incorrect + "</p>" + 
				  " <p>Misses: " + missed + "</p>";

	$("#results-panel").html(results);
	$("#results-panel").css("visibility", "visible");
	
	$("#play").css("visibility","visible");
}//END showResults











