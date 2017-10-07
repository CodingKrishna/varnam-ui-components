/*------Tabs javascript------------------*/

var openTab=function (tabId) {
	var tab = document.querySelectorAll(".content");
	for (var i = 0; i<= tab.length - 1; i++) {
		tab[i].style.display="none";
	}
	document.getElementById(tabId).style.display = "block"
	
}
/*-------------Popup Script----------------*/
function showPop(){
    document.getElementById("show").style.visibility="visible";
    document.getElementById("showpop").style.visibility="visible";
}
function hidePop(){
    document.getElementById("show").style.visibility="hidden";
    document.getElementById("showpop").style.visibility="hidden";
}

/*----------------Accordion----------------*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}

/*-------------- coursoel -------*/
var slideIndex = 1;
	showImg(slideIndex);
	
	function slideImages(number) {
	  showImg(slideIndex += number);
	}

	function showImg(number) {
	  var elements = document.getElementsByClassName("slides");
	  if (number > elements.length) {
	  	slideIndex = 1
	  }    
	  if (number < 1) {
	  		slideIndex = elements.length
	  	}
	  var x;
	  for (x = 0; x < elements.length; x++) {
	     elements[x].style.display = "none";  
	  }
	  elements[slideIndex-1].style.display = "block"  
}




/*---------------Model Dialouge--------------*/

function showDialogue(){
    document.getElementById("showModel").style.visibility="visible";
    document.getElementById("showDialogue").style.visibility="visible";
}
function hideDialogue (){
    document.getElementById("showModel").style.visibility="hidden";
    document.getElementById("showDialogue").style.visibility="hidden";
}
/*-----------Toster-----------*/
function closeAlert(statusText){
			if(statusText=='default'){
				document.getElementById("defaultAlert").style.display = "none";
			}else if(statusText=='info'){
				document.getElementById("infoAlert").style.display = "none";
			}else if(statusText=='primary'){
				document.getElementById("primaryAlert").style.display = "none";
			}else if(statusText=='success'){
				document.getElementById("successAlert").style.display = "none";
			}else if(statusText=='warning'){
				document.getElementById("warningAlert").style.display = "none";
			} else{
				document.getElementById("dangerAlert").style.display = "none";
			}
}
