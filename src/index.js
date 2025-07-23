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
