$(document).ready(function(){

	var requiredAttributes =  {
		$favouriteMusic: 'contest1_name',
		$firstName: 'first_name',
		$country: 'country',
		$email: 'email',
		$birthDay: 'birth_day',
		$birthMonth: 'birth_month',
		$birthYear: 'birth_year',
		$privacyCheck: 'privacy_check'
	},
	$submit = $('.submit');

	// hide form errors on page load
	$('.form-error').hide();
	$('.invalid-email-error').hide();

	// click function for validation
	$submit.on('click', function(){

		// get values for all required fields
		var favouriteMusic = $("[name='contest1_name']").val();
		var firstName = $("[name='first_name']").val();
		var country = $("[name='country']").val();
		var email = $("[name='email']").val();
		var birthDay = $("[name='birth_day']").val();
		var birthMonth = $("[name='birth_month']").val();
		var birthYear = $("[name='birth_year']").val();
		var privacyCheck = $("[name='privacy_check']")

		// loop over required attributes object to get all attribute names
		$.each( requiredAttributes, function( key, value ) {
		  
		  // save looped attributes in a variable
		  var attributeName = $("[name='" + value + "']");
		  var fieldName = value;

		  // switch statement to add errors to all empty fields
		  switch(fieldName){
		  	case '' + fieldName + '':
		  		if (attributeName.val() === '') {
		  			$("[name='" + value + "']").addClass('error');
		  			$('.form-error').show();
		  		} else if (attributeName.val()) {
		  			$("[name='" + value + "']").removeClass('error');
		  		}
		    	break;
		  }
		})

		// remove all errors if the field has a value
		if (favouriteMusic) {
		  $('.favourite-music.form-error').hide();
		}

		if (firstName) {
		  $('.first-name.form-error').hide();
		}

		if (country) {
		  $('.country.form-error').hide();
		}

		if (email) {
		  $('.email.form-error').hide();
		}
		
		// if(IsEmail(email) == false){
  //     $('.invalid-email-error').show();
  //   }

		if (birthDay) {
		  $('.day-of-birth.form-error').hide();
		}

		if (birthMonth) {
		  $('.month-of-birth.form-error').hide();
		}

		if (birthYear) {
		  $('.year-of-birth.form-error').hide();
		}

		if (privacyCheck.is(':checked')) {
		  $('.privacy-check.form-error').hide();
		}
	});

	// function IsEmail(email) {
	//   var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	//   if (!regex.test(email)) {
	//     return false;
	//   } else {
	//     return true;
	//   }
	// }
	
});


