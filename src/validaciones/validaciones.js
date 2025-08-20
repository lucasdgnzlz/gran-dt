import {
	mostrarErroresFormularioRegistro,
	ocultarErroresFormularioRegistro,
	mostrarErroresFormularioInicioSesion,
	ocultarErroresFormularioInicioSesion
} from "../ui/errores-formularios.js";

// VALIDACIÓN REGISTRO

export function validarFormularioRegistro(datosFormulario) {
	const errores = {};
	const camposConExito = [];
	let lasContrasenasCoinciden;

	if (!validarEmail(datosFormulario.email)) {
		errores.email = "Email inválido";
	} else {
		camposConExito.push("email");
	}

	if (!validarContrasena(datosFormulario.contrasenaRegistro)) {
		errores.contrasena = "Contraseña inválida";
	} else {
		camposConExito.push("contrasena");
	}

	if (!validarContrasena(datosFormulario.contrasenaRegistroConfirmacion)) {
		errores["contrasena-confirmacion"] = "Contraseña inválida";
	} else {
		camposConExito.push("contrasena-confirmacion");
	}

	if (datosFormulario.contrasenaRegistro !== datosFormulario.contrasenaRegistroConfirmacion) {
		errores["coincidencia-contrasenas"] = "Las contraseñas no coinciden";
		lasContrasenasCoinciden = false;
	} else {
		lasContrasenasCoinciden = true;
	}

	if (Object.keys(errores).length > 0) {
		mostrarErroresFormularioRegistro(errores);
		ocultarErroresFormularioRegistro(camposConExito, lasContrasenasCoinciden);
	} else {
		ocultarErroresFormularioRegistro(camposConExito);
		console.log("Formulario válido", camposConExito);
		// Esta data se enviaría a una db
	}
}

// VALIDACIÓN INICIO DE SESIÓN

export function validarFormularioInicioSesion(datosFormulario) {
	const datosAccesoPrueba = {
		email: "ejemploemail@gmail.com",
		contrasenaInicioSesion: "ejemplocontrasena1234",
	};

	let erroresFormulario = {};
	let camposConExito = [];

	if (datosFormulario.email !== datosAccesoPrueba.email) {
		erroresFormulario.email = "Email inválido";
	} else {
		camposConExito.push("email");
	}

	if (datosFormulario.contrasenaInicioSesion !== datosAccesoPrueba.contrasenaInicioSesion) {
		erroresFormulario.contrasena = "Contraseña inválida";
	} else{
		camposConExito.push("contrasena");
	}

	if (Object.keys(erroresFormulario).length > 0) {
		mostrarErroresFormularioInicioSesion(erroresFormulario);
		ocultarErroresFormularioInicioSesion(camposConExito);
	}
}

// Validaciones generales

function validarEmail(email) {
	const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return regexEmail.test(email);
}

function validarContrasena(contrasena) {
	const regexContrasena = /^(?=.*\d).{8,}$/;
	return regexContrasena.test(contrasena);
}
