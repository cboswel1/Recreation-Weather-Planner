//Moab 5 day, will need to concat for different cities on map
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

// script for the modal click

$(".cls-1").click(function() {
  var target = $(this).data("target");
  $("html").addClass("is-clipped");
  $(target).addClass("is-active");
});

$(".modal-close").click(function() {
  $("html").removeClass("is-clipped");
  $(this).parent().removeClass("is-active");
});



// function to hide or show map based on tab opened
$(document).ready(function() {
 $('#tabs li').on('click', function() {
   var tab = $(this).data('tab');

   $('#tabs li').removeClass('is-active');
   $(this).addClass('is-active');

   $('#tab-content p').removeClass('is-active');
   $('p[data-content="' + tab + '"]').addClass('is-active');
 });
});