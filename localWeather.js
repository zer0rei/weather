$(document).ready(function() {
	// Get the forcast and update the html
	function getForecast(lat, lon) {
		$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=27c54beef6c753f6da8ce9954b66293e", function(json) {
			// Info to html

			// Name
			if (json.name)
				$("#city").html(json.name);
			else
				$("#city").html(json.sys.country);

			// Temperature
			var tempCelsius = (json.main.temp - 273.15);
			var tempFahrenheit = (tempCelsius * (9 / 5) + 32);
			$("#temp").html(Math.round(tempCelsius));
			$("#degree").html(
					'<div class="btn-group" role="group" aria-label="..."><button  id="celsius" type="button" class="btn btn-info active"><i class="wi wi-celsius"></i></button><button id="fahrenheit" type="button" class="btn btn-info"><i class="wi wi-fahrenheit"></i></button></div>')
				$("#celsius").click(function() {
					$("#temp").html(Math.round(tempCelsius));
					$("#fahrenheit").removeClass("active");
					$("#celsius").addClass("active");
				});
			$("#fahrenheit").click(function() {
				$("#temp").html(Math.round(tempFahrenheit));
				$("#celsius").removeClass("active");
				$("#fahrenheit").addClass("active");
			});

			// Icon per Weather state
			var weatherState = json.weather[0].main;
			if (!Date.now) {
				    Date.now = function() { return new Date().getTime(); }
			}
			var currTime = Math.floor(Date.now() / 1000);
			if (currTime >= json.sys.sunrise && currTime < json.sys.sunset) {
				if (weatherState == "Clear")
					$("#weatherIcon").html('<i class="wi wi-day-sunny"></i>');
				else if (weatherState == "Clouds")
					$("#weatherIcon").html('<i class="wi wi-day-cloudy"></i>');
				else if (weatherState == "Rain")
					$("#weatherIcon").html('<i class="wi wi-day-rain"></i>');
				else if (weatherState == "Drizzle")
					$("#weatherIcon").html('<i class="wi wi-day-sprinkle"></i>');
				else if (weatherState == "Snow")
					$("#weatherIcon").html('<i class="wi wi-day-snow"></i>');
				else if (weatherState == "Thunderstorm")
					$("#weatherIcon").html('<i class="wi wi-day-storm-showers"></i>');
			}
			else {
				if (weatherState == "Clear")
					$("#weatherIcon").html('<i class="wi wi-night-clear"></i>');
				else if (weatherState == "Clouds")
					$("#weatherIcon").html('<i class="wi wi-night-alt-cloudy"></i>');
				else if (weatherState == "Rain")
					$("#weatherIcon").html('<i class="wi wi-night-alt-rain"></i>');
				else if (weatherState == "Drizzle")
					$("#weatherIcon").html('<i class="wi wi-night-alt-sprinkle"></i>');
				else if (weatherState == "Snow")
					$("#weatherIcon").html('<i class="wi wi-night-snow"></i>');
				else if (weatherState == "Thunderstorm")
					$("#weatherIcon").html('<i class="wi wi-night-storm-showers"></i>');
			}

			// Description below icon
			$("#description").html(json.weather[0].description);
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
