//Button One 
$("#launchModal").click(function() {
 
    $(".modal").addClass("is-active"); 
   
  });
   
  $(".modal-close").click(function() {
   
     $(".modal").removeClass("is-active");
   
  });
   
  $("#closebtn").click(function() {
   
     $(".modal").removeClass("is-active");
   
  });
   
  $("#closecross").click(function() {
   
     $(".modal").removeClass("is-active");
   
  });
   



  var fiveDayW = "https://api.openweathermap.org/data/2.5/forecast?q=Moab&appid=9f0120827a50e9a11f1c94d939f4dbfc&units=imperial"; 
  
  
  //5 day forecast call
  $.ajax({
    url: fiveDayW,
    method: "GET"
}).then(function (response) {

  function cardFun(addNumber, apiList, currentDay) {
      //Day +1 into the future
      var dayDate = moment().add(addNumber, 'day').format('dddd');
      var dateDay = $("<p>").text(dayDate)

      //setting temp and hum 
      var DayTemp = $("<p>").text("Temperature: " + response.list[apiList].main.temp + " F");
      var DayHum = $("<p>").text("Humidity " + response.list[apiList].main.humidity + "%");

      //var to append
      var fiveDay = $(".day-" + currentDay);

      
      // append
      fiveDay.append(dateDay, DayTemp, DayHum);
  }
  //day one
  cardFun(1, 0, "one");

  //day two
  cardFun(2, 8, "two");

  //day three
  cardFun(3, 16, "three");

  //day four
  cardFun(4, 24, "four"); 

  //day five
  cardFun(5, 32, "five");
});
   
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://national-weather-service.p.rapidapi.com/products/types/%7BtypeId%7D",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "national-weather-service.p.rapidapi.com",
		"x-rapidapi-key": "41917cf2a2mshc60213aa746a069p1659bdjsn322b5949aecc"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});