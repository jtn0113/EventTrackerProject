console.log("script.js loaded");

window.addEventListener("load", function(e){
	console.log("Page loaded");
	init();
})

function init() {
	loadLocations();
}

function loadLocations() {
	//AJAX
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/locations');
	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4) {
			if(xhr.status === 200) {
				let locationsList = JSON.parse(xhr.responseText);
				console.log(locationsList);
				displayLocations(locationsList);
			}
		} else {
			
		}
	};
	
	xhr.send();
	
}

function displayLocations(locationsList) {
	//DOM
}