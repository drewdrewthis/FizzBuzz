$(document).ready(function() {
	for(var i=1, number=0;i<=100;i++) {
		if(i%3==0)
			$('.output').append("Fizz");
		if(i%5==0)
			$('.output').append("Buzz");
		if((i%3!=0) && (i%5!=0))
			$('.output').append(i);
		$('.output').append("<br/>");
	};
});