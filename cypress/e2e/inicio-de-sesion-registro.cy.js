context("Inicio de sesión", () => {
  beforeEach(() => {
    cy.visit("/"); // URL ya definida en la configuración de Cypress
  });

  const datosAccesoPrueba = {
    email: "ejemploemail@gmail.com",
    contrasenaInicioSesion: "ejemplocontrasena1234",
  };

  it("Inicio correcto de sesión", () => {
    cy.get(".boton-ya-tengo-cuenta").should("be.visible").should("have.text", "Ya tengo cuenta").click();

    cy.get(".formulario-inicio-de-sesion").should("be.visible");

    cy.get("#email-inicio-sesion").should("be.visible").type(datosAccesoPrueba.email);

    cy.get("#contrasena-inicio-sesion").should("be.visible").type(datosAccesoPrueba.contrasenaInicioSesion);

    cy.get(".mensaje-de-bienvenida").should("not.be.visible");

    cy.get(".boton-iniciar-sesion").should("be.visible").click();

    cy.get(".mensaje-de-bienvenida").should("be.visible");

    cy.get(".contenedor-formulario-inicio-de-sesion").should("not.be.visible");
  });

  it("Inicio de sesión fallido", () => {
    cy.get(".boton-ya-tengo-cuenta").should("be.visible").and("have.text", "Ya tengo cuenta").click();

    cy.get(".formulario-inicio-de-sesion").should("be.visible");

    cy.get("#email-inicio-sesion").should("be.visible").type("mailnocorrecto@ejemplo.com");
    cy.get("#contrasena-inicio-sesion").should("be.visible").type("contrasena123");

    cy.get(".mensaje-de-bienvenida").should("not.be.visible");
    cy.get(".mensaje-error-email-inicio-sesion").should("not.be.visible");
    cy.get(".mensaje-error-contrasena-inicio-sesion").should("not.be.visible");

    cy.get(".boton-iniciar-sesion").should("be.visible").click();

    cy.get(".mensaje-de-bienvenida").should("not.be.visible");
    cy.get(".mensaje-error-email-inicio-sesion").should("be.visible").and("have.text", "Email inválido");
    cy.get(".mensaje-error-contrasena-inicio-sesion").should("be.visible").and("have.text", "Contraseña inválida");

    cy.get("#email-inicio-sesion").should("be.visible").and("have.class", "is-invalid");
    cy.get("#contrasena-inicio-sesion").should("be.visible").and("have.class", "is-invalid");
  });
});
