function create(text) {
	var node = document.createTextNode(text);   
	document.getElementById("output").appendChild(node);
};

for(var i=1;i<=100;i++) {

	if(i%3==0) {
		create("Fizz");
	};
	if(i%5==0){
		create("Buzz");
	};
	if((i%3!=0) && (i%5!=0)) {
		create(i);
	};
	var node = document.createElement("br");   
	document.getElementById("output").appendChild(node);
};
