function firstname(){
	var first=document.getElementById("input1").value;
	var a=/^[A-Za-z\s\'\-]{2,25}$/;
	 if(a.test(first)){
		 document.getElementById("warning1").style.color="green";
		  document.getElementById("warning1").innerHTML="valid";
	 }
	 else{
		  document.getElementById("warning1").style.color="red";
		   document.getElementById("warning1").innerHTML="please enter the name as per the request";
	 }
}

function secondname(){
	var second=document.getElementById("input2").value;
	var b=/^[A-Za-z\s\'\-]{2,25}$/;
	 if(b.test(second)){
		 document.getElementById("warning2").style.color="green";
		  document.getElementById("warning2").innerHTML="valid";
	 }
	 else{
		  document.getElementById("warning2").style.color="red";
		   document.getElementById("warning2").innerHTML="please enter the name as per the request";
	 }
}
	
function mobilenum(){
	var number=document.getElementById("mobile").value;
	var c=/^\d{3}-\d{3}-\d{4}$/;
	 if(c.test(number)){
		 document.getElementById("warning3").style.color="green";
		  document.getElementById("warning3").innerHTML="valid";
	 }
	 else{
		  document.getElementById("warning3").style.color="red";
		   document.getElementById("warning3").innerHTML="please enter the name as per the request";
	 }
}
	
	