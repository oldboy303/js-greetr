var g = G$('John', 'Doe');

g.greet().setLanguage('es').greet(true);

$('#login').click(function() {

  var loginGreetr = G$('John', 'Doe');

  $('#logindiv').hide();

  loginGreetr.setLanguage($('#language').val()).HTMLGreeting('#greeting', true).log();
})
