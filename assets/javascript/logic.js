$(document).ready(function(){
      console.log("ready");
      // $(".error").html("");
      var inputLoc = "Basking Ridge, New Jersey"; 
      // This is our API key
      var APIKey = "166a433c57516f51dfab1f7edaed8413";
              
        $("#add-weatherLocation-btn").on("click", function(event) {
          event.preventDefault();
          // alert("clicked");
          inputLoc = $("#weatherLoc-input").val().trim();
          if(inputLoc ==""){
              $(".city").html(" ==> No Location Entered");
            return false;
          }
      var queryURL = "http://api.openweathermap.org/data/2.5/weather?" +
      "q=" + inputLoc + "&units=imperial&appid=" + APIKey;
      // Here we run our AJAX call to the OpenWeatherMap API
      $.ajax({
        url: queryURL,
        method: "GET"
      })
      // We store all of the retrieved data inside of an object called "response"
      .done(function(response) {
        // Log the queryURL
        console.log(queryURL);
        // Log the resulting object
        console.log(response);
        // Transfer content to HTML
        $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        $(".wind").html("Wind Speed: " + response.wind.speed);
        $(".humidity").html("Humidity: " + response.main.humidity);
        $(".temp").html("Temperature (F) " + response.main.temp);
        // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);
      });
    });
    });
