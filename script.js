// script for the modal click
let regionBios = [
  "Logan logan logan logan logan logan Logan logan logan logan logan loganLogan logan logan logan logan loganLogan logan logan logan logan logan",
  " Wasatch Wasatch Wasatch Wasatch Wasatch WasatchWasatch Wasatch Wasatch WasatchWasatch Wasatch Wasatch Wasatch Wasatch WasatchWasatch Wasatch Wasatch Wasatch",
  "Uintas Uintas Uintas Uintas Uintas Uintas Uintas Uintas Uintas UintasUintas Uintas Uintas Uintas UintasUintas Uintas Uintas Uintas UintasUintas Uintas Uintas Uintas Uintas",
  "Joe's Valley Joes Valley Joes Valley Joe's Valley Joes Valley Joes Valley Joe's Valley Joes Valley Joes Valley Joe's Valley Joes Valley Joes Valley Joe's Valley Joes Valley Joes Valley  ",
  "Moab Moab Moab Moab Moab Moab Moab Moab Moab Moab Moab MoabMoab Moab Moab Moab Moab MoabMoab Moab Moab Moab Moab MoabMoab Moab Moab Moab Moab MoabMoab Moab Moab Moab Moab Moab ",
  " St George St GeorgeSt George St GeorgeSt George St GeorgeSt George St GeorgeSt George St GeorgeSt George St GeorgeSt George St GeorgeSt George St GeorgeSt George St GeorgeSt George St George",
  "Zion Zion Zion Zion Zion ZionZion Zion ZionZion Zion ZionZion Zion ZionZion Zion ZionZion Zion ZionZion Zion ZionZion Zion ZionZion Zion ZionZion Zion ZionZion Zion ZionZion Zion ZionZion Zion Zion",
  " Cedar Mesa Cedar Mesa Cedar Mesa Cedar MesaCedar Mesa Cedar MesaCedar Mesa Cedar MesaCedar Mesa Cedar MesaCedar Mesa Cedar MesaCedar Mesa Cedar MesaCedar Mesa Cedar MesaCedar Mesa Cedar Mesa",
];



//modal button and events
$(".modal-button").click(function () {
  $(".modal").addClass("is-active");



  let modalTitle = $("#region-name-h1");
  let modalBio = $("#region-bio-p");

  let btn = $(event.currentTarget);
  let btnName = btn.attr("data-location");
  console.log(btnName);
  modalTitle.text(btnName);

  if (btnName === "logan") {
    modalBio.text(regionBios[0]);
    var citySearch = "5777544";
  } else if (btnName === "wasatch") {
    modalBio.text(regionBios[1]);
    citySearch = "4846729";
  } else if (btnName === "uintas") {
    modalBio.text(regionBios[2]);
    citySearch = "5776692";
  } else if (btnName === "joesvalley") {
    modalBio.text(regionBios[3]);
    citySearch = "5544402";
  } else if (btnName === "moab") {
    modalBio.text(regionBios[4]);
    citySearch = "5543307";
  } else if (btnName === "stgeorge") {
    modalBio.text(regionBios[5]);
    citySearch = "5546220";
  } else if (btnName === "zion") {
    modalBio.text(regionBios[6]);
    citySearch = "5549225";
  } else {
    modalBio.text(regionBios[7]);
    citySearch = "5535484";
  }

  var fiveDayW =
    "https://api.openweathermap.org/data/2.5/forecast?id=" +
    citySearch +
    "&appid=9f0120827a50e9a11f1c94d939f4dbfc&units=imperial";

  var currentDayW =
    "https://api.openweathermap.org/data/2.5/weather?id=" +
    citySearch +
    "&appid=9f0120827a50e9a11f1c94d939f4dbfc&units=imperial";

  //Current forecast
  $.ajax({
    url: currentDayW,
    method: "GET",
  }).then(function (response) {
    //Display Current Date
    var currentDate = moment().format("L");

    var cDate = $(".date").text(currentDate);

    //Generating Weather Icon
    var icons = response.weather[0].icon;

    var weatherIcon = "https://openweathermap.org/img/wn/" + icons + ".png";

    var wIcon = $(".weather-icon").attr("src", weatherIcon);
    var wIcon = $(".weather-icon").attr("alt", "current weather icon");

    //Current Weather Temp, Humidity, Wind Speed Append
    var cWeather = $("#current-weather");

    cWeather.empty();

    var currentTemp = $("<p>").text(
      "Current Temperature: " + response.main.temp + " °F"
    );
    var currentHum = $("<p>").text(
      "Current Humidity: " + response.main.humidity + "%"
    );
    var windSpeed = $("<p>").text("Wind Speed: " + response.wind.speed + "mph");

    cWeather.append(currentTemp, currentHum, windSpeed);
  });

  //5 day forecast call
  $.ajax({
    url: fiveDayW,
    method: "GET",
  }).then(function (response) {
    function cardFun(addNumber, apiList, currentDay) {
      //Day +1 into the future
      var dayDate = moment().add(addNumber, "day").format("dddd");
      var dateDay = $("<p>").text(dayDate);

      //setting temp and hum
      var DayTemp = $("<p>").text(
        "Temperature: " + response.list[apiList].main.temp + " F"
      );
      var DayHum = $("<p>").text(
        "Humidity " + response.list[apiList].main.humidity + "%"
      );

      //var to append
      var fiveDay = $(".day-" + currentDay);

      fiveDay.empty();

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

  

  //fetch map to display on click
  
});

function fetchMapData(map) {
  $.getJSON(`../../data/${map}.json`, generateMap);
}

$(".modal-button").click(function () {
  $(".modal").addClass("is-active");
  console.log('clicked');

  const location = $(this).data('location');

  fetchMapData(location);

});

//function to generate map
function generateMap(data) {
  console.log(data);
  mapboxgl.accessToken =
    "pk.eyJ1IjoiY2Jvc3dlbDEiLCJhIjoiY2tlajdyNm5mMDQ1cjJ6dDZzdGp4eWkwaCJ9.gWfilc1vYPS6ok4D9WRydw";
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",

  

    //Sets Lat and Long for
    center: data.center,
    zoom: data.zoom,
  });


  map.on("load", function () {
    map.addSource("places", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: data.features,
      },
    });
    // Add a layer showing the places.
    map.addLayer({
      id: "places",
      type: "symbol",
      source: "places",
      layout: {
        "icon-image": "{icon}-15",
        "icon-size": 1.0,
        "icon-allow-overlap": true,
      },
    });

    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on("click", "places", function (e) {
      var coordinates = e.features[0].geometry.coordinates.slice();
      var description = e.features[0].properties.description;

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on("mouseenter", "places", function () {
      map.getCanvas().style.cursor = "pointer";
    });

    // Change it back to a pointer when it leaves.
    map.on("mouseleave", "places", function () {
      map.getCanvas().style.cursor = "";
    });
  });
}

$(".modal-close").click(function () {
  $(".modal").removeClass("is-active");
});




