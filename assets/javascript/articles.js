var key = "89ba2e8b53ec4ded90ab6071c237f750"

//---------------------------------------Australia-------------------------------------------
function performSearchAU(event){
	//event.preventDefault();

	var selectAU = $("#mySelectAU").val();
	console.log(selectAU);

	var queryURL = "https://newsapi.org/v1/articles?source=" + selectAU + "&apiKey=" + key 
	console.log(queryURL); 

	var articlesCounter = 0;

	$.ajax({
	      url: queryURL,
	      method: 'GET'
	    }).done(function(response){
	    	console.log(response);  

	    	for (var i =0; i < response.articles.length; i++) {
	    		 
	    		articlesCounter++;

	    		var wellSection = $("<div>"); 
	    		wellSection.addClass("well");
	    		wellSection.attr("id", "article-well-AU" + articlesCounter); 
	    		$("#displayNewsAU").append(wellSection); 

	    		if (response.articles[i].title !== "null") {
	    			$("#article-well-AU" + articlesCounter)
	    			.append(
	    				"<h3 class='articleTitle'><span class'label label-primary'>" + articlesCounter + "." + "</span><strong> " + response.articles[i].title + "</strong></h3>"
	    				);
	    			console.log(response.articles[i].title);
	    		}

	    		 $("#article-well-AU" + articlesCounter).append("<h5>Description: " + response.articles[i].description + "</h5>");
	    		 $("#article-well-AU" + articlesCounter).append("<h5>Author: " + response.articles[i].author + "</h5>");
	    		 $("#article-well-AU" + articlesCounter).append("<h5>URL: " + response.articles[i].url + "</h5>");

	    	}
	    })
}
//---------------------------------------Middle East------------------------------------------
function performSearchME(event){
	//event.preventDefault();

	var selectME = $("#mySelectME").val();
	console.log(selectME);

	var queryURL = "https://newsapi.org/v1/articles?source=" + selectME + "&apiKey=" + key 
	console.log(queryURL); 

	var articlesCounter = 0;

	$.ajax({
	      url: queryURL,
	      method: 'GET'
	    }).done(function(response){
	    	console.log(response);  

	    	for (var i =0; i < response.articles.length; i++) {
	    		 
	    		articlesCounter++;

	    		var wellSection = $("<div>"); 
	    		wellSection.addClass("well");
	    		wellSection.attr("id", "article-well-ME" + articlesCounter); 
	    		$("#displayNewsME").append(wellSection); 

	    		if (response.articles[i].title !== "null") {
	    			$("#article-well-ME" + articlesCounter)
	    			.append(
	    				"<h3 class='articleTitle'><span class'label label-primary'>" + articlesCounter + "." + "</span><strong> " + response.articles[i].title + "</strong></h3>"
	    				);
	    			console.log(response.articles[i].title);
	    		}

	    		 $("#article-well-ME" + articlesCounter).append("<h5>Description: " + response.articles[i].description + "</h5>");
	    		 $("#article-well-ME" + articlesCounter).append("<h5>Author: " + response.articles[i].author + "</h5>");
	    		 $("#article-well-ME" + articlesCounter).append("<h5>URL: " + response.articles[i].url + "</h5>");

	    	}
	    })
}

