$('input').on('keydown', function(event) { if (event.which == 13 || event.which == 10) { event.preventDefault(); } });

$('document').ready(function() {

  //carousel //
  if ($('.carousel').length > 0) {
    $('.carousel').carousel({ interval: 4000 })
  }

  $('#dropdownMenu1').click(function() {
    this.blur();
  });
  $('input').on('focusin', function() {
    $(this).parent().find('label').addClass('active');
  });

  $('input').on('focusout', function() {
    if (!this.value) {
      $(this).parent().find('label').removeClass('active');
    }
  });

  $('#question1btn').on('click', function() {
    $('#question1').css('display', 'none')
    $('#question2').css('display', 'block')
  });

  $('#question2btn').on('click', function() {
    $('#question2').css('display', 'none')
    $('#question3').css('display', 'block')
  });

  $('#question3btn').on('click', function() {
    $('#question3').css('display', 'none')
    $('#question4').css('display', 'block')
  });

  $('#question4btn').on('click', function() {
    $('#question4').css('display', 'none')
    $('#question5').css('display', 'block')
  });

  $('#question5btn').on('click', function() {
    $('#question5').css('display', 'none')
    $('#question6').css('display', 'block')
  });

})