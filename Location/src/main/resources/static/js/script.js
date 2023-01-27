console.log("script.js loaded");

window.addEventListener("load", function(e){
	console.log("Page loaded");
	init();
})

function init() {
	loadLocations();
	
	document.addLocationForm.submit.addEventListener("click", function(e) {
		e.preventDefault();
		let showTitle = document.addLocationForm.showTitle;
		let nameInShow = document.addLocationForm.nameInShow;
		let address = document.addLocationForm.location;
		let city = document.addLocationForm.city;
		let state = document.addLocationForm.state;
		let comment = document.addLocationForm.comments;
		let image = document.addLocationForm.image;
		createLocation(showTitle, nameInShow, address, city, state, comment, image);
	})
}

function loadLocations() {
	//AJAX
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/locations');
	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4) {
			if(xhr.status === 200) {
				let locationsList = JSON.parse(xhr.responseText);
				displayLocations(locationsList);
			}
		}else {
			//TODO - display an error
		}
	};
	
	xhr.send();
	
}

function displayLocations(locationsList) {
	let tbody = document.getElementsByTagName('tbody')[0];
	tbody.textContent = "";
	for(let location of locationsList) {
		let tr = document.createElement('tr');
		let tdTitle = document.createElement('td');
    	let tdLocation = document.createElement('td');
    	
    	tdTitle.textContent = location.showTitle;
    	tdLocation.textContent = location.nameInShow;
    	
    	tbody.appendChild(tr);
    	tr.appendChild(tdTitle);
    	tr.appendChild(tdLocation);
    	
    	tr.addEventListener("click", function(e) {
			showLocationDetails(location);
		})
	}
}

function createLocation(showTitle, nameInShow, address, city, state, comment, image) {
	let xhr = new XMLHttpRequest();
	
	xhr.open("POST", "api/locations");
	
	xhr.setRequestHeader("Content-type", "application/json");
	
	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4) {
			if(xhr.status === 201) {
				let data = JSON.parse(xhr.responseText);
				loadLocations();
			} else {
				console.error("POST request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};
	
	let location = {showTitle:showTitle.value, nameInShow:nameInShow.value, address:address.value, city:city.value, state:state.value, comment:comment.value, image:image.value};
	document.addLocationForm.reset();
	
	let locationJson = JSON.stringify(location);
	
	xhr.send(locationJson);	
}

function showLocationDetails(location) {
	let detailsDiv = document.getElementById("locationDetails");
	let br = document.createElement('br');
	detailsDiv.textContent = "";
	
	let header = document.createElement('h1');
	header.textContent = "Location Details";
	detailsDiv.appendChild(header);
	
	let detailsForm = document.createElement('form');
	detailsDiv.appendChild(detailsForm);
	
	let titleLabel = document.createElement('label');
	let titleInput = document.createElement('input');
	titleLabel.textContent = "Show Title";
	titleInput.value = location.showTitle;
	titleInput.setAttribute('readonly', true);
	detailsForm.appendChild(titleLabel);
	detailsForm.appendChild(titleInput);
	detailsForm.appendChild(document.createElement('br'));
	
	let locationLabel = document.createElement('label');
	let locationInput = document.createElement('input');
	locationLabel.textContent = "Location In Show";
	locationInput.value = location.nameInShow;
	locationInput.setAttribute('readonly', true);
	detailsForm.appendChild(locationLabel);
	detailsForm.appendChild(locationInput);
	detailsForm.appendChild(document.createElement('br'));
	
	let addressLabel = document.createElement('label');
	let addressInput = document.createElement('input');
	addressLabel.textContent = "Address";
	addressInput.value = location.location;
	addressInput.setAttribute('readonly', true);
	detailsForm.appendChild(addressLabel);
	detailsForm.appendChild(addressInput);
	detailsForm.appendChild(document.createElement('br'));
	
	let cityLabel = document.createElement('label');
	let cityInput = document.createElement('input');
	cityLabel.textContent = "City";
	cityInput.value = location.city;
	cityInput.setAttribute('readonly', true);
	detailsForm.appendChild(cityLabel);
	detailsForm.appendChild(cityInput);
	detailsForm.appendChild(document.createElement('br'));
	
	let stateLabel = document.createElement('label');
	let stateInput = document.createElement('input');
	stateLabel.textContent = "State";
	stateInput.value = location.state;
	stateInput.setAttribute('readonly', true);
	detailsForm.appendChild(stateLabel);
	detailsForm.appendChild(stateInput);
	detailsForm.appendChild(document.createElement('br'));
	
	let commentsLabel = document.createElement('label');
	let commentsInput = document.createElement('textarea');
	commentsLabel.textContent = "Comments";
	commentsInput.value = location.comments;
	commentsInput.setAttribute('readonly', true);
	detailsForm.appendChild(commentsLabel);
	detailsForm.appendChild(commentsInput);
	detailsForm.appendChild(document.createElement('br'));
	
	let imageLabel = document.createElement('label');
	let imageInput = document.createElement('img');
	imageLabel.textContent = "Image";
	imageInput.src = location.image;
	//imageInput.setAttribute('readonly', true);
	detailsForm.appendChild(imageLabel);
	detailsForm.appendChild(imageInput);
	detailsForm.appendChild(document.createElement('br'));
}



