//---------------------------------------United States------------------------------------------
function performSearchUS(event){
	//event.preventDefault();

	var selectUS = $("#mySelectUS").val();
	console.log(selectUS);

	var queryURL = "https://newsapi.org/v1/articles?source=" + selectUS + "&apiKey=" + key 
	console.log(queryURL); 

	var articlesCounter = 0;

	$.ajax({
	      url: queryURL,
	      method: 'GET'
	    }).done(function(response){
	    	console.log(response);  

	    	for (var i =0; i < response.articles.length; i++) {
	    		 
	    		articlesCounter++;

	    		var wellSection = $("<div>"); 
	    		wellSection.addClass("well");
	    		wellSection.attr("id", "article-well-US" + articlesCounter); 
	    		$("#displayNewsUS").append(wellSection); 

	    		if (response.articles[i].title !== "null") {
	    			$("#article-well-US" + articlesCounter)
	    			.append(
	    				"<h3 class='articleTitle'><span class'label label-primary'>" + articlesCounter + "." + "</span><strong> " + response.articles[i].title + "</strong></h3>"
	    				);
	    			console.log(response.articles[i].title);
	    		}

	    		 $("#article-well-US" + articlesCounter).append("<h5>Description: " + response.articles[i].description + "</h5>");
	    		 $("#article-well-US" + articlesCounter).append("<h5>Author: " + response.articles[i].author + "</h5>");
	    		 $("#article-well-US" + articlesCounter).append("<h5>URL: " + response.articles[i].url + "</h5>");

	    	}
	    })
}

//---------------------------------------India---------------------------------------------------
function performSearchIN(event){
	//event.preventDefault();

	var selectIN = $("#mySelectIN").val();
	console.log(selectIN);

	var queryURL = "https://newsapi.org/v1/articles?source=" + selectIN + "&apiKey=" + key 
	console.log(queryURL); 

	var articlesCounter = 0;

	$.ajax({
	      url: queryURL,
	      method: 'GET'
	    }).done(function(response){
	    	console.log(response);  

	    	for (var i =0; i < response.articles.length; i++) {
	    		 
	    		articlesCounter++;

	    		var wellSection = $("<div>"); 
	    		wellSection.addClass("well");
	    		wellSection.attr("id", "article-well-IN" + articlesCounter); 
	    		$("#displayNewsIN").append(wellSection); 

	    		if (response.articles[i].title !== "null") {
	    			$("#article-well-IN" + articlesCounter)
	    			.append(
	    				"<h3 class='articleTitle'><span class'label label-primary'>" + articlesCounter + "." + "</span><strong> " + response.articles[i].title + "</strong></h3>"
	    				);
	    			console.log(response.articles[i].title);
	    		}

	    		 $("#article-well-IN" + articlesCounter).append("<h5>Description: " + response.articles[i].description + "</h5>");
	    		 $("#article-well-IN" + articlesCounter).append("<h5>Author: " + response.articles[i].author + "</h5>");
	    		 $("#article-well-IN" + articlesCounter).append("<h5>URL: " + response.articles[i].url + "</h5>");

	    	}
	    })
}

//---------------------------------------United Kingdom-------------------------------------------
function performSearchUK(event){
	//event.preventDefault();

	var selectUK = $("#mySelectUK").val();
	console.log(selectUK);

	var queryURL = "https://newsapi.org/v1/articles?source=" + selectUK + "&apiKey=" + key 
	console.log(queryURL); 

	var articlesCounter = 0;

	$.ajax({
	      url: queryURL,
	      method: 'GET'
	    }).done(function(response){
	    	console.log(response);  

	    	for (var i =0; i < response.articles.length; i++) {
	    		 
	    		articlesCounter++;

	    		var wellSection = $("<div>"); 
	    		wellSection.addClass("well");
	    		wellSection.attr("id", "article-well-UK" + articlesCounter); 
	    		$("#displayNewsUK").append(wellSection); 

	    		if (response.articles[i].title !== "null") {
	    			$("#article-well-UK" + articlesCounter)
	    			.append(
	    				"<h3 class='articleTitle'><span class'label label-primary'>" + articlesCounter + "." + "</span><strong> " + response.articles[i].title + "</strong></h3>"
	    				);
	    			console.log(response.articles[i].title);
	    		}

	    		 $("#article-well-UK" + articlesCounter).append("<h5>Description: " + response.articles[i].description + "</h5>");
	    		 $("#article-well-UK" + articlesCounter).append("<h5>Author: " + response.articles[i].author + "</h5>");
	    		 $("#article-well-UK" + articlesCounter).append("<h5>URL: " + response.articles[i].url + "</h5>");

	    	}
	    })
}

