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
   

//BUtton 2 
$("#launchZionModal").click(function() {
 
    $(".modal").addClass("is-active"); 
   
  });
   
  $(".modal-close").click(function() {
   
     $(".modal").removeClass("is-active");
   
  });
   
  $("#closeZionbtn").click(function() {
   
     $(".modal").removeClass("is-active");
   
  });
   
  $("#closeZioncross").click(function() {
   
     $(".modal").removeClass("is-active");
   
  });

  //BUtton 2 
$("#launchMoabModal").click(function() {
 
    $(".modal").addClass("is-active"); 
   
  });
   
  $(".modal-close").click(function() {
   
     $(".modal").removeClass("is-active");
   
  });
   
  $("#closeMoabbtn").click(function() {
   
     $(".modal").removeClass("is-active");
   
  });
   
  $("#closeMoabcross").click(function() {
   
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


      var fiveDay = $(".day-" + currentDay);

      

      fiveDay.append(dateDay, DayTemp, DayHum);
  }

  cardFun(1, 0, "one");
  cardFun(2, 8, "two");
  cardFun(3, 16, "three");
  cardFun(4, 24, "four"); 
  cardFun(5, 32, "five");
});
    