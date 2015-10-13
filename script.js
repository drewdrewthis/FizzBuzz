function create(text) {
		var node = document.createTextNode(text);   
		document.getElementById("output").appendChild(node);
};

function execute(n){
	

	for(var i=1;i<=n;i++) {

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
};

document.getElementById('Submit').addEventListener('click', function(e){
	e.preventDefault();
	//Reset Output
	document.getElementById("output").innerHTML="";
	var userinput = input.value;
	var number = parseInt(userinput);
	console.log("User Input: " + userinput);
	console.debug("FizzBuzz Input Number: " + number);
	if(!number)
		create("Oops - that's not an number!");
	else if(userinput % 1 != 0)
		create("Oops - that's not an integer!");
	else
		execute(number);
});