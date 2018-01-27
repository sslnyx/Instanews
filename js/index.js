$("#mySelect").change(function () {

  var x = $(this).val();
  
  if (x != 'na') {
    // append loading
    $('.list').before('<p class="loading">Loading</p>');
    $('.list').empty();
    console.log(x)
    // Built by LucyBot. www.lucybot.com
    var url = 'https://api.nytimes.com/svc/topstories/v2/' + x + '.json';
    url += "?" + $.param({
      "api-key": "5b70bd22e5b746b79df4c06363b18772"
    });

    $.ajax({
        url: url,
        method: "GET"
      })
      .done(function (result) {
        // filter out articles that does not have img
        var picStories = result.results.filter(function (article) {
          return article.multimedia.length;
        }).slice(0, 12);

        console.log(result);
        $.each(picStories, function (index, value) {

          var html = "";
          html += "<li>";
          html += '<img src="' + value.multimedia[0].url + '"/>';
          html += '<p>' + value.abstract + '</p>';
          html += "</li>";
          $(".list").append(html);

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