var timeStampsList = document.querySelectorAll(".pl-video .pl-video-time .timestamp span");
var timeStampsTotal = 0;
var min, sec;

for(var i = 0; i < timeStampsList.length; i++){
	var t = timeStampsList[i].innerText.split(":");
	min = parseInt(t[0]) * 60;
	sec = parseInt(t[1]);
	timeStampsTotal = timeStampsTotal + min + sec;
}

timeStampsTotal = (timeStampsTotal / 60) / 60;
alert("total duration of this playlist by TAE YOUNG KIM: " + timeStampsTotal);
