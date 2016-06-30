var backwards = ''.toUpperCase();
var word = ''.toUpperCase();;

var startXhr2 = function() {
  var $xhr2 = $.getJSON('https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20160629T225043Z.cb66c2d8258eab54.4400d700965711edbcfcccc3d1f65154341b935e&lang=en-en&text=' + backwards)
  $xhr2.done(function(data2) {
    word = word.toUpperCase();
    backwards = backwards.toUpperCase();
    if (data2.def.length === 0) {
      Materialize.toast(`${word} spelled backwards is ${backwards}. That doesn't make any sense.`, 4000);
    }
    else {
      Materialize.toast(`YES! ${word} spelled backwards is ${backwards}! It's a semordnilap!`, 4000);
    }
  })
}

var startXhr = function() {
  var $input = $('#input').val();
  var $xhr = $.getJSON('https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20160629T225043Z.cb66c2d8258eab54.4400d700965711edbcfcccc3d1f65154341b935e&lang=en-en&text=' + $input)
  $xhr.done(function(data) {
    if (backwards !== '') {
      backwards = '';
    }
    console.log(data);
    if (data.def[0] === undefined) {
      $input = $input.toUpperCase();
      Materialize.toast(`${$input} isn't in the dictionary. Try another one.`, 4000);
      return;
    }
    word = data.def[0].text;
    for (var x = word.length -1; x >= 0; x--) {
      backwards += word[x];
    }
    startXhr2();
  })
};

$('a').click(function() {
  if ($('#input').val() === '') {
    Materialize.toast('You have to enter a word.', 4000)
    return
  }
  startXhr();
});

$('#input').click(function() {
  $('#input').val('');
})
