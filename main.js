let userCount=0;
let computerCount=0;
const userCount_span=document.getElementById('user-count');
const computerCount_span=document.getElementById('computer-count');
const scoreBoard_div=document.querySelector('.score-board');
const result_p=document.querySelector('.result > p');
const rock_div=document.getElementById('r');
const scissors_div=document.getElementById('s');
const paper_div=document.getElementById('p');

function getComputerChoice(){
	const choices=['r','p','s'];
	const randomNumber=Math.floor(Math.random()*3);
	return choices[randomNumber];
}
function win(userChoice,computerChoice){
	userCount++;
	userCount_span.innerHTML=userCount;
	computerCount_span.innerHTML=computerCount;
	result_p.innerHTML=returnword(userChoice) + " beats " + returnword(computerChoice) +".you win";

}
function returnword(letter){
	if (letter==="r") return "Rock";
	 if (letter==="s") return "Scissors";
	return "Paper";

}
function lose(userChoice,computerChoice){
	computerCount++;
	userCount_span.innerHTML=userCount;
	computerCount_span.innerHTML=computerCount;
	result_p.innerHTML=returnword(computerChoice) + " beats " + returnword(userChoice) +".you lose";

}
function draw(userChoice,computerChoice){
	
	userCount_span.innerHTML=userCount;
	computerCount_span.innerHTML=computerCount;
	result_p.innerHTML=returnword(computerChoice) +" and "+ returnword(userChoice) +" are same " +" It\'s tie";

}


function game(userChoice){
	const computerChoice=getComputerChoice();
	switch(userChoice+computerChoice){
		case "rs":
		case "pr":
		case "sp":
		win(userChoice,computerChoice);
		break;
		case "ps":
		case "rp":
		case "sr":
		lose(userChoice,computerChoice);
		break;
		case "rr":
		case "pp":
		case "ss":
		draw(userChoice,computerChoice);
		break;
	}
	
}
function main(){
	rock_div.addEventListener('click', function(){
	game("r");
})
scissors_div.addEventListener('click', function(){
	game("s");
})
paper_div.addEventListener('click', function(){
	game("p");
})
}
main();
