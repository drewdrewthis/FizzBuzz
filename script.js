for(var i=1;i<=100;i++) {

	if(i%3==0) {
		var node = document.createTextNode("Fizz");   
		document.getElementById("output").appendChild(node);
	}
	if(i%5==0){
		var node = document.createTextNode("Buzz");   
		document.getElementById("output").appendChild(node);
	}
	if((i%3!=0) && (i%5!=0)) {
		var node = document.createTextNode(i);   
		document.getElementById("output").appendChild(node);
	}
};
