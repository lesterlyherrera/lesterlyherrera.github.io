/*window.onscroll = function(){
    scroll = document.documentElement.scrollTop;
    header = document.getElementById("header");
 
    if (true) {
    	header.classList.add('nav_mod');
    }
}
*/
document.getElementById("btn_menu").addEventListener("click", mostrar_menu);
document.getElementById("back_menu").addEventListener("click", ocultar_menu);




document.querySelector(".bars__menu").addEventListener("click", animateBars);




var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");


nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");

function mostrar_menu(){
	
	nav.style.right = "-20px";
	background_menu.style.display = "block";
}

function ocultar_menu(){
	
	nav.style.right = "-270px";
	background_menu.style.display = "none";
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
}

function animateBars() {
	line1__bars.classList.toggle("activeline1__bars-menu");
	line2__bars.classList.toggle("activeline2__bars-menu");
	line3__bars.classList.toggle("activeline3__bars-menu");
    nav.style.right = "-20px";
    background_menu.style.display = "block";
}

// Scroll Up
/*
document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){
	var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0) {
    	window.requestAnmationFrame(scrollUp);
    	window.scrollTo (0, currentScroll - (currentScroll / 10));
    }
}

*/



//buttonUp = document.getElementById("button-up");

/*Animacion para que el menu al bajar se vea*/

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;
    
    header = document.getElementById("header");

    if (scroll > 20) {
        header.classList.add('nav_mod');
    	//buttonUp.style.transform = "scale(1)";
    }else if(scroll < 20){
        header.classList.remove('nav_mod');
    }
}
 









