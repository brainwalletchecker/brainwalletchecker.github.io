$(document).ready(function() { 
	var $input = document.getElementById("addr");
	var last$inputValue = $input.value;
	
	document.getElementById("pass").type = "text";
    $('#addr').after('<div id="result">...</div>');
	
	setInterval(function() {
	    var newValue = $input.value;
	    if (last$inputValue != newValue) {
	        last$inputValue = newValue;
	        handleValueChange();
	    }
	}, 50);
	
	function handleValueChange() {
	    loadDoc( $input.value );
	}
	
	// Trigger a change
	setTimeout(function() {
	    $input.value = $input.value;
	}, 600);

	function loadDoc(key) {
	  const xhttp = new XMLHttpRequest();
	  xhttp.onload = function() {
	    const obj = JSON.parse(this.responseText);
	    console.log( document.getElementById("pass").value + ":" );
	    console.log( obj[key] );
	    if(obj[key].final_balance){
	    	alert("FOUND");
	    }
	    return obj[key].final_balance;
	  }
	  xhttp.open("GET", "https://blockchain.info/balance?cors=true&active=" + key);
	  xhttp.send();
	}

	function sleep(milliseconds) {
	  const date = Date.now();
	  let currentDate = null;
	  do {
	    currentDate = Date.now();
	  } while (currentDate - date < milliseconds);
	}

});