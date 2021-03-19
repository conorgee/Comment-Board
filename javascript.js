
var array = [];
var likes = 0;
function clickFunction(){
var ass = Math.round(2.60);
console.log(ass);
var stringArray = []
var string = ""
var string1 = document.getElementById("handle").value;
var string2 = document.getElementById("area").value;
var postdate = Date.now();
var comment = {
					handle:   string1,


					area:  string2,



					postdate:  postdate   };
console.log(comment);
array.unshift(comment);
for (var j = 0; j < array.length; j++){
	
var theTime = "";	
var time = (Date.now() - array[j].postdate)/1000;
time = Math.round(time);
if(time<60){
	
	time = Math.round(time);
	
	theTime = time+" seconds has elapsed since posted "
}else if(time<3600){

var newTime = (time)/60;
newTime = Math.round(newTime);
	theTime = newTime+" minutes has elapsed since posted "

}else{

var newTime = (time/60)/60;
newTime = Math.round(newTime);
	theTime = newTime+" hours has elapsed since posted "

}
string += '<br>'+"Handle: "+array[j].handle+'<br>'+" Comment: "+ array[j].area +'<br>'+'<button id="button2" onclick="like()" type="button">like</button>'+'<br>'+theTime+'<br><br><br>';


}

 document.getElementById("demo").innerHTML = string;
 document.getElementById("handle").value = "";
 document.getElementById("area").value = "";
}

function like(){
likes++;
alert("Thier has been "+likes+"!!!! Likes on this page");


}

