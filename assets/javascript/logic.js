 var KEY = "hdClS0YzlOmshlFFeW3W3WV1PoXEp17UCdrjsnAeTCrRrnazfX";

  var queryURL = "https://webcamstravel.p.mashape.com/webcams/list";


 $.ajax({
    url: queryURL,
    method: 'GET',
    headers: {
        "X-Mashape-Key" : KEY
    }
  }).done(function(response) {
    console.log(response);
    var apiLink = queryURL + "&api_key=" + KEY;
         console.log(apiLink);
      var feedId = response.result.webcams[0].id;
      console.log(feedId);

 
          var webcamDiv = $("<div>");
          webcamDiv.attr("class", "webcamDiv");
          $(webcamDiv).append("<a name='lkr-timelapse-player' data-id='1000550952' data-play='day' href='https://lookr.com/1000550952' target='_blank'>Beinwil am See: Hallwilersee Nord</a>");
      });