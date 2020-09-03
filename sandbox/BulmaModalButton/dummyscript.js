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

//BUtton 2
$("#launchMoabModal").click(function () {
  $(".modal").addClass("is-active");
});

$(".modal-close").click(function () {
  $(".modal").removeClass("is-active");
});

$("#closeMoabbtn").click(function () {
  $(".modal").removeClass("is-active");
});

$("#closeMoabcross").click(function () {
  $(".modal").removeClass("is-active");
});

var fiveDayW =
  "https://api.openweathermap.org/data/2.5/forecast?q=Moab&appid=9f0120827a50e9a11f1c94d939f4dbfc&units=imperial";

var trailData =
  "https://www.mtbproject.com/data/get-trails-by-id?ids=3999652&key=200138078-de19b7418c037c926c033e53b7184dcb";

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

//MTB Project API and append for trail info

$.ajax({
  url:
    "https://www.mtbproject.com/data/get-trails-by-id?ids=3999652&key=200138078-de19b7418c037c926c033e53b7184dcb",
  method: "GET",
}).then(function (response) {
  var jemData = $("<p>").text("Trail Name: " + response.trails[0].name);
  var jemDiff = $("<p>").text("Difficulty: " + response.trails[0].difficulty);
  var jemRating = $("<p>").text("User Rating: " + response.trails[0].stars);
  var jemCon = $("<p>").text(
    "Most Recent Conditions: " + response.trails[0].conditionStatus
  );
  var jemConDet = $("<p>").text(
    "Details: " + response.trails[0].conditionDetails
  );
  var jemConDate = $("<p>").text(
    "Date Reported: " + response.trails[0].conditionDate
  );

  var mtbData = $(".jem-data");

  mtbData.append(jemData, jemDiff, jemRating, jemCon, jemConDet, jemConDate);

  console.log(response.trails[0].id);
});


//Map Box For General Zion Area

//Clickable map icons and descriptions 


//You'll need to add these to HTML Head
//<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
//<script src="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js"></script>
//<link href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css" rel="stylesheet" /> 

//Add this to body where you want map 
//<div id="map"></div>

//Add these to Style 

	//body { margin: 0; padding: 0; }
	//#map { position: absolute; top: 0; bottom: 0; width: 100%; }


/* .mapboxgl-popup {
max-width: 400px;
font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
} */


mapboxgl.accessToken =
  "pk.eyJ1IjoiY2Jvc3dlbDEiLCJhIjoiY2tlajdyNm5mMDQ1cjJ6dDZzdGp4eWkwaCJ9.gWfilc1vYPS6ok4D9WRydw";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",

  //Sets Lat and Long for
  center: [-111.7326771, 40.6157054],
  zoom: 9.00,
});



map.on("load", function () {
  map.addSource("places", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<a href="https://www.mtbproject.com/trail/3999652/jem-trail target="_blank" title="Opens in a new window""><strong>JEM Trail</strong></a><p>Rating: Blue Square</p> A heavily trafficked system of cross country trails consisting of beginner to moderate difficulty. Excellent for visitors looking to get the desert Mountain Bike experience without the fear of extreme downhill riding.</p> ',
            icon: "bicycle",
            
          },
          geometry: {
            type: "Point",
            coordinates: [-111.51491, 40.6560426],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<a href="https://www.mountainproject.com/route/105717718/the-moonlight-buttress-clean-aid" target="_blank" title="Opens in a new window"><strong>Moonlight Buttress</strong></a><p>Rating: 5.8 C1.</p><p> The most famous Zion line. While you need adequate climbing experience and skills to complete this route, you can often enjoy the view from the road, as this route sees plenty of traffic throughout the climbing season </p>',
            icon: "mountain",
          },
          geometry: {
            type: "Point",
            coordinates: [-111.8599227, 40.7867802],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<a href="https://www.mtbproject.com/trail/4183760/gooseberry-mesa-the-big-loop" target="_blank" title="Opens in a new window"><strong>Gooseberry Mesa</strong></a><p>Rating: Black Diamond</p><p> The premiere Slickrock trail in the greater Zion Area. The undulating dips and twists of Gooseberry Mesa have made it one of the most popular Mountain Biking Trails in the world. While not for absolute beginners, most riders will find something enjoyable to ride.</p>',
            icon: "bicycle",
          },
          geometry: {
            type: "Point",
            coordinates: [-111.468117, 40.5033512],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<a href="https://www.hikingproject.com/gem/56/the-narrows" target="_blank" title="Opens in a new window"><strong>The Narrows</strong></a><p>The Narrows is the most famous and trafficked trail in Zion. Not for the faint of heart, the trail does require hikers to enter the Virgin River itself and hike up stream. It is recommended that rent gear from a local Outfitter for this hike</p>',
            icon: "shoe",
          },
          geometry: {
            type: "Point",
            coordinates: [-112.9637062, 37.2967228],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<a href="https://www.hikingproject.com/trail/7001606/west-rim-trail" target="_blank" title="Opens in a new window"><strong>The West Rim Trail</strong></a><p>An amazing 13 mile backpacking trail that begins in the high alpine and traverses back into Zion canyon. </p>',
            icon: "shoe",
          },
          geometry: {
            type: "Point",
            coordinates: [-112.9957071, 37.3200179],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<a href="https://www.tripadvisor.com/Tourism-g61001-Springdale_Utah-Vacations.html" target="_blank" title="Opens in a new window"><strong>Springdale</strong></a><p>The gateway community to Zion National Park, Springdale is the first stop for all of your adventure needs. Lodging, Outfitters, and a wealth of Restaurants can be find in this small desert town.</p>',
            icon: "lodging",
          },
          geometry: {
            type: "Point",
            coordinates: [-112.9986, 37.1889],
          },
        },
        
      ],
    },
  });
  // Add a layer showing the places.
  map.addLayer({
    id: "places",
    type: "symbol",
    source: "places",
    layout: {
      "icon-image": "{icon}-15",
      "icon-size": 1.00,
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

    new mapboxgl.Popup().setLngLat(coordinates).setHTML(description).addTo(map);
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
