
var price = 1000;
var screen = drive = memory = {"price" : 0};
screen.screen = "11 Inches";
memory.memory = "16GB";
drive.hardDrive = "256GB";

$(document).ready(function(){

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

	$('#saveQuote').click(function(){
	//	$.getJSON("http://localhost:3000/saveQuery", function(data
		var url = "http://localhost:3000/saveQuote?";
		url += "price=" + price;
		url += "&screen=" + screen.screen;
		url += "&drive=" + drive.hardDrive;
		url += "&memory=" + memory.memory;
		alert(url);
		//$.get(url);
	});			

});

function updatePrice(){
	price = parseInt(screen.price) +
	parseInt(drive.price) + 
	parseInt(memory.price) + 
	parseInt("1000");
	document.getElementById('laptopPrice').innerHTML = "$" + price;
}
