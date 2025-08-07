// ERRORES FORMULARIO REGISTRO

export function mostrarErroresFormularioRegistro(errores) {
  const camposConError = Object.keys(errores);

  mostrarMensajeErrorRegistro(camposConError, errores);
  remarcarCampoErrorRegistro(camposConError);
}

function mostrarMensajeErrorRegistro(camposConError, errores) {
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

// ÉXITO CON LOS CAMPOS REGISTRO

export function ocultarErroresFormularioRegistro(camposConExito, lasContrasenasCoinciden) {
  ocultarTextoErrorRegistro(camposConExito, lasContrasenasCoinciden);
  ocultarErrorCampoRegistro(camposConExito, lasContrasenasCoinciden);
}

function ocultarErrorCampoRegistro(camposConExito, lasContrasenasCoinciden) {
  camposConExito.forEach((campoSinError) => {
    if (
      (campoSinError === "contrasena" && lasContrasenasCoinciden === false) ||
      (campoSinError === "contrasena-confirmacion" && lasContrasenasCoinciden === false)
    ) {
      return false;
    }

    const $campoSinError = document.querySelector(`.registro-${campoSinError}`);
    $campoSinError.classList.remove("is-invalid");
  });
}

function ocultarTextoErrorRegistro(camposConExito, lasContrasenasCoinciden) {
  camposConExito.forEach((campoSinError) => {
    if (
      (campoSinError === "contrasena" && lasContrasenasCoinciden === false) ||
      (campoSinError === "contrasena-confirmacion" && lasContrasenasCoinciden === false)
    ) {
      return false;
    }

    const $mensajeError = document.querySelector(`.mensaje-error-${campoSinError}`);
    $mensajeError.textContent = "-";
    $mensajeError.style.opacity = 0;
  });
}

function remarcarCampoErrorRegistro(camposConError) {
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

// FORMULARIO INICIO DE SESIÓN

export function mostrarErroresFormularioInicioSesion(errores) {
  const camposConError = Object.keys(errores);

  mostrarMensajeErrorInicioSesion(camposConError, errores);
  // remarcarCampoErrorInicioSesion(camposConError); Ver después
}

function mostrarMensajeErrorInicioSesion(camposConError, errores) {
  camposConError.forEach((campo) => {
    const mensajeError = errores[campo];

    const $mensajeCampoConError = document.querySelector(`.mensaje-error-${campo}-inicio-sesion`);
    $mensajeCampoConError.textContent = mensajeError;
    $mensajeCampoConError.style.opacity = 1;
  });
}
