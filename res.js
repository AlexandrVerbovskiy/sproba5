var qwer;
document.getElementById("dr").onclick= function() {
  document.getElementById("check").hidden = false;
    document.getElementById("read").hidden = false;
  document.getElementById("dr").hidden = true;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));}

var a=getRandomInt(6);
var b=getRandomInt(101);
var c=getRandomInt(101);
var w;
if(a==0){
w=b+c;
document.getElementById("req").innerHTML=b+"+"+c;
} else 
if(a==1){
	if(c-b<0){
w=b-c;
document.getElementById("req").innerHTML=b+"-"+c;
	} else{
		w=c-b;
		document.getElementById("req").innerHTML=c+"-"+b;
	}
	
} else if(a==2){
	document.getElementById("req").innerHTML=b+"*"+c;
	w=c*b;
} else if(a==3){
	w=c%b;
	document.getElementById("req").innerHTML=c+"%"+b+"(остачу при діленні)";
} else if(a==4){
	if(c>b){
	w=c*c-b*b;	
	document.getElementById("req").innerHTML=b+"*"+b+"-"+c+"*"+c;
	} else{
			w=b*b-c*c;
				document.getElementById("req").innerHTML=c+"*"+c+"-"+b+"*"+b;
	}

} else{
	w=(a+b)/2;
	document.getElementById("req").innerHTML="суму з"+c+"та"+b+"поділити навпіл";
}	
qwer=w;
}
document.getElementById("read").onclick= function() {

	var qa=document.getElementById("answer").value;
if(qa==qwer){
alert("Клас!Переходь на сайт!");
    document.getElementById("close").hidden = false;
     document.getElementById("check").hidden = true;
    document.getElementById("read").hidden = true;
         document.getElementById("true").hidden = true;
    document.getElementById("req").hidden = true;
	} else{
		alert("Спробуй ще");
		location.reload();
	}
}
