function type() {
	var typed = new Typed(".text",{
		strings:["Web Developer","Programmer","Gamer"],
		typeSpeed:80,
		backSpeed:80,
		backDelay:1000,
		loop:true
	});

}
type();

function scrl() {
	window.addEventListener('scroll',function(){
	var header = document.querySelector("#header");
		if(window.scrollY > 10){
		
			header.classList.add('scrolled');
			// header.style.padding="1vh 4vw";
		}else{
			header.classList.remove('scrolled');
			// header.style.padding="2vh 4vw";
		}
	
	})
}
scrl();

function chng(){
	window.addEventListener('scroll',function(){
		if (window.pageYOffset > 280) {
			document.getElementById('services').style.backgroundColor="#dadada";

			// document.getElementById('services').style.color="black";
		}else{
			document.getElementById('services').style.backgroundColor="black";
			// document.getElementById('services').style.color="white";
		}
		
	})
	

}
function chng2(){
	window.addEventListener('scroll',function(){
		if (window.pageYOffset > 860) {
			document.getElementById('services').style.backgroundColor="#dadada";

			// document.getElementById('services').style.color="black";
		}else{
			document.getElementById('services').style.backgroundColor="black";
			// document.getElementById('services').style.color="white";
		}
		
	})
	

}

if(window.innerWidth < 550){
	chng();
}
else{
	chng2();
}

function of() {
	document.getElementById('navbar2').style.right="0";
	document.getElementById("f1").style.display = "none";
	document.getElementById("f2").style.display = "block";
}
function on() {
	document.getElementById('navbar2').style.right="-100%";
	document.getElementById("f1").style.display = "block";
	document.getElementById("f2").style.display = "none";

}