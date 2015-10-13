function execute(n){
	function create(text) {
		var node = document.createTextNode(text);   
		document.getElementById("output").appendChild(node);
	};

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
	var userinput = document.getElementById('input').val();
	var number = parseInt('userinput');
	console.log("clicked!" + number);
	execute(number);
});