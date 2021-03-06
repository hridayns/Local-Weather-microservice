var OPEN_WEATHER_MAP_API_KEY = "d78b40d9b884b3b0ce4db0a347f1dfa2"; //replace with your own API key
$(function() {
  // $.getJSON("https://ip-api.com/json",function(data) {
  // https://cors.io/?http://ip-api.com/json - to get through mixed content block (HTTPS)
  $.getJSON("https://ipapi.co/json/",function(data) { 
    lat = data.latitude;
    lon = data.longitude;
    console.log(lat + "," + lon);
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + OPEN_WEATHER_MAP_API_KEY,function(data) {
      console.log("Weather: " + data.weather[0].main);
      console.log("Temp in C: " + (data.main.temp-273.15));
      console.log("Temp in F: " + (((data.main.temp-273.15) * 1.8) + 32));
  $('#weather').html(data.weather[0].main);
  $('#tempC').html( (data.main.temp-273.15) );
  $('#tempF').html( (((data.main.temp-273.15) * 1.8) + 32) );
    });
  });
});
