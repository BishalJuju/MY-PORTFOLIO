const im = document.querySelectorAll(".img1");
console.log(im);
var counter = 0;
var i = 0;

const goNext = () =>{

		counter++
		if(counter <= 2){
			slideImage()
		}
		else{
			counter = 0;
			slideImage();
		}	
		console.log(counter);
}


const goPrev = () =>{
	
		counter--
		if(counter >= 0){
			slideImage()
		}
		else{
			counter = 2;
			slideImage();
		}	
		console.log(counter);
	
}

function slideAutoImage(){
		counter++
		if(counter <= 2){
			slideImage()
		}
		else{
			counter = 0;
			slideImage();
		}	
}

const slideImage = () => {
	im.forEach(
		(img1) => {
				img1.style.transform = `translateX(-${counter * 100}%`;
				console.log(img1)
			}
		)
}


var searchbar = document.querySelector(".searchbar");
var search = document.querySelector("#search");
var cross = document.querySelector("#crox");
function show() {
	search.addEventListener('click',()=>{
		searchbar.style.top = "11%";
		cross.style.display = "block"
	})
}
function hide() {
	cross.addEventListener('click',()=>{
		searchbar.style.top = "-110%";
		cross.style.display = "none"
	})	
}
