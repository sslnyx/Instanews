$('#mySelect').change(function () {

  var x = $(this).val();
  $('.list').addClass('listStyle');
  $('.navigation').addClass('exNav');
  $('.logo').addClass('exLogo');

  if (x !== 'na') {
    // append loading
    $('.list').before('<div class="loading"><img src="./assets/images/ajax-loader.gif"></div>');
    $('.list').empty();
    // console.log(x)
    // Built by LucyBot. www.lucybot.com
    var url = 'https://api.nytimes.com/svc/topstories/v2/' + x + '.json';
    url += '?' + $.param({
      'api-key': '5b70bd22e5b746b79df4c06363b18772'
    });

    $.ajax({
        url: url,
        method: 'GET'
      })
      .done(function (result) {
        // filter out articles that does not have img
        var picStories = result.results.filter(function (article) {
          return article.multimedia.length;
        }).slice(0, 12);

        console.log(result);
        $.each(picStories, function (index, value) {
          // console.log(value.multimedia[3].url);
          var html = '';
          html += '<a href="'+ value.url +'">';
          html += '<li>'
          html += '<div class="bkimg" style="background-image:url(' + value.multimedia[4].url + ')">';
          html += '<div class="abstract"><p>' + value.abstract + '</p></div>';
          html += '</div>';
          html += '</li>';
          html += '</a>';
          $('.list').append(html);
          
        });
      })
      .fail(function (err) {
        throw err;
      })
      .always(function () {
        $('.loading').remove();
      });
  }
});