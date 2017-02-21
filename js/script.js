
function enviarTest(){
	if(validate()){
		$(".icon-validate").addClass('show-icon');
		ajaxCall();
	}
}

function validate(){
	var valid = true;

	// Validar nom
	var name = $("#name").val();
	if(name == '' || name == null){
	    valid = false;
	    $("#name").addClass('invalid');
	}

	// Validar email
	var mail = $("#mail").val();
	if (!/^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i.test(mail)){
	    valid = false;
	    $("#mail").addClass('invalid');
	}

	return valid;	
} 

function ajaxCall(){
	$.ajax({
		url: "http://private-644da-frontend7.apiary-mock.com/aplication",
	    dataType: "json",
	    type: 'POST',
	    success: function(data){
	    	//console.log(data);
	    	for (var i = 0; i < data.length; i++){
	    		var persona = data[i];
	    		if(persona.edad > 24 && persona.sexe == "Femeni"){
					console.log(persona.nom);	
				}
	    	}	
	    }
	});		
}

$(function() {
    $("#name").on('focus', function(){
		$(this).removeClass('invalid');
		$(".icon-validate").removeClass('show-icon');
	});

	$("#mail").on('focus', function(){
		$(this).removeClass('invalid');
		$(".icon-validate").removeClass('show-icon');
	});
});
