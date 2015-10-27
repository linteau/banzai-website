$(document).ready(function(){
	$('input[type="submit"]').prop('disabled', true);
	has_email_error_count = 0;
	has_email = false;
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

	$('#lead_email').focusout(function() {

		var sEmail = $("#lead_email").val();
		var fullname = $("#lead_name").val();
		var phone = $("#lead_phone").val();
		var company = $("#lead_company").val();

		
          
		if (!emailReg.test(sEmail) && has_email_error_count < 1 || sEmail == '' && has_email_error_count < 1){
			// $("#error-email").show();
			has_email_error_count = has_email_error_count + 1
			$("#lead_email").after('<span id="error-email" class="error">Please enter a valid email address.</span>');
			has_email = false;
			
		}
		else if(sEmail == '' && has_email_error_count > 0 ){
			$("#error-email").show();
			has_email = false;
     
		}
		else if (sEmail.length > 0 && emailReg.test(sEmail)){
			$("#error-email").hide();
			has_email = true;
		}

		if (sEmail.length > 0 && emailReg.test(sEmail) == true && fullname.length > 0 && phone.length > 0) {

			$('input[type="submit"]').prop('disabled', false);

		}
		
		});

		fullname_error_count = 0;
		has_fullname = false;

		$('#lead_name').focusout(function() {

			var sEmail = $("#lead_email").val();
			var fullname = $("#lead_name").val();
			var phone = $("#lead_phone").val();
			var company = $("#lead_company").val();

			if (fullname == '' && fullname_error_count < 1){
			// $("#error-email").show();
			fullname_error_count = fullname_error_count + 1
			$("#lead_name").after('<span id="error-fullname" class="error">Please enter your fullname.</span>');
			has_fullname = false;
			
		}
		else if(fullname.length == '' && fullname_error_count > 0 ){
			$("#error-fullname").show();
			has_fullname = false;
     
		}
		else if (fullname.length > 0 ){
			$("#error-fullname").hide();
			has_fullname = true;
		}

		if (has_email == true && has_fullname == true && has_phone == true) {

			$('input[type="submit"]').prop('disabled', false);

		}
		
		});

		phone_error_count = 0;
		has_phone = false;

		$('#lead_phone').focusout(function() {

			var sEmail = $("#lead_email").val();
			var fullname = $("#lead_name").val();
			var phone = $("#lead_phone").val();
			var company = $("#lead_company").val();


			if (phone == '' && phone_error_count < 1){
			// $("#error-email").show();
			phone_error_count = phone_error_count + 1
			$("#lead_phone").after('<span id="error-phone" class="error">Please enter a phone number.</span>');
			has_phone = false;
			$('input[type="submit"]').prop('disabled', true);
			
			}
			else if(phone.length == '' && phone_error_count > 0 ){
				$("#error-phone").show();
				has_phone = false;
				$('input[type="submit"]').prop('disabled', true);
	     
			}
			else if (phone.length > 0 ){
				$("#error-phone").hide();
				has_phone = true;
			}

		
		});

		company_error_count = 0;
		has_company = false;

		$('#lead_company').focusout(function() {

			var sEmail = $("#lead_email").val();
			var fullname = $("#lead_name").val();
			var phone = $("#lead_phone").val();
			var company = $("#lead_company").val();

			if (company == '' && company_error_count < 1){
			// $("#error-email").show();
			company_error_count = company_error_count + 1
			$("#lead_company").after('<span id="error-company" class="error">Please your company name.</span>');
			has_company = false;
			
		}
			else if(company.length == '' && company_error_count > 0 ){
				$("#error-company").show();
				has_company = false;
	     
			}
			else if (company.length > 0 ){
				$("#error-company").hide();
				has_company = true;
			}

			if (has_email == true && has_fullname == true && has_phone == true && has_company == true) {

				$('input[type="submit"]').prop('disabled', false);

			}
		
		});

		$( "#lead_form" ).change(function() {
				var sEmail = $("#lead_email").val();
				var fullname = $("#lead_name").val();
				var company = $("#lead_company").val();
				var phone = $("#lead_phone").val();
				

				console.log(company)

				if (sEmail.length > 0 && emailReg.test(sEmail) == true && fullname.length > 0 && company.length > 0) {

				$('input[type="submit"]').prop('disabled', false);
								console.log(fullname.length);
				}
				else
				{
					$('input[type="submit"]').prop('disabled', true);
								console.log(fullname.length);
				}
		});
});