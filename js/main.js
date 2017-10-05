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


/*-------------- coursoel -------*/




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
