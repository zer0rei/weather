// // // // // // // // // //
//  LOCAL WEATHER (by HE)  //
// // // // // // // // // //

$(document).ready(function() {
	// Get the forcast and update the html
	function getForecast(lat, lon) {
		$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="
					+ lat + "&lon=" + lon + "&APPID=27c54beef6c753f6da8ce9954b66293e"
					, function(json) {

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
				'<div class="btn-group" role="group" aria-label="...">\
					<button  id="celsius" type="button" class="btn btn-info active">\
						<i class="wi wi-celsius"></i>\
					</button>\
					<button id="fahrenheit" type="button" class="btn btn-info">\
						<i class="wi wi-fahrenheit"></i>\
					</button>\
				</div>')
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
				var weatherStateId = json.weather[0].id;
				if (!Date.now) {
					Date.now = function() { return new Date().getTime(); }
				}
				var currTime = Math.floor(Date.now() / 1000);
				if (currTime >= json.sys.sunrise && currTime < json.sys.sunset) {
					if (weatherStateId == 200)
						$("#weatherIcon").html('<i class="wi wi-owm-day-200"></i>');
					else if (weatherStateId == 201)
						$("#weatherIcon").html('<i class="wi wi-owm-day-201"></i>');
					else if (weatherStateId == 202)
						$("#weatherIcon").html('<i class="wi wi-owm-day-202"></i>');
					else if (weatherStateId == 210)
						$("#weatherIcon").html('<i class="wi wi-owm-day-210"></i>');
					else if (weatherStateId == 211)
						$("#weatherIcon").html('<i class="wi wi-owm-day-211"></i>');
					else if (weatherStateId == 212)
						$("#weatherIcon").html('<i class="wi wi-owm-day-212"></i>');
					else if (weatherStateId == 221)
						$("#weatherIcon").html('<i class="wi wi-owm-day-221"></i>');
					else if (weatherStateId == 230)
						$("#weatherIcon").html('<i class="wi wi-owm-day-230"></i>');
					else if (weatherStateId == 231)
						$("#weatherIcon").html('<i class="wi wi-owm-day-231"></i>');
					else if (weatherStateId == 232)
						$("#weatherIcon").html('<i class="wi wi-owm-day-232"></i>');
					else if (weatherStateId == 300)
						$("#weatherIcon").html('<i class="wi wi-owm-day-300"></i>');
					else if (weatherStateId == 301)
						$("#weatherIcon").html('<i class="wi wi-owm-day-301"></i>');
					else if (weatherStateId == 302)
						$("#weatherIcon").html('<i class="wi wi-owm-day-302"></i>');
					else if (weatherStateId == 310)
						$("#weatherIcon").html('<i class="wi wi-owm-day-310"></i>');
					else if (weatherStateId == 311)
						$("#weatherIcon").html('<i class="wi wi-owm-day-311"></i>');
					else if (weatherStateId == 312)
						$("#weatherIcon").html('<i class="wi wi-owm-day-312"></i>');
					else if (weatherStateId == 313)
						$("#weatherIcon").html('<i class="wi wi-owm-day-313"></i>');
					else if (weatherStateId == 314)
						$("#weatherIcon").html('<i class="wi wi-owm-day-314"></i>');
					else if (weatherStateId == 321)
						$("#weatherIcon").html('<i class="wi wi-owm-day-321"></i>');
					else if (weatherStateId == 500)
						$("#weatherIcon").html('<i class="wi wi-owm-day-500"></i>');
					else if (weatherStateId == 501)
						$("#weatherIcon").html('<i class="wi wi-owm-day-501"></i>');
					else if (weatherStateId == 502)
						$("#weatherIcon").html('<i class="wi wi-owm-day-502"></i>');
					else if (weatherStateId == 503)
						$("#weatherIcon").html('<i class="wi wi-owm-day-503"></i>');
					else if (weatherStateId == 504)
						$("#weatherIcon").html('<i class="wi wi-owm-day-504"></i>');
					else if (weatherStateId == 511)
						$("#weatherIcon").html('<i class="wi wi-owm-day-511"></i>');
					else if (weatherStateId == 520)
						$("#weatherIcon").html('<i class="wi wi-owm-day-520"></i>');
					else if (weatherStateId == 521)
						$("#weatherIcon").html('<i class="wi wi-owm-day-521"></i>');
					else if (weatherStateId == 522)
						$("#weatherIcon").html('<i class="wi wi-owm-day-522"></i>');
					else if (weatherStateId == 531)
						$("#weatherIcon").html('<i class="wi wi-owm-day-531"></i>');
					else if (weatherStateId == 600)
						$("#weatherIcon").html('<i class="wi wi-owm-day-600"></i>');
					else if (weatherStateId == 601)
						$("#weatherIcon").html('<i class="wi wi-owm-day-601"></i>');
					else if (weatherStateId == 602)
						$("#weatherIcon").html('<i class="wi wi-owm-day-602"></i>');
					else if (weatherStateId == 611)
						$("#weatherIcon").html('<i class="wi wi-owm-day-611"></i>');
					else if (weatherStateId == 612)
						$("#weatherIcon").html('<i class="wi wi-owm-day-612"></i>');
					else if (weatherStateId == 615)
						$("#weatherIcon").html('<i class="wi wi-owm-day-615"></i>');
					else if (weatherStateId == 616)
						$("#weatherIcon").html('<i class="wi wi-owm-day-616"></i>');
					else if (weatherStateId == 620)
						$("#weatherIcon").html('<i class="wi wi-owm-day-620"></i>');
					else if (weatherStateId == 621)
						$("#weatherIcon").html('<i class="wi wi-owm-day-621"></i>');
					else if (weatherStateId == 622)
						$("#weatherIcon").html('<i class="wi wi-owm-day-622"></i>');
					else if (weatherStateId == 701)
						$("#weatherIcon").html('<i class="wi wi-owm-day-701"></i>');
					else if (weatherStateId == 711)
						$("#weatherIcon").html('<i class="wi wi-owm-day-711"></i>');
					else if (weatherStateId == 721)
						$("#weatherIcon").html('<i class="wi wi-owm-day-721"></i>');
					else if (weatherStateId == 731)
						$("#weatherIcon").html('<i class="wi wi-owm-day-731"></i>');
					else if (weatherStateId == 741)
						$("#weatherIcon").html('<i class="wi wi-owm-day-741"></i>');
					else if (weatherStateId == 761)
						$("#weatherIcon").html('<i class="wi wi-owm-day-761"></i>');
					else if (weatherStateId == 762)
						$("#weatherIcon").html('<i class="wi wi-owm-day-762"></i>');
					else if (weatherStateId == 781)
						$("#weatherIcon").html('<i class="wi wi-owm-day-781"></i>');
					else if (weatherStateId == 800)
						$("#weatherIcon").html('<i class="wi wi-owm-day-800"></i>');
					else if (weatherStateId == 801)
						$("#weatherIcon").html('<i class="wi wi-owm-day-801"></i>');
					else if (weatherStateId == 802)
						$("#weatherIcon").html('<i class="wi wi-owm-day-802"></i>');
					else if (weatherStateId == 803)
						$("#weatherIcon").html('<i class="wi wi-owm-day-803"></i>');
					else if (weatherStateId == 804)
						$("#weatherIcon").html('<i class="wi wi-owm-day-804"></i>');
					else if (weatherStateId == 900)
						$("#weatherIcon").html('<i class="wi wi-owm-day-900"></i>');
					else if (weatherStateId == 902)
						$("#weatherIcon").html('<i class="wi wi-owm-day-902"></i>');
					else if (weatherStateId == 903)
						$("#weatherIcon").html('<i class="wi wi-owm-day-903"></i>');
					else if (weatherStateId == 904)
						$("#weatherIcon").html('<i class="wi wi-owm-day-904"></i>');
					else if (weatherStateId == 906)
						$("#weatherIcon").html('<i class="wi wi-owm-day-906"></i>');
					else if (weatherStateId == 957)
						$("#weatherIcon").html('<i class="wi wi-owm-day-957"></i>');
				}
				else {
					if (weatherStateId == 200)
						$("#weatherIcon").html('<i class="wi wi-owm-night-200"></i>');
					else if (weatherStateId == 201)
						$("#weatherIcon").html('<i class="wi wi-owm-night-201"></i>');
					else if (weatherStateId == 202)
						$("#weatherIcon").html('<i class="wi wi-owm-night-202"></i>');
					else if (weatherStateId == 210)
						$("#weatherIcon").html('<i class="wi wi-owm-night-210"></i>');
					else if (weatherStateId == 211)
						$("#weatherIcon").html('<i class="wi wi-owm-night-211"></i>');
					else if (weatherStateId == 212)
						$("#weatherIcon").html('<i class="wi wi-owm-night-212"></i>');
					else if (weatherStateId == 221)
						$("#weatherIcon").html('<i class="wi wi-owm-night-221"></i>');
					else if (weatherStateId == 230)
						$("#weatherIcon").html('<i class="wi wi-owm-night-230"></i>');
					else if (weatherStateId == 231)
						$("#weatherIcon").html('<i class="wi wi-owm-night-231"></i>');
					else if (weatherStateId == 232)
						$("#weatherIcon").html('<i class="wi wi-owm-night-232"></i>');
					else if (weatherStateId == 300)
						$("#weatherIcon").html('<i class="wi wi-owm-night-300"></i>');
					else if (weatherStateId == 301)
						$("#weatherIcon").html('<i class="wi wi-owm-night-301"></i>');
					else if (weatherStateId == 302)
						$("#weatherIcon").html('<i class="wi wi-owm-night-302"></i>');
					else if (weatherStateId == 310)
						$("#weatherIcon").html('<i class="wi wi-owm-night-310"></i>');
					else if (weatherStateId == 311)
						$("#weatherIcon").html('<i class="wi wi-owm-night-311"></i>');
					else if (weatherStateId == 312)
						$("#weatherIcon").html('<i class="wi wi-owm-night-312"></i>');
					else if (weatherStateId == 313)
						$("#weatherIcon").html('<i class="wi wi-owm-night-313"></i>');
					else if (weatherStateId == 314)
						$("#weatherIcon").html('<i class="wi wi-owm-night-314"></i>');
					else if (weatherStateId == 321)
						$("#weatherIcon").html('<i class="wi wi-owm-night-321"></i>');
					else if (weatherStateId == 500)
						$("#weatherIcon").html('<i class="wi wi-owm-night-500"></i>');
					else if (weatherStateId == 501)
						$("#weatherIcon").html('<i class="wi wi-owm-night-501"></i>');
					else if (weatherStateId == 502)
						$("#weatherIcon").html('<i class="wi wi-owm-night-502"></i>');
					else if (weatherStateId == 503)
						$("#weatherIcon").html('<i class="wi wi-owm-night-503"></i>');
					else if (weatherStateId == 504)
						$("#weatherIcon").html('<i class="wi wi-owm-night-504"></i>');
					else if (weatherStateId == 511)
						$("#weatherIcon").html('<i class="wi wi-owm-night-511"></i>');
					else if (weatherStateId == 520)
						$("#weatherIcon").html('<i class="wi wi-owm-night-520"></i>');
					else if (weatherStateId == 521)
						$("#weatherIcon").html('<i class="wi wi-owm-night-521"></i>');
					else if (weatherStateId == 522)
						$("#weatherIcon").html('<i class="wi wi-owm-night-522"></i>');
					else if (weatherStateId == 531)
						$("#weatherIcon").html('<i class="wi wi-owm-night-531"></i>');
					else if (weatherStateId == 600)
						$("#weatherIcon").html('<i class="wi wi-owm-night-600"></i>');
					else if (weatherStateId == 601)
						$("#weatherIcon").html('<i class="wi wi-owm-night-601"></i>');
					else if (weatherStateId == 602)
						$("#weatherIcon").html('<i class="wi wi-owm-night-602"></i>');
					else if (weatherStateId == 611)
						$("#weatherIcon").html('<i class="wi wi-owm-night-611"></i>');
					else if (weatherStateId == 612)
						$("#weatherIcon").html('<i class="wi wi-owm-night-612"></i>');
					else if (weatherStateId == 615)
						$("#weatherIcon").html('<i class="wi wi-owm-night-615"></i>');
					else if (weatherStateId == 616)
						$("#weatherIcon").html('<i class="wi wi-owm-night-616"></i>');
					else if (weatherStateId == 620)
						$("#weatherIcon").html('<i class="wi wi-owm-night-620"></i>');
					else if (weatherStateId == 621)
						$("#weatherIcon").html('<i class="wi wi-owm-night-621"></i>');
					else if (weatherStateId == 622)
						$("#weatherIcon").html('<i class="wi wi-owm-night-622"></i>');
					else if (weatherStateId == 701)
						$("#weatherIcon").html('<i class="wi wi-owm-night-701"></i>');
					else if (weatherStateId == 711)
						$("#weatherIcon").html('<i class="wi wi-owm-night-711"></i>');
					else if (weatherStateId == 721)
						$("#weatherIcon").html('<i class="wi wi-owm-night-721"></i>');
					else if (weatherStateId == 731)
						$("#weatherIcon").html('<i class="wi wi-owm-night-731"></i>');
					else if (weatherStateId == 741)
						$("#weatherIcon").html('<i class="wi wi-owm-night-741"></i>');
					else if (weatherStateId == 761)
						$("#weatherIcon").html('<i class="wi wi-owm-night-761"></i>');
					else if (weatherStateId == 762)
						$("#weatherIcon").html('<i class="wi wi-owm-night-762"></i>');
					else if (weatherStateId == 781)
						$("#weatherIcon").html('<i class="wi wi-owm-night-781"></i>');
					else if (weatherStateId == 800)
						$("#weatherIcon").html('<i class="wi wi-owm-night-800"></i>');
					else if (weatherStateId == 801)
						$("#weatherIcon").html('<i class="wi wi-owm-night-801"></i>');
					else if (weatherStateId == 802)
						$("#weatherIcon").html('<i class="wi wi-owm-night-802"></i>');
					else if (weatherStateId == 803)
						$("#weatherIcon").html('<i class="wi wi-owm-night-803"></i>');
					else if (weatherStateId == 804)
						$("#weatherIcon").html('<i class="wi wi-owm-night-804"></i>');
					else if (weatherStateId == 900)
						$("#weatherIcon").html('<i class="wi wi-owm-night-900"></i>');
					else if (weatherStateId == 902)
						$("#weatherIcon").html('<i class="wi wi-owm-night-902"></i>');
					else if (weatherStateId == 903)
						$("#weatherIcon").html('<i class="wi wi-owm-night-903"></i>');
					else if (weatherStateId == 904)
						$("#weatherIcon").html('<i class="wi wi-owm-night-904"></i>');
					else if (weatherStateId == 906)
						$("#weatherIcon").html('<i class="wi wi-owm-night-906"></i>');
					else if (weatherStateId == 957)
						$("#weatherIcon").html('<i class="wi wi-owm-night-957"></i>');
				}

				// Description below icon
				$("#description").html(json.weather[0].description);
		}); // <<< getJSON
	} // <<< getForecast

	// Get geolocation from user and run getForcast
	if (navigator.geolocation)
		navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
	else
		errorCallback();

	// If geolocation chosen
	function successCallback(position) {
		getForecast(position.coords.latitude, position.coords.longitude);
	}

	// If geolocation rejected
	function errorCallback() {
		$.getJSON("http://ipinfo.io/json", function(json) {
			var cord = json.loc.split(",");
			getForecast(Number(cord[0]), Number(cord[1]));
		});
		$("#geolocAlert").css("display", "block");
	}

	// Blink jumborton subtitle link
	(function blink() {
		$(".jumbotron a").delay(3500).fadeOut(300).fadeIn(300, blink);
	})();

}); // <<< ready
