var OPEN_WEATHER_MAP_API_KEY = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"; //replace with your own API key
$(function() {
  $.getJSON("http://ip-api.com/json",function(data) {
    console.log(data.lat + "," + data.lon);
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + data.lat + "&lon=" + data.lon + "&appid=" + OPEN_WEATHER_MAP_API_KEY,function(data) {
      console.log("Weather: " + data.weather[0].main);
      console.log("Temp in C: " + (data.main.temp-273.15));
      console.log("Temp in F: " + (((data.main.temp-273.15) * 1.8) + 32));
	$('#weather').html(data.weather[0].main);
	$('#tempC').html( (data.main.temp-273.15) );
	$('#tempF').html( (((data.main.temp-273.15) * 1.8) + 32) );
    });
  });
});
