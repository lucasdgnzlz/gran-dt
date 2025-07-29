export function mostrarErroresFormularioRegistro (errores) {
	const camposConError = Object.keys(errores);

	camposConError.forEach((campo) => {
		const mensajeError = errores[campo];

		if(campo === "coincidencia-contraseñas") {
			const $camposContraseniasRegistro = document.querySelectorAll(".mensaje-error-coincidencia-contraseñas");

			$camposContraseniasRegistro.forEach((campoContrasenia) => {
				campoContrasenia.textContent = mensajeError;
				campoContrasenia.style.opacity = 1;
			});
		} else {
			const $mensajeCampoConError = document.querySelector(`.mensaje-error-${campo}`);
			$mensajeCampoConError.textContent = mensajeError;
			$mensajeCampoConError.style.opacity = 1;
		}
	});
}
