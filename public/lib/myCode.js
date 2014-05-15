
var price = 1000;
var screen = drive = memory = {"price" : 0};
screen.screen = "11 Inches";
memory.memory = "8GB";
drive.hardDrive = "128GB";

$(document).ready(function(){

	/*
	$('input[name="drive"]').click(function(){
		var p = $('input[name="drive"]:checked').val();
		drive = jQuery.parseJSON(p);
		updatePrice();
	});

	$('input[name="screen"]').click(function(){
		var p = $('input[name="screen"]:checked').val();
		screen = jQuery.parseJSON(p);
		updatePrice();
	});

	$('input[name="memory"]').click(function(){
		var p = $('input[name="memory"]:checked').val();
		memory = jQuery.parseJSON(p);
		updatePrice();
	});
	*/

	//I don't like it this way, but at least it works with unit testing better this way...

	$('#screen0').click(function(){
		var p = $('#screen0').val();
		screen = jQuery.parseJSON(p);
		updatePrice();
	});

	$('#screen1').click(function(){
		var p = $('#screen1').val();
		screen = jQuery.parseJSON(p);
		updatePrice();
	});

	$('#drive0').click(function(){
		var p = $('#drive0').val();
		drive = jQuery.parseJSON(p);
		updatePrice();
	});

	$('#drive1').click(function(){
		var p = $('#drive1').val();
		drive = jQuery.parseJSON(p);
		updatePrice();
	});

	$('#memory0').click(function(){
		var p = $('#memory0').val();
		memory = jQuery.parseJSON(p);
		updatePrice();
	});

	$('#memory1').click(function(){
		var p = $('#memory1').val();
		memory = jQuery.parseJSON(p);
		updatePrice();
	});


	$('#saveQuote').click(function(){
	//	$.getJSON("http://localhost:3000/saveQuery", function(data
		var url = "http://localhost:3000/saveQuote?";
		url += "price=" + price;
		url += "&screen=" + screen.screen;
		url += "&drive=" + drive.hardDrive;
		url += "&memory=" + memory.memory;
		$.get(url);
		window.location.href = "http://localhost:3000";
		alert("Quote Added");
	});

	$('#viewQuotes').click(function(){
		window.location.href = "http://localhost:3000/viewQuotes";
	});	

	//$("#drive1").trigger("click");		

});

function updatePrice(){
	price = parseInt(screen.price) +
	parseInt(drive.price) + 
	parseInt(memory.price) + 
	parseInt("1000");
	document.getElementById('laptopPrice').innerHTML = "$" + price;
}
