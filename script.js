// script for the modal click
let regionBios = [
  "Logan is another area in Utah that is not to be missed, this college town is marked by its quick and easy access to trails and climbing areas. Logan Canyon is a popular spot to Mountain Bike, Rock Climb and Hike as it is only a few minutes from downtown Logan. The China Cave is one of the earlier developed limestone climbing areas and holds some of America’s firsts in terms of difficulty ratings for rock climbs. The Wind Caves being the most popular trail as it boasts some unique views peering though a large cave. If you continue to drive up the canyon you will find the scenic Bear Lake and the Hodges Canyon mountain bike trail which leads into Garden City which is a nice place to enjoy the view and grab a bite to eat.",
  " The Wasatch provides unparalleled access to the mountains from the urban center that is Salt Lake City. A 20-minute drive from downtown yields an abundance of hiking, biking and climbing experiences. The climbing is highlighted by the old school test pieces on the slick granite of Little Cottonwood Canyon and the steep overhung climbing of American Fork a little further South. Millcreek Canyon hosts 19 trails many of which can also be mountain biked on certain days of the week.  The Wasatch Crest Trail near Alta offers an awesome high-altitude single-track experience for those looking to experience the mountains. There really is no limit to the amount of Outdoor activities that the Wasatch has to offer year-round. There is no doubt that if you are looking to enjoy the mountains in close proximity to the city than spending time in the Wasatch will not disappoint.",
  "The high Uinta’s are truly a paradise during the hot summer months when the temperatures in the Salt Lake Valley climb. An exceedingly popular destination there is no shortage of trails to explore along the Mirror Lake Highway. Short day hikes around Wall Lake or to the Summit of Bald Mountain make for perfect half day outings. While longer treks into Rock Creek Basin or Deadhorse lake make for excellent multi day backpacking trips. The nearby town of Kamas has a concentration of mountain biking Trails as well as a concentration of small diners if you are in the mood for a milkshake.  There is also the opportunity to do some high-altitude rock climbing with the highlight being the steep climbing around Ruth Lake. No matter what you are looking for the Uintas will not disappoint as a way to escape the heat and enjoy the outdoors.",
  "Joe’s valley has been the epicenter of bouldering in Utah since the mid 90’s. Nestled in the left and right forks below the Joe’s Valley Reservoir the boulders have been a popular attraction among Utahans and travelers alike. Situated next to the sleepy towns of Castle Dale and Orangeville the boulders aren’t the only thing to do for those looking to vacation in Joe’s Valley. The reservoir is great for fishing and has several trails suitable for both mountain biking and hiking. If you are looking for a desert escape the San Rafael Swell is a short drive out of town. The Little Grand Canyon trail is suitable for hikers of any age and the maze of dirt roads makes for miles and miles of mountain biking. If looking for something cooler floating the 11 mile stretch of the Little Grand Canyon has become increasingly popular during the summer months. While it does get cold in the winter the reservoir hosts a plethora of easily accessible ice climbs that truly make Joe’s Valley a year-round destination. ",
  "There is no doubt that Moab is on your list of destinations in Utah and for good reason. The dramatic landscape and abundance of outdoor opportunities make Moab a must see for anyone visiting Utah. The nearby national parks of Arches and Canyonlands offer breathtaking scenery and over 100 hiking trails to enjoy with the family. If you are looking for an extra shot of adrenaline Moab is famous for its Mountain Biking. The trails of Slickrock and Porcupine Rim offer memorable but strenuous experiences while Klondike Bluffs offers a more subdued ride. For those looking to get up close and personal with the red sandstone that adorns the area Moab is an excellent fall, spring and winter climbing destination. The nearby climbs of Potash road offer roadside climbs that can almost be enjoyed from the backseat of your car and the boulders of big bend offer an old school climbing experience that is not to be missed. No matter what you decide to do it is certain you will enjoy your time in Moab.",
  " If you are looking for a desert escape look no further than the area surrounding St. George. The mild temperatures make this an excellent destination during the colder months of the year. If you are looking for that picturesque desert scenery than look no further that Snow Canyon State Park just outside of town. With several trails that weave in and out of rock formations it’s a great option for activities close to town. The access to mountain biking is just as good with trails right in town like the City Creek Trail and the South Hills with multiple trails ranging from beginner to advanced. St. George is also a winter climbing destination. The surrounding Utah Hills are filled with several world class limestone areas with the sweeping cave of The Cathedral as a highlight. Warmer sandstone options can be found right outside of town at the Chuckwalla Wall and Banana Dance. If you are looking for a retreat from the snowy conditions in the rest of Utah St. George is an awesome opportunity to warm things up and get outside.",
  "Out of all of Utah’s national parks Zion is home to the most dramatic scenery.  The towering walls are worth a visit even if you don’t get out of the car which may be the case because of how crowded the canyon is. The opportunities for memorable climbs and hikes are plenty. The famous Angels Landing being one that is not for the faint of heart, look to The Riverside Walk for a more leisurely affair. Zion is also Utah’s destination for long climbing routes with 800 ft routes Shune’s Buttress and Monkeyfinger as standouts for all time classics. While there is no Mountain biking within the park the nearby town of Hurricane plays a host to some long outings like Gooseberry Mesa that offers breathtaking scenery of the surrounding area. These outdoor opportunities don’t even begin to scratch the surface when it comes to things to do in Zion. If you’re looking for a little more Adventure consider contacting one of the many guiding services in Zion and looking to explore more of what the park has to offer.",
  " Another quintessential Utah desert experience can be found on the Cedar Mesa plateau. The area is probably most famous for the Anasazi ruins that dot the area and the number of hikes that take you to them. The most famous of those being the Mesa Verde Ruins. The area also has a variety of mountain biking around the town of Monticello. The Cedar Mesa is definitely a unique area of Utah to explore solo or with your family.",
];

