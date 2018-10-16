 $(document).ready(function() {


   $('#submitButton').click(function() {

     var searchWord = $('#searchBar').val();
     var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchWord + "&limit=50&namespace=0&format=json"; //set up the url to pass in seasrch word
     console.log(url);

     $.ajax({//gets the information from the api
       type: "GET",
       dataType: "jsonp",
       url: url,
       success: function(data) {
         $( ".resault" ).remove();
         for(var i=0;i<data[1].length;i++){ //displays each resault in its own sepreat div in the body
           $("body").append("<div class='resault col-xs-offset-1 col-xs-10'><a class='resault-title' href='"+data[3][i]+"' target='_blank'>"+data[1][i]+"</a><p class='resault-description'>"+data[2][i]+"</p>");
         }
       },
       error: function(errorMesage) { //if it cant reach the api
         console.log("error");
       }
     });

   });

 });
