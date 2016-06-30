
// var isSem = function() {
//   for (var x = 0; x < )
// }


$('a').click(function() {
  const $word = $('#word').val();
  var $xhr = $.getJSON('https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20160629T225043Z.cb66c2d8258eab54.4400d700965711edbcfcccc3d1f65154341b935e&lang=en-en&text=' + $word)
  $xhr.done(function(data) {
    if (data.def.length === 0) {
      return;
    }
    console.log(data.def[0].text);
  })
});
