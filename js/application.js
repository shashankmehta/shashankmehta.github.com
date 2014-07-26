$(document).ready(function(){

  var width = $(window).width();
  var count = Math.ceil(width / 150);
  var img_width = width / count;

  if(count < 2){
    img_width = width / 3;
    count = 3;
  }

  $.ajax({
    url: 'https://api.instagram.com/v1/users/190481304/media/recent',
    method: 'GET',
    data: {
      client_id: 'b65e71d3b4c94bc29ff2172a7669f0ad',
      count: count
    },
    dataType: 'jsonp',
    success: function(d){
      if(d.data.length < count){
        return;
      }

      for(var i = 0; i < count; i++){
        var item = d.data[i];
        $('.ig').append('<a href="'+item.link+'" target="_blank"><img src="'+item.images.thumbnail.url+'" width='+img_width+' /></a>');
      }

      a = d;
      b = d.data[1];
    }
  })
})