export function ocultarBotonesInicioPagina($botonCrearCuenta, $botonYaTengoCuenta) {
	$botonCrearCuenta.id = "oculto";
	$botonYaTengoCuenta.id = "oculto";
}

export function mostrarFormularioCrearCuenta() {
	const $contenedorFormularioCrearCuenta = document.querySelector(".contenedor-formulario-crear-cuenta");
	$contenedorFormularioCrearCuenta.id = "";
}

export function mostrarFormularioInicioDeSesion() {
	const $contenedorFormularioInicioDeSesion = document.querySelector(".contenedor-formulario-inicio-de-sesion");
	$contenedorFormularioInicioDeSesion.id = "";
}

export function ocultarFormularioDeCrearCuenta() {
	const $contenedorFormularioCrearCuenta = document.querySelector(".contenedor-formulario-crear-cuenta");
	$contenedorFormularioCrearCuenta.id = "oculto";
}

export function ocultarFormularioDeinicioDeSesion() {
	const $contenedorFormularioInicioDeSesion = document.querySelector(".contenedor-formulario-inicio-de-sesion");
	$contenedorFormularioInicioDeSesion.id = "oculto";
}

export function mostrarMensajeBienvenida() {
	const $mensajeDeBienvenida = document.querySelector(".mensaje-de-bienvenida");
	$mensajeDeBienvenida.id = "";
}
