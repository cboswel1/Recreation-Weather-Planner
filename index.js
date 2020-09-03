//Button One
$("#launchModal").click(function () {
  $(".modal").addClass("is-active");
});

$(".modal-close").click(function () {
  $(".modal").removeClass("is-active");
});

$("#closebtn").click(function () {
  $(".modal").removeClass("is-active");
});

$("#closecross").click(function () {
  $(".modal").removeClass("is-active");
});

//BUtton 2
$("#launchZionModal").click(function () {
  $(".modal").addClass("is-active");
});

$(".modal-close").click(function () {
  $(".modal").removeClass("is-active");
});

$("#closeZionbtn").click(function () {
  $(".modal").removeClass("is-active");
});

$("#closeZioncross").click(function () {
  $(".modal").removeClass("is-active");
});

//Button 3
$("#launchWasatchModal").click(function () {
  $(".modal").addClass("is-active");
});

$(".modal-close").click(function () {
  $(".modal").removeClass("is-active");
});

$("#closeWasatchbtn").click(function () {
  $(".modal").removeClass("is-active");
});

$("#closeWasatchcross").click(function () {
  $(".modal").removeClass("is-active");
});

var fiveDayW =
  "https://api.openweathermap.org/data/2.5/forecast?q=Moab&appid=9f0120827a50e9a11f1c94d939f4dbfc&units=imperial";

var trailData =
  "https://www.mtbproject.com/data/get-trails-by-id?ids=3999652&key=200138078-de19b7418c037c926c033e53b7184dcb";

//

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

    var fiveDay = $(".day-" + currentDay);

    fiveDay.append(dateDay, DayTemp, DayHum);
  }

  cardFun(1, 0, "one");
  cardFun(2, 8, "two");
  cardFun(3, 16, "three");
  cardFun(4, 24, "four");
  cardFun(5, 32, "five");
});




function fetchMapData(map) {
  $.getJSON(`../../data/${map}.json`, generateMap);
}

$("#launchModal").click(function () {
    console.log('clicked');

    const location = $(this).data('location');


    fetchMapData(location);


    $(".modal").addClass("is-active");


});

$("#launchZionModal").click(function () {
  console.log('clicked');

  const location = $(this).data('location');


  fetchMapData(location);


  $(".modal").addClass("is-active");


});

$("#launchWasatchModal").click(function () {
  console.log('clicked');

  const location = $(this).data('location');


  fetchMapData(location);


  $(".modal").addClass("is-active");


});

/**
 * User clicks on button to trigger map modal
 * 
 * On modal trigger:
 * - get location selected (e.g. 'moab')
 * - fetch location data for map generation
 * - on location data response => generate map using data
 */



//moab
function generateMap(data) {
    console.log(data)
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
};

