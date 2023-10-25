var m = 0;
var s = 100;
function timer()
{
	if(s != 0)
	{
		s--;
	}
	else{
		s = 100;
		m--;
	}
	document.getElementById('min').innerHTML = m + ":" + (s<10?("0"+s): s);	
	if (s==0 && m==0) {
		document.getElementById('min').innerHTML = "0:00";
		clearInterval(timer);
		alert("Time OUT!!");
		result();
	}
}
var x = setInterval(timer,1000);