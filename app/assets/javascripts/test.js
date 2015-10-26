$(document).ready(function(){
	$('input[type="submit"]').prop('disabled', true);
	has_email_error_count = 0;
	has_email = false;
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

	$('#lead_email').focusout(function() {

		var sEmail = $("#lead_email").val();
		console.log(sEmail);
          
		if (!emailReg.test(sEmail) && has_email_error_count < 1 || sEmail == ''){
			// $("#error-email").show();
			has_email_error_count = has_email_error_count + 1
			$("#lead_email").after('<span id="error-email" class="error">Please enter a valid email address.</span>');
			has_email = false;
			
		}
		else if(sEmail.length == '' && has_email_error_count > 0 ){
			$("#error-email").show();
			has_email = false;
     
		}
		else if (sEmail.length > 0 && emailReg.test(sEmail)){
			$("#error-email").hide();
			has_email = true;
		}

		if (has_email == true) {

			$('input[type="submit"]').prop('disabled', false);

		}
		
		});
});

// $(document).ready(function () {
// 	$("#lead_form").validate({
// 		debug: true,
// 	rules: {
// 		"lead[email]": {required: true, email: true},
// 		"lead[fullname]": {required: true, minlength: 6},
// 		"lead[phone]": {required: true, equalTo: “#user_password”}
// 		}
// 	});
// });