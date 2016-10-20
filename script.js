$(document).ready(function(){
var answers = [];
//lists ingredients for drinks.
var Ingredient = function(){
	this.strong = ['Glug of rum', 'slug of whisky', 'splash of gin'];
	this.salty= ['Olive on a stick', 'salt-dusted rim', 'rasher of bacon'];
	this.bitter = ['Shake of bitters', 'splash of tonic', 'twist of lemon peel'];
	this.sweetness = ['Sugar cube', 'spoonful of honey', 'splash of cola'];
	this.fruity = ['Slice of orange', 'dash of cassis', 'cherry on top'];
}
//creates a random number between 1 - 3
var number = function(){
	return Math.floor((Math.random() * 2) + 1);	
}

//submit button pushed
$('#order').click(function(e){
	e.preventDefault();
	var ingredient = new Ingredient();
//figures out what user clicked
if($("input[name=strong]:checked").val() == 1){
//if user answers yes to any of the question go to Ingredient and grab one
	answers.push(ingredient.strong[number()]);
}
if($("input[name=salty]:checked").val() == 1){
	answers.push(ingredient.salty[number()] );
}
if($("input[name=bitter]:checked").val() == 1){
	answers.push(ingredient.bitter[number()]);
}
if($("input[name=sweetness]:checked").val() == 1){
	answers.push(ingredient.sweetness[number()]);
}
if($("input[name=fruity]:checked").val() == 1){
	answers.push(ingredient.fruity[number()]);
}


// combines a word from each ingredient to create the drink name
var drinkName = answers.join(' ');
var name = drinkName.split(" ");
var drinkNameFirst = name[name.length - 1].charAt(0).toUpperCase() + name[name.length - 1].slice(1);
var drinkNameLast = name[0].charAt(0).toUpperCase() + name[0].slice(1);

//provide the drink name to user.
$('form').hide();
$('.form').append("<h2>One " + drinkNameFirst + " " + drinkNameLast + " coming up!</h2>" );
$('.form').css({'height':'430px', 'bottom':'428px'});
});










});//DR