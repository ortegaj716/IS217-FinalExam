

test("Upgrading Screen Size", function(){
	$('#screen1').trigger("click");
	var p = document.getElementById("laptopPrice").innerHTML;
	ok(p == "$1200", "Passed!");
});

test("Upgrading Hard Drive", function(){
	$('#drive1').trigger("click");
	var p = document.getElementById("laptopPrice").innerHTML;
	ok(p == "$1400", "Passed!");
});

test("Upgrading Memory", function(){
	$('#memory1').trigger("click");
	var p = document.getElementById("laptopPrice").innerHTML;
	ok(p == "$1600", "Passed!");
});

test("Removing All Features", function(){
	$('#drive0').trigger("click");
	$('#memory0').trigger("click");
	$('#screen0').trigger("click");
	var p = document.getElementById("laptopPrice").innerHTML;
	ok(p == "$1000", "Passed!");
});
