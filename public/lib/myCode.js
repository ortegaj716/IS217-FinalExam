
var price = 1000;
var screen = drive = memory = {"price" : 0};

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

});

function updatePrice(){
	price = parseInt(screen.price) +
	parseInt(drive.price) + 
	parseInt(memory.price) + 
	parseInt("1000");
	document.getElementById('laptopPrice').innerHTML = "$" + price;
}