//---------------------------------------Germany-------------------------------------------
function performSearchGY(event){
	//event.preventDefault();

	var selectGY = $("#mySelectGY").val();
	console.log(selectGY);

	var queryURL = "https://newsapi.org/v1/articles?source=" + selectGY + "&apiKey=" + key 
	console.log(queryURL); 

	var articlesCounter = 0;

	$.ajax({
	      url: queryURL,
	      method: 'GET'
	    }).done(function(response){
	    	console.log(response);  

	    	for (var i =0; i < response.articles.length; i++) {
	    		 
	    		articlesCounter++;

	    		var wellSection = $("<div>"); 
	    		wellSection.addClass("well");
	    		wellSection.attr("id", "article-well-GY" + articlesCounter); 
	    		$("#displayNewsGY").append(wellSection); 

	    		if (response.articles[i].title !== "null") {
	    			$("#article-well-GY" + articlesCounter)
	    			.append(
	    				"<h3 class='articleTitle'><span class'label label-primary'>" + articlesCounter + "." + "</span><strong> " + response.articles[i].title + "</strong></h3>"
	    				);
	    			console.log(response.articles[i].title);
	    		}

	    		 $("#article-well-GY" + articlesCounter).append("<h5>Description: " + response.articles[i].description + "</h5>");
	    		 $("#article-well-GY" + articlesCounter).append("<h5>Author: " + response.articles[i].author + "</h5>");
	    		 $("#article-well-GY" + articlesCounter).append("<h5>URL: " + response.articles[i].url + "</h5>");

	    	}
	    })
}

//---------------------------------------Italy-------------------------------------------
function performSearchIT(event){
	//event.preventDefault();

	var selectIT = $("#mySelectIT").val();
	console.log(selectIT);

	var queryURL = "https://newsapi.org/v1/articles?source=" + selectIT + "&apiKey=" + key 
	console.log(queryURL); 

	var articlesCounter = 0;

	$.ajax({
	      url: queryURL,
	      method: 'GET'
	    }).done(function(response){
	    	console.log(response);  

	    	for (var i =0; i < response.articles.length; i++) {
	    		 
	    		articlesCounter++;

	    		var wellSection = $("<div>"); 
	    		wellSection.addClass("well");
	    		wellSection.attr("id", "article-well-IT" + articlesCounter); 
	    		$("#displayNewsIT").append(wellSection); 

	    		if (response.articles[i].title !== "null") {
	    			$("#article-well-IT" + articlesCounter)
	    			.append(
	    				"<h3 class='articleTitle'><span class'label label-primary'>" + articlesCounter + "." + "</span><strong> " + response.articles[i].title + "</strong></h3>"
	    				);
	    			console.log(response.articles[i].title);
	    		}

	    		 $("#article-well-IT" + articlesCounter).append("<h5>Description: " + response.articles[i].description + "</h5>");
	    		 $("#article-well-IT" + articlesCounter).append("<h5>Author: " + response.articles[i].author + "</h5>");
	    		 $("#article-well-IT" + articlesCounter).append("<h5>URL: " + response.articles[i].url + "</h5>");

	    	}
	    })
}

//---------------Search Buttons-------------------------------------------------

$("#searchAU").on("click", function(){

  	articlesCounter = 0;

  	$("#displayNewsAU").empty();

  	performSearchAU();
});
$("#searchME").on("click", function(){

	articlesCounter = 0; 

	$("#displayNewsME").empty();

	performSearchME(); 
});
$("#searchUS").on("click", function(){

	articlesCounter = 0;

	$("#displayNewsUS").empty();

	performSearchUS(); 
});
$("#searchIN").on("click", function(){

	articlesCounter = 0;

	$("#displayNewsIN").empty();

	performSearchIN(); 
});
$("#searchUK").on("click", function(){

	articlesCounter = 0;

	$("#displayNewsUK").empty();

	performSearchUK();
});
$("#searchGY").on("click", function(){

	articlesCounter = 0;

	$("#displayNewsGY").empty();

	performSearchGY();
});
$("#searchIT").on("click", function(){

	articlesCounter = 0;

	$("#displayNewsIT").empty();

	performSearchIT();
});

