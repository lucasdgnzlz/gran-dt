context("Inicio de sesión", () => {
  beforeEach(() => {
    cy.visit("/"); // URL ya definida en la configuración de Cypress
  });

  it("Inicio correcto de sesión", () => {
    const datosAccesoPrueba = {
      email: "ejemploemail@gmail.com",
      contrasenaInicioSesion: "ejemplocontrasena1234",
    };

    cy.get(".boton-ya-tengo-cuenta")
			.should("be.visible")
			.should("have.text", "Ya tengo cuenta")
			.click();

    cy.get(".formulario-inicio-de-sesion")
			.should("be.visible");

    cy.get("#email-inicio-sesion")
			.should("be.visible").type(datosAccesoPrueba.email);

		cy.get("#contrasena-inicio-sesion")
			.should("be.visible")
			.type(datosAccesoPrueba.contrasenaInicioSesion);

		cy.get(".mensaje-de-bienvenida")
			.should("not.be.visible");

		cy.get(".boton-iniciar-sesion")
			.should("be.visible")
			.click();

		cy.get(".mensaje-de-bienvenida")
			.should("be.visible");

		cy.get(".contenedor-formulario-inicio-de-sesion")
			.should("not.be.visible");
  });
});
