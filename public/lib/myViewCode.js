
$(document).ready(function(){

	$.getJSON("http://localhost:3000/loadQuotes", function(data){

		for(var q in data){
			
			if(data.hasOwnProperty(q)){
				
				var append = "<span>$";
				append += data[q]['price'];
				append += "</span><br><span>Screen Size: ";
				append += data[q]['screen'];
				append += "</span><br><span>Hard Drive: ";
				append += data[q]['drive'];
				append += "</span><br><span>Memory: ";
				append += data[q]['memory'];
				append += "</span><br><br>";

				$(append).appendTo("#divQuotes");

			}
		
		}

	});

});

function updatePrice(){
	price = parseInt(screen.price) +
	parseInt(drive.price) + 
	parseInt(memory.price) + 
	parseInt("1000");
	document.getElementById('laptopPrice').innerHTML = "$" + price;
}
