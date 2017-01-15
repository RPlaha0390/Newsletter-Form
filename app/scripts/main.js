/* global $ */
'use strict';

$(document).ready(function() {
  var requiredAttributes = {
    $favouriteMusic: 'contest1_name',
    $firstName: 'first_name',
    $country: 'country',
    $email: 'email',
    $birthDay: 'birth_day',
    $birthMonth: 'birth_month',
    $birthYear: 'birth_year',
    $privacyCheck: 'privacy_check'
  };
  var $submit = $('.submit');

  // click function for validation
  $submit.on('click', function() {
    $.each(requiredAttributes, function(key, value) {
      var attributeName = $('[name="' + value + '"]');

      if (attributeName.val() === '') {
        $('[name="' + value + '"]')
          .addClass('error')
          .prev()
          .addClass('js-show');
      } else if (attributeName.val()) {
        $('[name="' + value + '"]')
          .removeClass('error')
          .prev()
          .removeClass('js-show');
      }
    });
  });
});
