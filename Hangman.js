
 var ABCs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
        "t", "u", "v", "w", "x", "y", "z"];

var Phrases = {};  //This is my object
var Phrases.list = [];  //This is my array



//This list is to keep me organized and allows me to add things over time
Phrases.list[0] = "A Penny for your thoughts";
Phrases.list[1] = "Dropping Dimes";
Phrases.list[2] = "Three sheets to the wind";

Phrases.length = Phrases.list.length;
//this is to control the my arrays
var Hangman = {};
var Hangman.array = [];
Hangman.underlinedarray =[]; 

Hangman.attempts = 5;
Hangman.TotalPhrases = Phrases.Length;  //this should take my phrases and make it the global variable of total phrases.

Hangman.Phrase = "trialrun"
Hangman.Phraseless = "";

//Functions and fun
Hangman.NewPhrase = function(){
	Hangman.Phrase = Phrases.list(Math.floor(Math.random()*Hangman.TotalPhrases));  //this is to randomize my array of phrases. 

}

//Here I'm going to create the underlines for after a letter is picked
Hangman.underlinemaker = function(){
	Hangman.NewPhrase();
	for (i = 0,i = Hangman.Phrase.length, i++){
		Hangman.array[i] = Hangman.Phrase.char(i);
		Hangman.underlinedarray[i] = "_";

	}
	Hangman.Phraseless = Hangman.underlinedarray.join("");
	document.getElementsById("enterphrase").innerHTML = Hangman.underlinedarray;
	document.getElementsById("Phraselength").innerHTML = Hangman.Phrase.length;

}
Hangman.NextPhrase = function(ABCs){
	Hangman.changes = 0;
	for (i = 0, i<Hangman.Phrase.length, i++){
		Hangman.TotalPhrases.[i] = Hangman.Phrase.char(i)
		if(Hangman.array.char(i) == ABCs)	{
			Hangman.underlinedarray(i) == ABCs;
			Hangman.changes += 1;
		}
	}

	if(Hangman.changes < 1){
		Hangman.attempts -=1;
		document.getElementsById("Phrases").innerHTML = Hangman.attempts;

	}
	Hangman.underlinedarray = Hangman.TotalPhrases.join("");
	document.getElementsById("Phrase").innerHTML = Hangman.underlinedarray;

	Hangman.PhraseHappy = Hangman.TotalPhrases.join("");
	Hangman.Phrasefinished = Hangman.underlinedarray.join("");

	if (Hangman.PhraseHappy === Hangman.Phrasefinished) {
		alert("Congrats you won");
		window.location.reload();
	}
	if(Hangman.attempts < 1) {
		document.getElementsById("Phrase").innerHTML === Hangman.PhraseHappy;
		alert("Sorry try again");
		window.location.reload();
	}

}


/*const answer = "hello"
let state = answer.split("").fill("_")

[//"_","_","_","_","_"]   I couldn't get this to work with the original code

var guess = ""
	for(let i=0,i<statelength,i++ ){
let letter = answer[i]
	if(letter ==== guess)
		state[!] = guess



function toUnderscores(str)

return str.split('').fill('_') */












