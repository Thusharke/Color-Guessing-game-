var square = document.querySelectorAll(".square");
var newgame = document.querySelector("#reset");
var message = document.querySelector("#message");
var colorDisplay = document.querySelector("#GuessColor");
var h1=document.querySelector("h1");
var easy=document.querySelector("#easybtn");
var hard=document.querySelector("#hardbtn");
var remove=document.querySelectorAll(".hard")
var colors = randomColorGenerator(6);
var pickedcolor = pickcolor(6);
var chosenColor;

assignColors(colors);
colorDisplay.textContent=pickedcolor;
hard.classList.add("selected");

hard.addEventListener("mouseover",function(){
	hard.classList.add("hovered");     
})
hard.addEventListener("mouseout",function(){
	hard.classList.remove("hovered"); 
})

easy.addEventListener("mouseover",function(){
	easy.classList.add("hovered");
})
easy.addEventListener("mouseout",function(){
	easy.classList.remove("hovered");
})

newgame.addEventListener("mouseover",function(){
	newgame.classList.add("hovered");
})
newgame.addEventListener("mouseout",function(){
	newgame.classList.remove("hovered");
})



hard.addEventListener("click",function(){

	hard.classList.add("selected");
	easy.classList.remove("selected");

	colors = randomColorGenerator(6);
	assignColors(colors);

    for(var i=0;i<remove.length;i++)
	remove[i].classList.remove("hide");
})

easy.addEventListener("click",function(){

	hard.classList.remove("selected");
	easy.classList.add("selected");
    
	colors = randomColorGenerator(3);
	assignColors(colors);

	for(var i=0;i<remove.length;i++)
	remove[i].classList.add("hide");
})

newgame.addEventListener("click",function(){
	newgame.textContent = "NEW COLORS";
	colors = randomColorGenerator(colors.length);
	assignColors(colors);
	pickedcolor = pickcolor(colors.length);
	colorDisplay.textContent=pickedcolor;
	message.textContent = "";
	h1.style.backgroundColor = "steelblue";
})

function pickcolor(num){
	var random = Math.floor(Math.random() * num);
	return colors[random];
}
function randomColorGenerator(numberOfColors){
	var arr=[];
	for(var i=0;i<numberOfColors;i++)
		arr[i]="rgb(" + Math.floor(Math.random() *256) + ", " + Math.floor(Math.random() *256) + ", " + Math.floor(Math.random() *256) + ")" ;
	return arr;
}


function assignColors(colors){
	h1.style.backgroundColor = "steelblue";
	pickedcolor = pickcolor(colors.length);
	colorDisplay.textContent=pickedcolor;

	for(var i=0;i<colors.length;i++){
		square[i].style.backgroundColor = colors[i];
	    
		square[i].addEventListener("click",function(){
		chosenColor = this.style.backgroundColor;
	    changingColors(this);
		})
    }  
}

function changingColors(option){
	   if(pickedcolor === chosenColor){
       		for(var i=0;i<colors.length;i++)
				square[i].style.backgroundColor = pickedcolor;
			h1.style.backgroundColor = pickedcolor;
			message.textContent = "correct!!";
			newgame.textContent = "PLAY AGAIN";
       }
       else{
       		option.style.backgroundColor = "#232323";
       	    message.textContent = "Try again!!";
       	}
}
