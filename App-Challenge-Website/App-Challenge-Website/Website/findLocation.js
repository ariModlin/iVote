var locationArray = ["Plantation Ford", "Jim Ward Community Center", 
"Volunteer Park Community Center", "South Plantation High School", 
"Plantation Presbytarian Church", "Deike Auditorium", "Tropical Elementary School", 
"El Dorado Estates Community Center", "Lakes of Newport Clubhouse", "Plantation High School",
"Lauderdale West Recreational Facility", "Temple Kol-Ami", "Covenant Retirement Village", 
"Plantation Park Elementary", "Plantation Central Park Recreational Building", 
"Central Park Elementary School", "Bridgewater Homeowners Association Clubhouse",
"St. Gregory's Catholic Church", "Plantation Baptist Church"];
var n1 = {lat: 26.130810, lng: -80.203240}; // Plantation Ford
var n2 = {lat: 26.124597, lng: -80.210728}; // Jim Ward CC
var n3 = {lat: 26.144636, lng: -80.307279}; // Volunteer Park CC
var n4 = {lat: 26.103344, lng: -80.220230}; // South Plantation HS
var n5 = {lat: 26.134974, lng: -80.241714}; // Plantation Presbytarian Church
var n6 = {lat: 26.124119, lng: -80.225311}; // Deike Auditorium
var n7 = {lat: 26.103400, lng: -80.234761}; // Tropical Elementary School
var n8 = {lat: 26.119802, lng: -80.249533}; // El Dorado Estates CC
var n9 = {lat: 26.122336, lng: -80.248546}; // Lakes of Newport Clubhouse
var n10 = {lat: 26.145304, lng: -80.240873}; // Plantation HS 
var n11 = {lat: 26.139561, lng: -80.262183}; // Lauderdale West RF
var n12 = {lat: 26.104890, lng: -80.256983}; // Temple Kol-Ami
var n13 = {lat: 26.121856, lng: -80.268590}; // Covenant Retirement Village
var n14 = {lat: 26.109510, lng: -80.222501}; // Plantation Park Elementary
var n15 = {lat: 26.123462, lng: -80.270555}; // Plantation Central Park Rec. Bldg.
var n16 = {lat: 26.131295, lng: -80.288532}; // Central Park Elementary School
var n17 = {lat: 26.138493, lng: -80.294159}; // Bridgewater Homeowners Association Clubhouse
var n18 = {lat: 26.124043, lng: -80.253761}; // St. Gregory's Catholic Church
var n19 = {lat: 26.160034, lng: -80.304161}; // Plantation Baptist Church
var votingPlace;
function initMap() {	
	var bounds = new google.maps.LatLngBounds;
	var markersArray = [];
	var origin = document.getElementById('addressBox').value;
	var cityHall = {lat: 26.127516, lng: -80.244401}; 

	var shortestDistance = 10000000000000;
	var num;

	var destinationIcon = 'https://chart.googleapis.com/chart?' +
		'chst=d_map_pin_letter&chld=D|FF0000|000000';
	var originIcon = 'https://chart.googleapis.com/chart?' +
		'chst=d_map_pin_letter&chld=O|FFFF00|000000';
	var map = new google.maps.Map(document.getElementById('map'), {
	  center: {cityHall},
	  zoom: 20
	});
	var directionsService = new google.maps.DirectionsService();
	var directionsRenderer = new google.maps.DirectionsRenderer();
	directionsRenderer.setMap(map);
	directionsRenderer.setPanel(document.getElementById('output'));

	var geocoder = new google.maps.Geocoder;

	var service = new google.maps.DistanceMatrixService;
	service.getDistanceMatrix({
		origins: [origin],
		destinations: [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12, n13, n14, n15, n16, n17, n18, n19],
		travelMode: 'DRIVING',
		unitSystem: google.maps.UnitSystem.IMPERIAL,
		avoidHighways: false,
		avoidTolls: false
	}, function(response, status) {
		if (status !== 'OK') {
			alert('Error was: ' + status);
	    } else {
			var originList = response.originAddresses;
			var destinationList = response.destinationAddresses;
			var outputDiv = document.getElementById('output');
			outputDiv.innerHTML = '';
			deleteMarkers(markersArray);
			var showGeocodedAddressOnMap = function(asDestination) {
			  var icon = asDestination ? destinationIcon : originIcon;
			  return function(results, status) {
				if (status === 'OK') {
				  map.fitBounds(bounds.extend(results[0].geometry.location));
				  markersArray.push(new google.maps.Marker({
					map: map,
					position: results[0].geometry.location,
					icon: icon
				  }));
				} else {
				  alert('Geocode was not successful due to: ' + status);
				}
			  };
			};
			
			for (var i = 0; i < originList.length; i++) {
			  var results = response.rows[i].elements;
			  geocoder.geocode({'address': originList[i]},
				  showGeocodedAddressOnMap(false));	  
			  for (var j = 0; j < results.length; j++) {
				if (results[j].distance.value < shortestDistance){
					shortestDistance = results[j].distance.value;
					num = j;
				}
			  }
			}
		  geocoder.geocode({'address': destinationList[num]},
					showGeocodedAddressOnMap(true));
			votingPlace = destinationList[num];
			document.getElementById("pageInfo").innerHTML += "Your Voting Location is: " + locationArray[num];

			calculateAndDisplayRoute(directionsService, directionsRenderer);

		 }
		});
		}
		function deleteMarkers(markersArray) {
		for (var i = 0; i < markersArray.length; i++) {
		  markersArray[i].setMap(null);
		}
		markersArray = [];
		}
		function calculateAndDisplayRoute(directionsService, directionsRenderer) {
			var origin = document.getElementById('addressBox').value;
		directionsService.route(
			{
			  origin: origin,
			  destination: votingPlace,
			  travelMode: 'DRIVING'
			},
			function(response, status) {
			  if (status === 'OK') {
				directionsRenderer.setDirections(response);
			  } else {
				window.alert('Directions request failed due to ' + status);
			  }
			});
		}