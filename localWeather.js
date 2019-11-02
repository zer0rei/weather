// // // // // // // // // //
//  LOCAL WEATHER (by HE)  //
// // // // // // // // // //

$(document).ready(function() {
  // Get the forcast and update the html
  function getForecast(lat, lon) {
    $.getJSON(
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
        lat +
        "&lon=" +
        lon +
        "&APPID=27c54beef6c753f6da8ce9954b66293e",
      function(json) {
        // Info to html
        // Name
        if (json.name) $("#city").html(json.name);
        else $("#city").html(json.sys.country);

        // Temperature
        var tempCelsius = json.main.temp - 273.15;
        var tempFahrenheit = tempCelsius * (9 / 5) + 32;
        $("#temp").html(Math.round(tempCelsius));
        $("#degree").html(
          '<div class="btn-group" role="group" aria-label="...">' +
            '<button  id="celsius" type="button" class="btn btn-info active">' +
            '<i class="wi wi-celsius"></i>' +
            "</button>" +
            '<button id="fahrenheit" type="button" class="btn btn-info">' +
            '<i class="wi wi-fahrenheit"></i>' +
            "</button>" +
            "</div>"
        );
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
          Date.now = function() {
            return new Date().getTime();
          };
        }
        var currTime = Math.floor(Date.now() / 1000);
        if (currTime >= json.sys.sunrise && currTime < json.sys.sunset) {
          $("#weatherIcon").html(
            '<i class="wi wi-owm-day-' + weatherStateId + '"></i>'
          );
        } else {
          $("#weatherIcon").html(
            '<i class="wi wi-owm-night-' + weatherStateId + '"></i>'
          );
        }

        // Description below icon
        $("#description").html(json.weather[0].description);
      }
    ); // <<< getJSON
  } // <<< getForecast

  // Get geolocation from user and run getForcast
  if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  else errorCallback();

  // If geolocation chosen
  function successCallback(position) {
    getForecast(position.coords.latitude, position.coords.longitude);
  }

  // If geolocation rejected
  function errorCallback() {
    $.getJSON("https://ipinfo.io/json", function(json) {
      var cord = json.loc.split(",");
      getForecast(Number(cord[0]), Number(cord[1]));
    });
    $("#geolocAlert").css("display", "block");
  }

  // Blink jumborton subtitle link
  (function blink() {
    $(".jumbotron a")
      .delay(3500)
      .fadeOut(300)
      .fadeIn(300, blink);
  })();
}); // <<< ready
