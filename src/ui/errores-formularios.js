export function mostrarErroresFormularioRegistro(errores) {
	const camposConError = Object.keys(errores);

	mostrarMensajeError(camposConError, errores);
	remarcarCampoError(camposConError);
}

function mostrarMensajeError(camposConError, errores) {
	camposConError.forEach((campo) => {
		const mensajeError = errores[campo];

		if (campo === "coincidencia-contrasenas") {
			const $mensajesErroresContrasenas = document.querySelectorAll(".mensaje-error-coincidencia-contrasenas");

			$mensajesErroresContrasenas.forEach((mensajeErrorContrasena) => {
				mensajeErrorContrasena.textContent = mensajeError;
				mensajeErrorContrasena.style.opacity = 1;
			});
		} else {
			const $mensajeCampoConError = document.querySelector(`.mensaje-error-${campo}`);
			$mensajeCampoConError.textContent = mensajeError;
			$mensajeCampoConError.style.opacity = 1;
		}
	});
}

function remarcarCampoError(camposConError) {
	camposConError.forEach((campo) => {
		if (campo === "coincidencia-contrasenas") {
			const $camposContraseñasRegistro = document.querySelectorAll(".registro-contrasenas");

			$camposContraseñasRegistro.forEach((campoContraseñaConError) => {
				campoContraseñaConError.className += " is-invalid";
			});
		} else {
			const $camposRegistro = document.querySelector(`.registro-${campo}`);
			$camposRegistro.className += " is-invalid";
		}
	});
}

/* ÉXITO CON LOS CAMPOS */

export function ocultarErroresFormularioRegistro (camposConExito, lasContrasenasCoinciden) {
	ocultarTextoError(camposConExito, lasContrasenasCoinciden);
	ocultarErrorCampoRegistro(camposConExito, lasContrasenasCoinciden);
}

function ocultarErrorCampoRegistro (camposConExito, lasContrasenasCoinciden) {
	camposConExito.forEach((campoSinError) => {
		if (campoSinError === "contrasena" && lasContrasenasCoinciden === false || campoSinError === "contrasena-confirmacion" && lasContrasenasCoinciden === false) {
			return false;
		}

		const $campoSinError = document.querySelector(`.registro-${campoSinError}`);
		$campoSinError.classList.remove("is-invalid");
	});
}

function ocultarTextoError(camposConExito, lasContrasenasCoinciden) {
	camposConExito.forEach((campoSinError) => {
		if (campoSinError === "contrasena" && lasContrasenasCoinciden === false || campoSinError === "contrasena-confirmacion" && lasContrasenasCoinciden === false) {
			return false;
		}

		const $mensajeError = document.querySelector(`.mensaje-error-${campoSinError}`);
		$mensajeError.textContent = "-";
		$mensajeError.style.opacity = 0;
	});
}
