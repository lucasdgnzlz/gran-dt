/* Inicio página */

import {validarFormularioRegistro} from "./validaciones/validaciones.js";

const $botonCrearCuenta = document.querySelector(".boton-crear-cuenta");
const $botonYaTengoCuenta = document.querySelector(".boton-ya-tengo-cuenta");

$botonCrearCuenta.addEventListener("click", () => {
	ocultarBotonesInicioPagina();
	mostrarFormularioCrearCuenta();
});

$botonYaTengoCuenta.addEventListener("click", () => {
	ocultarBotonesInicioPagina();
	mostrarFormularioInicioDeSesion();
});

function ocultarBotonesInicioPagina() {
	$botonCrearCuenta.id = "oculto";
	$botonYaTengoCuenta.id = "oculto";
}

function mostrarFormularioCrearCuenta() {
	const $contenedorFormularioCrearCuenta = document.querySelector(".contenedor-formulario-crear-cuenta");
	$contenedorFormularioCrearCuenta.id = "";
}

function mostrarFormularioInicioDeSesion() {
	const $contenedorFormularioInicioDeSesion = document.querySelector(".contenedor-formulario-inicio-de-sesion");
	$contenedorFormularioInicioDeSesion.id = "";
}

/* Registro */

const $formularioRegistro = document.querySelector(".formulario-registro");

$formularioRegistro.addEventListener("submit", (e) => {
	e.preventDefault();

	const datosFormulario = new FormData($formularioRegistro);

	const datos = {
		email: datosFormulario.get("email"),
		contrasenaRegistro: datosFormulario.get("contrasena-registro"),
		contrasenaRegistroConfirmacion: datosFormulario.get("contrasena-registro-confirmacion")
	};

	validarFormularioRegistro(datos);
});
