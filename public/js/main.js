$('document').ready(function() {

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


})