function calculateTip() {
	// Store the data of inputs
	var billAmount = document.getElementById("billAmount").value;
	var serviceQuality = document.getElementById("serviceQuality").value;
	var numPeople = document.getElementById("totalPeople").value;
	
	// Quick validation
	if(billAmount === "" || serviceQuality == 0) {
			window.alert("Please enter some values to get this baby up and running!");
			return; // this will prevent the function from continuing
	}

	// Do some math!
	var total = (billAmount * serviceQuality) / numPeople;
	total = Math.round(total * 100) / 100;
	total = total.toFixed(2);
	
	// Display the tip!
	document.getElementById("totalTip").style.display = "block";
	document.getElementById("tip").innerHTML = total;
}

// Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";


// Clicking the button calls our custom function
document.getElementById("calculate").onclick = function() { calculateTip(); };