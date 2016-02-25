$(document).ready(function() {
	// Get the forcast and update the html
	function getForecast(lat, lon) {
		$.getJSON("http://api.openweathermap.org/data/2.5/forecast/weather?lat=" + lat + "&lon=" + lon + "&APPID=27c54beef6c753f6da8ce9954b66293e", function(json) {
			// Info to html
			if (json.city.name)
				$("#city").html(json.city.name);
			else
				$("#city").html(json.country.name);
			$("#temp").html(Math.round(json.list[0].main.temp - 273.15));
			$("#degree").html(
					'<div class="btn-group" role="group" aria-label="..."><button  id="celsius" type="button" class="btn btn-info active"><i class="wi wi-celsius"></i></button><button id="fahrenheit" type="button" class="btn btn-info"><i class="wi wi-fahrenheit"></i></button></div>')
				$("#celsius").click(function() {
					$("#temp").html(Math.round(json.list[0].main.temp - 273.15));
					$("#fahrenheit").removeClass("active");
					$("#celsius").addClass("active");
				});
			$("#fahrenheit").click(function() {
				$("#temp").html(Math.round((json.list[0].main.temp - 273.15) * (9 / 5) + 32));
				$("#celsius").removeClass("active");
				$("#fahrenheit").addClass("active");
			});
			var weatherState = json.list[0].weather[0].main;

			// Icon per Weather state
			if (weatherState == "Clear")
				if (json.list[0].sys.pod == "d")
					$("#weatherIcon").html('<i class="wi wi-day-sunny"></i>');
				else
					$("#weatherIcon").html('<i class="wi wi-night-clear"></i>');
			else if (weatherState == "Clouds")
				$("#weatherIcon").html('<i class="wi wi-cloudy"></i>');
			else if (weatherState == "Rain")
				$("#weatherIcon").html('<i class="wi wi-rain"></i>');
			else if (weatherState == "Snow")
				$("#weatherIcon").html('<i class="wi wi-snow"></i>');
			else if (weatherState == "Storm")
				$("#weatherIcon").html('<i class="wi wi-storm-showers"></i>');

			// Description below icon
			$("#description").html(json.list[0].weather[0].description);
		}); // <<< getJSON 
	} // <<< getForecast

	// Get geolocation from user and run getForcast
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
	} else
		errorCallback();

	// If geolocation chosen
	function successCallback(position) {
		getForecast(position.coords.latitude, position.coords.longitude);
	}
	// if geolocation rejected
	function errorCallback() {
		$.getJSON("http://ipinfo.io/json", function(json) {
			var cord = json.loc.split(",");
			getForecast(Number(cord[0]), Number(cord[1]));
		});
		$("#geolocAlert").css("display", "block");
	}

}); // <<< ready
