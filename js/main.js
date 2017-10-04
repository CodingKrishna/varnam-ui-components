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