// myAjax().then((data) => myAjax())
// res = myAjax(param);

function validacion(){
	var Usuario = document.getElementById("usuario").value;
    var Nombre = document.getElementById("nombre").value;
    var Password = document.getElementById("password").value;
    var Password2 = document.getElementById("password2").value;
    var Correo = document.getElementById("correo").value;
    var Telefono = document.getElementById("telefono").value;
    var Terminos = document.getElementById("terminos").value;
//  var url = 'php.php';
    // var str = $("form").serialize(); 
    // var result = $.ajax({
	// var url = 'mail.php',
    // type: "post",
    // async: false,
    // contentType: "json",
    // data: str
    // data: { "name": "Luis" }
// }).done(function(data) {
    // data = JSON.parse(data);

    // alert(data.departamento);
    // $("#result").html(data.departamento);
    // alert(data);
// });

/*	var parametros = {
		"usuario"   : Usuario,
        "nombre"    : Nombre,
        "password"  : Password,
        "password2" : Password2,
        "correo"    : Correo,
        "telefono"  : Telefono,
        "terminos"  : Terminos
	};*/

    alert("No voy a permitir que me exites de nuevo viejo sabroso: "+Nombre);

/*	$.ajax({
		url: 'php.php',
        type: 'post',
        dataType: 'json',
		data:{
            "usuario"   : Usuario,
            "nombre"    : Nombre,
            "password"  : Password,
            "password2" : Password2,
            "correo"    : Correo,
            "telefono"  : Telefono,
            "terminos"  : Terminos
        },
		success: function(data){
            alert("Success",data);
			$(".salida").html(data);
		}
	});*/
}