/*  Douglas Aquilino       February 18, 2017   */
/*  RCB - "Trivia Game"    Homework #5         */
/*                game.js                      */


/*	==============	TO DO   ========================
	get flags (maybe country pics)
	sort html (instructions, questions, answer/results divs)



	
====================== pseudo code ====================

	done 1.) show instructions with play button.
	
	2.) when Play button pressed it hides, shows question
	3.)  ---------- Question -----
		a.) getQuestion()
			randomly generates question:
				shows pic randomized answers.
		b.) If time runs out.
			missed++, display times Up. show answer. 
			call next question if questions left > 0 else display results.
				

		c.) If button clicked.
			Stop interval. checkAnswer.
				if correct wins++. "Correct"! show answer.
				if incorrect losses++. "Wrong"! show answer.
			call next question if questions left >0 else display results.

	4.) On results screen show "play again" button.
			runs resetGame(); starts again #3


			*FUNCTIONS*

			checkAnswer();
				checks $(this).HTML() with flags[index].getCountry.
				returns true or false.
			
			showResults()
				displays "play again" button. wins, losses, missed.

			showAnswer() //how to differentiate miss, win ,loss?
				displays answer in correct div.
			question()
				generates question. displays it.
			game() 
				main function runs rest of program.

====================================================================
					

*/


// Global Variable Declarations

// Array of flag objects
var flags= [];	

//Holds random index for flags array.
var currentFlag = 0;

// Keeps track of correct answers
var correct = 0;

// Keeps track of incorrect answers
var incorrect = 0;

// Keeps track of missed answers
var missed = 0;


//Remove Dont need anymore, 
//Array to keeps track of asked questions. As not to repeat.
var askedAlready = [];

//Assigns the number of questions to be asked each game.
var numQuestions = 10;

//Stores the Id for setInterval()
var intervalId = 0;

var winLoseMiss = "";



// flag object constructor
	function flag(image, country, motto)
	{
		// =============== flag object properties =================	
		//private
		const IMAGE = image;
		const COUNTRY = country;
		

		// =============== flag object methods ===================

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

		
	};// END flag

	//Flag objects declerations.	
	//flag(image, country, motto)
	var flag1 = new flag("flag1.png" ,"Australia");
	var flag2 = new flag("flag2.png" ,"Belgium");
	var flag3 = new flag("flag3.png" ,"Canada");
	var flag4 = new flag("flag4.png" ,"China");
	var flag5 = new flag("flag5.png" ,"France");
	var flag6 = new flag("flag6.png" ,"Germany");
	var flag7 = new flag("flag7.png" ,"Ghana");
	var flag8 = new flag("flag8.png" ,"Greece");
	var flag9 = new flag("flag9.png" ,"India");
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
	
	
	fillFlags();//test code remove
	
	$("#play").on("click" , function()
	{
		
		getQuestion(); //test code remove

		//$("#play").html("Play Again").css("visibility","hidden");
		//game(); 
		

					

	});//END $("#play").click

	


//============= pseudo code for timers =================
	/*
		
		function somefunction()
		{
			var time = 20;
			displayRandomQuestion();
			run setinterval for question time
			{
				time--;
				display time;

			}
				
			if timer runs out
			{
				clearInterval
				show you missed
				missed++;
			}
			
			answer.on("click)
			{
				clearInterval
				if correct
				{
					correct++;
					show you are correct
				}
				else incorrect
				{
					incorrect++;
					show you are incorrect
				}
			}//END answer.on("click)
				

			show win/lose/miss  and answer when timer ends

			setTimeOut for 5 seconds
			{
				
				somefuntion();

			}


		}//END somefunction
//====================== end Timer pseudo code =============

	*/	



});//END $(document).ready


//===================== Global Functions ============================

//Returns a random flag object from flags.
//Then removes that flag object from flags array.
function randomFlag()
{
	var index = Math.floor(Math.random()* flags.length);

	var tempFlag = flags[index];
	
	//removes flags[index] from flags.
	flags.splice(index, 1);

	return tempFlag;

}//END randomFlag()

//==========================================================

////Puts flag objects in "flags" array.
function fillFlags()
{
	for(var i = 1;i < 21; i++)            //change for # final flags
	{
		flags.push(window["flag" + i]);

	}

}//END fillFlags


//==========================================================

//Resets variables to initial state
function gameReset()
{
	correct = 0;
	incorrect = 0;
	missed = 0;
	currentFlag = 0;
	numQuestions = 10;
	fillFlags();

}//END gameReset

//===================================

function stopInterval()
{
	console.log("interval stopped");
	clearInterval(intervalId);
	//answerFlag = true;    Dont think I need

}//END stopInterval

//===================================

function game()
{
	/*
		


	*/



	//Counter for setInterval/clearInterval
	var time = 15;//seconds

	
//	question(); //Builds and displays random question.
	
$("#question").html(numQuestions);//Test Code
	
	$("#time").html(time);
	
	intervalId = setInterval(function()
	{
		time--;
		$("#time").html(time);
		if(time == 0)
		{	
			clearInterval(intervalId);
		
		$("#win-lose").html("Times UP!");//testcode
			numQuestions--;
					
			setTimeout(function()    // put this in function?
			{
				if(numQuestions > 0)
				{
					game();
				}
				$("#win-lose").html("");//testcode
			}, 5000);//END setTimeout
								
		}//END if

	},1000);//END setInterval

	

			
}//End game
//===================================================

// stop interval
// check answer
//	
// call game()

function clickedAnswer()
{	
	var messege="";	

	stopInterval(intervalId);
	numQuestions--;

	//	put code here to check answer
	if (true)
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
					
		$("#time").html(15);// move to game?
		
		setTimeout(function() 
		{
			if(numQuestions > 0)
			{
				game();
			}

		}, 5000);//END setTimeout

}//END clickedAnswer

//===========================================================

//DONE!
//	Sets up answer choices.
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
			//with id of #a'i'
			$("#a" + i).html(flags[tempRandIndex].getCountry());		
		}

	}//END for
	
}//END populateAnswers

//================================================================

//DONE!
//Generates random questions and answer choices.
function getQuestion()
{
	//Assigns currentFlag a random flag
	currentFlag = randomFlag();
	
	//Displays currentFlag
	$("#flag-image").attr("src","assets/images/" + currentFlag.getImage());
	
	//Populates Answer choices.
	populateAnswers();
}

//=====================================================

//DONE!
//description
function showAnswer(messege)
{
	
	var results = "<span class='glyphicon glyphicon-flag'></span>" +
				  " <p>" + messege + "</p>" + 
				  " <p>Answer: " + currentFlag.getCountry() + "</p>";

	$("#results-panel").html(results);
	$("#results-panel").css("visibility", "inherit");
}//END showAnswer

//============================================================

//DONE!
//description
function showResults()
{	
	var results = "<p>Correct: " + correct + "</p>" +
				  " <p>Incorrect: " + incorrect + "</p>" + 
				  " <p>Misses: " + missed + "</p>";

	$("#results-panel").html(results);
	$("#results-panel").css("visibility", "visible");
	$("#play").css("visibility","visible");
}//END showResults











