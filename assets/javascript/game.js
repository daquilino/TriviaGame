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

//var j= 0;// this is test for timer




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





	//============= Test timer loop===================

			 testTimer();
			// console.log("done");
			var counter = 1;
			
			 interval = setInterval(function()
			 {
			 	console.log("setInterval");
			 	counter++;
			
			 	if(counter > 5 )
			 	{
			 		clearInterval(interval);
			 		$("#question").html("Done");

			 	}
			 	$("#question").html(counter);
			 	testTimer();

			 }, 16000);
			
			
	
		
		





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


}//END gameReset

//=============== recursive timer test ====================
var j =  14;
function testTimer()
{
	
	setTimeout(function() {
		
		$("#time").html(j);
		j--;
		if(j > -1)
		{
			testTimer();
		}
		else
		{
			j=14; // resets j to 15
		}
	}, 1000);
 

}




