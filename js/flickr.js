$(document).ready(function(){
      $('button').click(function(){
          $('button').removeClass('selected');
          $(this).addClass('selected');
          var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
          var scene = $(this).text();
          var flickrOption = {
              tag: scene,
              format: "json"
          };
          function displayPhotos(data){  debugger;
              var photoHtml = '<ul>';
              $.each(data.items, function(i, photo){
                 photoHtml += '<li class="grid-25 table-grid-50">';
                  photoHtml += '<a href="' + photo.link + '" class="image">';
                  photoHtml += '<img src="' + photo.media.m + '"/></a></li>';
              });
                photoHtml += '</ul>';
              $('#photos').html(photoHtml);
          }

          $.getJSON(flickrAPI, flickrOption, displayPhotos);
      });
});  //ends ready function

