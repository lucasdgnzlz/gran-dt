import {mostrarErroresFormularioRegistro} from "../ui/errores-formularios.js"; 

export function validarFormularioRegistro(datosFormulario) {
	const errores = {};
  
	if (!validarEmail(datosFormulario.email)) {
		errores.email = "Email inválido";
	}

	if (!validarContraseña(datosFormulario.contraseñaRegistro)) {
		errores.contraseña = "Contraseña inválida";
	}

	if (!validarContraseña(datosFormulario.contraseñaRegistroConfirmacion)) {
		errores["contraseña-confirmacion"] = "Contraseña inválida";
	}

	if (datosFormulario.contraseñaRegistro !== datosFormulario.contraseñaRegistroConfirmacion) {
		errores["coincidencia-contraseñas"] = "Las contraseñas no coinciden";
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

function validarContraseña(contraseña) {
	const regexContraseña = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+[\]{};':"\\|,.<>/?-]{8,12}$/;
	return regexContraseña.test(contraseña);
}

function validarCoincidenciaContraseñasRegistro(contraseñas) {}
