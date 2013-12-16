 // initialize tooltipster on text input elements
		    $('#form input[type="text"]').tooltipster({
		        trigger: 'custom',
		        onlyOne: false,
		        position: 'right'
		    });

		    // initialize validate plugin on the form
		    $('#form').validate({
		        errorPlacement: function (error, element) {
		            $(element).tooltipster('update', $(error).text());
		            $(element).tooltipster('show');
		        },
		        success: function (label, element) {
		            $(element).tooltipster('update', 'accepted');
		        },
		        rules: {
		            firstName: {
		                required: true
		            },
		            lastName: {
		                required: true
		            },
		            email: {
		            	required: true,
		            	email: true
		            },
	            	confirmEmail: {
				      equalTo: "#email"
				    }
		            
		        },
		        submitHandler: function (form) { 
		            console.log('Valid')
		            return false;
		        }
		    });