/* Inicio página */

import { validarFormularioInicioSesion, validarFormularioRegistro } from "./validaciones/validaciones.js";
import {
  ocultarBotonesInicioPagina,
  mostrarFormularioCrearCuenta,
  ocultarFormularioDeCrearCuenta,
  mostrarFormularioInicioDeSesion,
  ocultarFormularioDeinicioDeSesion,
  mostrarMensajeBienvenida,
  mostrarMensajeRegistroExitoso
} from "./ui/ui.js";
import {
  limpiarErroresFormularioRegistro,
  mostrarErroresFormularioRegistro,
  limpiarErroresFormularioInicioSesion,
  mostrarErroresFormularioInicioSesion
} from "./ui/errores-formularios.js";

const $botonCrearCuenta = document.querySelector(".boton-crear-cuenta");
const $botonYaTengoCuenta = document.querySelector(".boton-ya-tengo-cuenta");

$botonCrearCuenta.addEventListener("click", () => {
  ocultarBotonesInicioPagina($botonCrearCuenta, $botonYaTengoCuenta);
  mostrarFormularioCrearCuenta();
});

$botonYaTengoCuenta.addEventListener("click", () => {
  ocultarBotonesInicioPagina($botonCrearCuenta, $botonYaTengoCuenta);
  mostrarFormularioInicioDeSesion();
});

/* Registro */

const $formularioRegistro = document.querySelector(".formulario-registro");

$formularioRegistro.addEventListener("submit", (e) => {
  e.preventDefault();

  const datosFormulario = new FormData($formularioRegistro);

  const datos = {
    email: datosFormulario.get("email"),
    contrasenaRegistro: datosFormulario.get("contrasena-registro"),
    contrasenaRegistroConfirmacion: datosFormulario.get("contrasena-registro-confirmacion"),
  };

  const errores = validarFormularioRegistro(datos);

  if (Object.keys(errores).length > 0) {
    limpiarErroresFormularioRegistro();
    mostrarErroresFormularioRegistro(errores);
  } else {
    limpiarErroresFormularioRegistro(),
    ocultarFormularioDeCrearCuenta();
    mostrarMensajeRegistroExitoso();
  }
});

/* Inicio de sesión */

const $formularioInicioDeSesion = document.querySelector(".formulario-inicio-de-sesion");

$formularioInicioDeSesion.addEventListener("submit", (e) => {
  e.preventDefault();

  const datosFormulario = new FormData($formularioInicioDeSesion);

  const datos = {
    email: datosFormulario.get("email"),
    contrasenaInicioSesion: datosFormulario.get("contrasena-inicio-sesion"),
  };

  const errores = validarFormularioInicioSesion(datos);

  if (Object.keys(errores).length > 0) {
    limpiarErroresFormularioInicioSesion();
    mostrarErroresFormularioInicioSesion(errores);
  } else {
    limpiarErroresFormularioInicioSesion();
    ocultarFormularioDeinicioDeSesion();
    mostrarMensajeBienvenida();
  }
});

/* Consultas de los formularios */ // Entiéndase como "¿ya sos usuario? iniciá sesión, etc"

const $consultaInicioSesion = document.querySelector(".consulta-inicio-sesion");

$consultaInicioSesion.addEventListener("click", (e) => {
  e.preventDefault();

  ocultarBotonesInicioPagina($botonCrearCuenta, $botonYaTengoCuenta);
  mostrarFormularioInicioDeSesion();
  ocultarFormularioDeCrearCuenta();
  limpiarErroresFormularioInicioSesion();
});

const $consultaRegistro = document.querySelector(".consulta-registro");

$consultaRegistro.addEventListener("click", (e) => {
  e.preventDefault();

  ocultarBotonesInicioPagina($botonCrearCuenta, $botonYaTengoCuenta);
  mostrarFormularioCrearCuenta();
  ocultarFormularioDeinicioDeSesion();
  limpiarErroresFormularioRegistro();
});