//-----------------------Weather--------------------------------------------------------------------------------
    var APIKey1 = "166a433c57516f51dfab1f7edaed8413";

    var queryURL1 = "http://api.openweathermap.org/data/2.5/weather?" +
      "q=Sydney, Australia&units=imperial&appid=" + APIKey1;

    $.ajax({
        url: queryURL1,
        method: "GET"
      })

      .done(function(response) {

        console.log(queryURL1);

        console.log(response);

        $(".city1").html("<h2>" + response.name + " Weather Details</h2>");
        $(".wind1").html("Wind Speed: " + response.wind.speed);
        $(".humidity1").html("Humidity: " + response.main.humidity);
        $(".temp1").html("Temperature (F) " + response.main.temp);

        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);
      });

    var APIKey2 = "166a433c57516f51dfab1f7edaed8413";

    var queryURL2 = "http://api.openweathermap.org/data/2.5/weather?" +
      "q=Melbourne, Australia&units=imperial&appid=" + APIKey2;

    $.ajax({
        url: queryURL2,
        method: "GET"
      })

      .done(function(response) {

        console.log(queryURL2);

        console.log(response);

        $(".city2").html("<h2>" + response.name + " Weather Details</h2>");
        $(".wind2").html("Wind Speed: " + response.wind.speed);
        $(".humidity2").html("Humidity: " + response.main.humidity);
        $(".temp2").html("Temperature (F) " + response.main.temp);

        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);
      });

    var APIKey3 = "166a433c57516f51dfab1f7edaed8413";

    var queryURL3 = "http://api.openweathermap.org/data/2.5/weather?" +
      "q=Doha, Qatar&units=imperial&appid=" + APIKey3;

    $.ajax({
        url: queryURL3,
        method: "GET"
      })

      .done(function(response) {

        console.log(queryURL3);

        console.log(response);

        $(".city3").html("<h2>" + response.name + " Weather Details</h2>");
        $(".wind3").html("Wind Speed: " + response.wind.speed);
        $(".humidity3").html("Humidity: " + response.main.humidity);
        $(".temp3").html("Temperature (F) " + response.main.temp);

        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);
      });

    var APIKey4 = "166a433c57516f51dfab1f7edaed8413";

    var queryURL4 = "http://api.openweathermap.org/data/2.5/weather?" +
      "q=New York, New York&units=imperial&appid=" + APIKey4;

    $.ajax({
        url: queryURL4,
        method: "GET"
      })

      .done(function(response) {

        console.log(queryURL4);

        console.log(response);

        $(".city4").html("<h2>" + response.name + " Weather Details</h2>");
        $(".wind4").html("Wind Speed: " + response.wind.speed);
        $(".humidity4").html("Humidity: " + response.main.humidity);
        $(".temp4").html("Temperature (F) " + response.main.temp);

        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);
      });

    var APIKey5 = "166a433c57516f51dfab1f7edaed8413";

    var queryURL5 = "http://api.openweathermap.org/data/2.5/weather?" +
      "q=Chicago, Illinois&units=imperial&appid=" + APIKey5;

    $.ajax({
        url: queryURL5,
        method: "GET"
      })

      .done(function(response) {

        console.log(queryURL5);

        console.log(response);

        $(".city5").html("<h2>" + response.name + " Weather Details</h2>");
        $(".wind5").html("Wind Speed: " + response.wind.speed);
        $(".humidity5").html("Humidity: " + response.main.humidity);
        $(".temp5").html("Temperature (F) " + response.main.temp);

        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);
      });

    var APIKey6 = "166a433c57516f51dfab1f7edaed8413";

    var queryURL6 = "http://api.openweathermap.org/data/2.5/weather?" +
      "q=Los Angeles, California&units=imperial&appid=" + APIKey6;

    $.ajax({
        url: queryURL6,
        method: "GET"
      })

      .done(function(response) {

        console.log(queryURL3);

        console.log(response);

        $(".city6").html("<h2>" + response.name + " Weather Details</h2>");
        $(".wind6").html("Wind Speed: " + response.wind.speed);
        $(".humidity6").html("Humidity: " + response.main.humidity);
        $(".temp6").html("Temperature (F) " + response.main.temp);

        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);
      });

    var APIKey7 = "166a433c57516f51dfab1f7edaed8413";

    var queryURL7 = "http//api.openweathermap.org/data/2.5/weather?" +
      "q=New Delhi, India&units=imperial&appid=" + APIKey7;

    $.ajax({
        url: queryURL7,
        method: "GET"
      })

      .done(function(response) {

        console.log(queryURL7);

        console.log(response);

        $(".city7").html("<h2>" + response.name + " Weather Details</h2>");
        $(".wind7").html("Wind Speed: " + response.wind.speed);
        $(".humidity7").html("Humidity: " + response.main.humidity);
        $(".temp7").html("Temperature (F) " + response.main.temp);

        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);
      });

    var APIKey8 = "166a433c57516f51dfab1f7edaed8413";

    var queryURL8 = "http://api.openweathermap.org/data/2.5/weather?" +
      "q=Mumbai, India&units=imperial&appid=" + APIKey8;

    $.ajax({
        url: queryURL8,
        method: "GET"
      })

      .done(function(response) {

        console.log(queryURL8);

        console.log(response);

        $(".city8").html("<h2>" + response.name + " Weather Details</h2>");
        $(".wind8").html("Wind Speed: " + response.wind.speed);
        $(".humidity8").html("Humidity: " + response.main.humidity);
        $(".temp8").html("Temperature (F) " + response.main.temp);

        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);
      });

    var APIKey9 = "166a433c57516f51dfab1f7edaed8413";

    var queryURL9 = "http://api.openweathermap.org/data/2.5/weather?" +
      "q=London, United Kingdom&units=imperial&appid=" + APIKey9;

    $.ajax({
        url: queryURL9,
        method: "GET"
      })

      .done(function(response) {

        console.log(queryURL9);

        console.log(response);

        $(".city9").html("<h2>" + response.name + " Weather Details</h2>");
        $(".wind9").html("Wind Speed: " + response.wind.speed);
        $(".humidity9").html("Humidity: " + response.main.humidity);
        $(".temp9").html("Temperature (F) " + response.main.temp);

        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);
      });

    var APIKey10 = "166a433c57516f51dfab1f7edaed8413";

    var queryURL10 = "http://api.openweathermap.org/data/2.5/weather?" +
      "q=Berlin, Germany&units=imperial&appid=" + APIKey10;

    $.ajax({
        url: queryURL10,
        method: "GET"
      })

      .done(function(response) {

        console.log(queryURL10);

        console.log(response);

        $(".city10").html("<h2>" + response.name + " Weather Details</h2>");
        $(".wind10").html("Wind Speed: " + response.wind.speed);
        $(".humidity10").html("Humidity: " + response.main.humidity);
        $(".temp10").html("Temperature (F) " + response.main.temp);

        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);
      });

    var APIKey11 = "166a433c57516f51dfab1f7edaed8413";

    var queryURL11 = "http://api.openweathermap.org/data/2.5/weather?" +
      "q=Milan, Italy&units=imperial&appid=" + APIKey9;

    $.ajax({
        url: queryURL11,
        method: "GET"
      })

      .done(function(response) {

        console.log(queryURL11);

        console.log(response);

        $(".city11").html("<h2>" + response.name + " Weather Details</h2>");
        $(".wind11").html("Wind Speed: " + response.wind.speed);
        $(".humidity11").html("Humidity: " + response.main.humidity);
        $(".temp11").html("Temperature (F) " + response.main.temp);

        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);
      });