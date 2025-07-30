import {mostrarErroresFormularioRegistro} from "../ui/errores-formularios.js"; 

export function validarFormularioRegistro(datosFormulario) {
	const errores = {};
  
	if (!validarEmail(datosFormulario.email)) {
		errores.email = "Email inválido";
	}

	if (!validarContrasena(datosFormulario.contrasenaRegistro)) {
		errores.contrasena = "Contraseña inválida";
	}

	if (!validarContrasena(datosFormulario.contrasenaRegistroConfirmacion)) {
		errores["contrasena-confirmacion"] = "Contraseña inválida";
	}

	if (datosFormulario.contrasenaRegistro !== datosFormulario.contrasenaRegistroConfirmacion) {
		errores["coincidencia-contrasenas"] = "Las contraseñas no coinciden";
	}

	if (Object.keys(errores).length > 0) {
		mostrarErroresFormularioRegistro(errores);
	} else {
		console.log("Formulario válido", { email, password });
		// Esta data se enviaría a una db
	}
}

export function validarFormularioInicioSesion(datosFormulario) {}

function validarEmail(email) {
	const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return regexEmail.test(email);
}

function validarContrasena(contrasena) {
	const regexContrasena = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+[\]{};':"\\|,.<>/?-]{8,12}$/;
	return regexContrasena.test(contrasena);
}

function validarCoincidenciaContrasenasRegistro(contrasenas) {}