let regionTitles = [
  "Logan",
  "Wasatch",
  "Uintas",
  "Joe's Valley",
  "Moab",
  "St. George",
  "Zion",
  "Cedar Mesa",
];

//modal button and events
$(".modal-button").click(function () {
  $(".modal").addClass("is-active");

  let modalTitle = $("#region-name-h1");
  let modalBio = $("#region-bio-p");
  var uintasBg = "Assets/IMG_2183.jpg";
  var moabBg = "Assets/delicate-arch.jpg";
  var loganBg = "Assets/logan.jpg";
  var wasatchBg = "Assets/wasatch.jpg";
  var zionBg = "Assets/zion.jpg";
  var joesBg = "Assets/joesvalley.jpg";
  var stgeorgeBg = "Assets/stgeorge.jpg";
  var cedarBg = "Assets/cedarmesa.jpg";

  let btn = $(event.currentTarget);
  let btnName = btn.attr("data-location");
  console.log(btnName);
  modalTitle.text(btnName);

  

  if (btnName === "logan") {
    modalTitle.text(regionTitles[0]);
    modalBio.text(regionBios[0]);
    var citySearch = "5777544";
    $(".current-forecast").css("background-image", "url(" + loganBg + ")");
  } else if (btnName === "wasatch") {
    modalTitle.text(regionTitles[1]);
    modalBio.text(regionBios[1]);
    citySearch = "4846729";
    $(".current-forecast").css("background-image", "url(" + wasatchBg + ")");
  } else if (btnName === "unitas") {
    modalTitle.text(regionTitles[2]);
    modalBio.text(regionBios[2]);
    citySearch = "5776692";
    $(".current-forecast").css("background-image", "url(" + uintasBg + ")");
  } else if (btnName === "joesvalley") {
    modalTitle.text(regionTitles[3]);
    modalBio.text(regionBios[3]);
    citySearch = "5544402";
    $(".current-forecast").css("background-image", "url(" + joesBg + ")");
  } else if (btnName === "moab") {
    modalTitle.text(regionTitles[4]);
    modalBio.text(regionBios[4]);
    citySearch = "5543307";
    $(".current-forecast").css("background-image", "url(" + moabBg + ")");
  } else if (btnName === "stgeorge") {
    modalTitle.text(regionTitles[5]);
    modalBio.text(regionBios[5]);
    citySearch = "5546220";
    $(".current-forecast").css("background-image", "url(" + stgeorgeBg + ")");
  } else if (btnName === "zion") {
    modalTitle.text(regionTitles[6]);
    modalBio.text(regionBios[6]);
    citySearch = "5549225";
    $(".current-forecast").css("background-image", "url(" + zionBg + ")");
  } else {
    modalTitle.text(regionTitles[7]);
    modalBio.text(regionBios[7]);
    citySearch = "5535484";
    $(".current-forecast").css("background-image", "url(" + cedarBg + ")");
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
      "Temperature: " + response.main.temp + " °F"
    );
    var currentHum = $("<p>").text("Humidity: " + response.main.humidity + "%");
    var windSpeed = $("<p>").text("Wind: " + response.wind.speed + "mph");

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
      var dateDay = $(".day-" + currentDay + "-date").text(dayDate);

      //5 Day Weather Icons
      var dayFiveIcons = response.list[apiList].weather[0].icon;
      var weatherIcon =
        "https://openweathermap.org/img/wn/" + dayFiveIcons + ".png";
      var oneIcon = $(".day-" + currentDay + "-icon").attr("src", weatherIcon);

      //setting temp and hum
      var DayTemp = $("<p>").text(
        "High: " + response.list[apiList].main.temp + " F"
      );

      //var to append
      var fiveDay = $(".day-" + currentDay);

      fiveDay.empty();

      // append
      fiveDay.append(DayTemp);
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
});


//fetch map on button click
function fetchMapData(map) {
  $.getJSON(`data/${map}.json`, generateMap);
}

$(".modal-button").click(function () {
  $(".modal").addClass("is-active");
  console.log("clicked");

  const location = $(this).data("location");

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
  // disable map zoom when using scroll
  map.scrollZoom.disable();
}

$(".modal-close").click(function () {
  $(".modal").removeClass("is-active");
});
