/*  Douglas Aquilino       February 18, 2017   */
/*  RCB - "Trivia Game"    Homework #5         */
/*                game.js                      */


/*	==============	NOTES  ==========================
	populateCoices needs going over. debug random part
	

	
====================== pseudo code ====================

	1.) show instructions with play button.
	2.) when Play button pressed it hides shows question
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
					to generate random choices, #c1,#c2,#c3,#c4
			get random number 1 to 4.
			put answer there.

			x = random number
			$("#c" + x).html(flags[randomIndex].getCountry);

			for (var i = 1; i < 5)
			{
				if ( i != x)
				{
					$("#c" + x).html(flags[Math.floor(Math.random()*flags.length)].getCountry);
				}

			}

*/


// Global Variable Declarations

// Array of flag objects
var flags= [];	

//Holds random index for flags array.
var randomIndex = 0;

// Keeps track of correct answers
var correct = 0;

// Keeps track of incorrect answers
var incorrect = 0;

// Keeps track of missed answers
var missed = 0;

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
	var flag1 = new flag("flag1.gif" ,"USA");
	var flag2 = new flag("image2" ,"Spain");
	var flag3 = new flag("image3" ,"Italy");
	var flag4 = new flag("image4" ,"France");
	var flag5 = new flag("image5" ,"Germany");
	var flag6 = new flag("image6" ,"UK");
	var flag7 = new flag("image7" ,"Portugal");
	var flag8 = new flag("image8" ,"Mexico");
	var flag9 = new flag("image9" ,"Canada");
	var flag10 = new flag("image10" ,"country10");
	
	
	//Puts flag objects in "flags" array.
	for(var i = 1;i < 11;i++)
	{
		flags.push(window["flag" + i]);

	}


//================== document.ready ==============================
	
$(document).ready(function()
{
	
	
	$("#play").on("click" , function()
	{
		//$("#play").html("Play Again").css("visibility","hidden");
		//resetGame();
		//startGame();				

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



		
		
		

		//game(); // test display
		
		$("#answer").click(clickedAnswer);


});//END $(document).ready

//Returns a random number between 0 and flags.length.
//Checks if number was already used.  If not pushes to "askedAlready".
//If number already used. Calls randomFlag until unique number. 
function randomFlag()
{
	var index = Math.floor(Math.random()* flags.length);

	if(askedAlready.indexOf(index) > -1)
	{

		randomFlag();
		return index;
	}	
		askedAlready.push(index);
		return index;

}//END randomFlag()

//==========================================================

//Resets variables to initial state
function gameReset()
{
	correct = 0;
	incorrect = 0;
	missed = 0;
	askedAlready = [];
	numQuestions = 10;

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



	//Counter for setInterval/clrearInterval
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
		
		stopInterval();
		numQuestions--;
		//	put code here to check answer
		//
		$("#win-lose").html("clicked answer");//testcode			
		$("#time").html(15);
		setTimeout(function() 
		{
			if(numQuestions > 0)
			{
				$("#win-lose").html("");//testcode
				game();
			}

		}, 5000);//END setTimeout

}//END clickedAnswer

// this works.  Check into random part.
function populateChoices()
{
	x = Math.floor((Math.random()*4)+1);
		
	var tempArray = [randomIndex];
	var tempRandIndex = 0;
	randomIndex = randomFlag();// this will be in other function
			
	$("#c" + x).html(flags[randomIndex].getCountry());
	
	for (var i = 1; i < 5; i++)		
	{
						
		do
		{
			tempRandIndex = Math.floor(Math.random()*flags.length);
		}
		while(tempArray.indexOf(tempRandIndex) > -1);


		if(i !=x)
		{				
			$("#c" + i).html(flags[tempRandIndex].getCountry);
			tempArray.push(tempRandIndex);
		}

	}//END For
	console.log("tempArray :" + tempArray);
}//END populateChoices











