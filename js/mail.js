$(document).ready(function(){

	//Mail en castellano
	$('.sendButton').click(function(){
		// e.preventDefault();
		$('.correo').val('');
		$('.nombre').val('');
		$('.mensaje').val('');
		$('.formMotive').val('');
		alert("Disculpe, ha ocurrido un problema al enviar la consulta. ")
		// if(validateRequiredInput($('.nombre').val()) && validateRequiredInput($('.correo').val()) && validateRequiredInput($('.mensaje').val())){
		// 	if(validateCorrectEmail($('.correo').val())){
		// 		var json= {
		// 			"key": "",
		// 	  	"message": {
		// 	  			"subject": 'Contacto via web: ',
		// 		      "text": $('.mensaje').val(),
		// 		    	"from_email":$('.correo').val(),
		// 		    	"from_name": $('.nombre').val(),
		// 		    "to": [
		// 		      {
		// 		        "email": "delfipolito@hotmail.com",
		// 		        "name": "Fincas de Victoria"
		// 		      }
		// 		    ]
		// 		  }
		// 		}
		// 		$.ajax({
		// 			type: "POST",
		// 			url: 'https://mandrillapp.com/api/1.0/messages/send.json',
		// 			dataType: "json",
		// 			contentType: 'application/json',
		// 			data:JSON.stringify(json),
		// 			success:function() {
		// 				$('.correo').val('');
		// 				$('.nombre').val('');
		// 				$('.mensaje').val('');
		// 				$('.formMotive').val('');
		// 				alert("Gracias, su consulta ha sido enviada.");
		//       }
		// 		});
		// 	}
		}

	});

	function validateRequiredInput(value) {
  if (value=='') {
    alert('Hay campos obligatorios sin completar. Por favor completa los campos antes de enviar la consulta.');
    return false;
  }
  return true;
	};

	function validateCorrectEmail(value) {
		var regex = /([^ ]+)[@]{1}([^ ]+)[.]{1}([^ ]+)$/;
    if(!regex.test(value)){
   		alert('Por favor completa el campo de email con un formato valido antes de enviar la consulta.');
    	return false;
    }

    return true;

	};

});
