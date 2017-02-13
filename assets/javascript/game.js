/*  Douglas Aquilino       February 18, 2017   */
/*  RCB - "Trivia Game"    Homework #5         */
/*                game.js                      */


/*	==============	NOTES  ==========================

	instructions in jumbotron/or panel.
	"play" button instructions replaced by game. 







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




// flag object constructor
	function flag(image, country, motto)
	{
		// =============== flag object properties =================	
		//private
		const IMAGE = image;
		const COUNTRY = country;
		const MOTTO = motto;

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

		//returns objects MOTTO property value
		this.getMotto = function()
		{
			return MOTTO;
		}//END getMotto
	
		//=======================================

	};// END flag

	//Flag objects declerations.	
	//flag(image, country, motto)
	var flag1 = new flag("flag1.gif" ,"USA" ,"E pluribus unum");
	var flag2 = new flag("image2" ,"Spain" ,"motto2");
	var flag3 = new flag("image3" ,"Italy" ,"motto3");
	var flag4 = new flag("image4" ,"France" ,"motto4");
	var flag5 = new flag("image5" ,"Germany" ,"motto5");
	var flag6 = new flag("image6" ,"UK" ,"motto6");
	var flag7 = new flag("image7" ,"Portugal" ,"motto7");
	var flag8 = new flag("image8" ,"Mexico" ,"motto8");
	var flag9 = new flag("image9" ,"Canada" ,"motto9");
	var flag10 = new flag("image10" ,"country10" ,"motto10");
	
	
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
		
				clearInterval(interval);
		// $(this).hide();// use visibility hide so still in flow.
		// $("#newgame").show();
		



	});//END $("#play").click

	$("#newgame").on("click", function()
	{
		
	

		// $(this).hide();
		// $("#play").show();

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



		
		
		

		game(); // test display
		console.log("After Interval"); // this runs

		$("#answer").click(testClick);


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
	answerFlag = true;

}//END stopInterval

//===================================


//problem when set interval is cleared
//code is not called.
//maybe put code inside in function that is ran checking a flag
//in answer button.  example if(interval stopped ... run function
function origGame()
{
	//Counter for setInterval/clrearInterval
	var time = 15;//seconds

	$("#question").html(numQuestions);
	
	intervalId = setInterval(function()
	{
		time--;
		$("#time").html(time);
		if(time == 0)
		{	
			clearInterval(intervalId);
			console.log("Times Up")
			numQuestions--;
					
			setTimeout(function() 
			{
				if(numQuestions > 0)
				{
					game();
				}

			}, 5000);//END setTimeout
								
		}//END if

	},1000);//END setInterval


			
}//End display

//=====================================================

var answerFlag = false;

function game()
{
	//Counter for setInterval/clrearInterval
	var time = 15;//seconds

	$("#question").html(numQuestions);
	
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
		console.log("this executes");
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

}











