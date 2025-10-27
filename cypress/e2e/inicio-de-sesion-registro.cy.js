context("Inicio de sesión", () => {
  beforeEach(() => {
    cy.visit("/"); // URL ya definida en la configuración de Cypress
  });

  const datosAccesoPrueba = {
    email: "ejemploemail@gmail.com",
    contrasenaInicioSesion: "ejemplocontrasena1234",
  };

  it("Inicio correcto de sesión", () => {
    cy.get(".boton-ya-tengo-cuenta").should("be.visible").and("have.text", "Ya tengo cuenta").click();

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

context("Registro", () => {
  beforeEach(() => {
    cy.visit("/"); // URL ya definida en la configuración de Cypress
  });

  it("Registro exitoso", () => {
    cy.get(".boton-crear-cuenta").should("be.visible").and("have.text", "Crear cuenta").click();
    cy.get(".boton-crear-cuenta").should("be.not.visible");

    cy.get(".formulario-registro").should("be.visible");

    cy.get(".registro-email").should("be.visible").type("ejemplo@algo.com");
    cy.get(".registro-contrasena").should("be.visible").type("12341234");
    cy.get(".registro-contrasena-confirmacion").should("be.visible").type("12341234");
    cy.get(".boton-registrarse").should("be.visible").click();

    cy.get(".formulario-registro").should("not.be.visible");

    cy.get(".mensaje-de-registro-completado").should("be.visible");
  });

  it("Registro fallido total", () => {
    cy.get(".boton-crear-cuenta").should("be.visible").and("have.text", "Crear cuenta").click();
    cy.get(".boton-crear-cuenta").should("be.not.visible");

    cy.get(".formulario-registro").should("be.visible");

    cy.get(".registro-email").should("be.visible").type("ejemploparafallar@s");
    cy.get(".registro-contrasena").should("be.visible").type("  ");
    cy.get(".registro-contrasena-confirmacion").should("be.visible").type("  ");

    cy.get(".mensaje-error-email-registro").should("not.be.visible");
    cy.get(".mensaje-error-contrasena-registro").should("not.be.visible");
    cy.get(".mensaje-error-contrasena-confirmacion-registro").should("not.be.visible");

    cy.get(".boton-registrarse").should("be.visible").click();

    cy.get(".formulario-registro").should("be.visible");

    cy.get(".mensaje-error-email-registro").should("be.visible").and("have.text", "Email inválido");
    cy.get(".mensaje-error-contrasena-registro").should("be.visible").and("have.text", "Contraseña inválida");
    cy.get(".mensaje-error-contrasena-confirmacion-registro")
      .should("be.visible")
      .and("have.text", "Contraseña inválida");

    cy.get(".registro-email").should("be.visible").and("have.class", "is-invalid");
    cy.get(".registro-contrasena").should("be.visible").and("have.class", "is-invalid");
    cy.get(".registro-contrasena-confirmacion").should("be.visible").and("have.class", "is-invalid");
  });

  it("Registro exitoso luego de registro fallido", () => {
    cy.get(".boton-crear-cuenta").should("be.visible").and("have.text", "Crear cuenta").click();
    cy.get(".boton-crear-cuenta").should("be.not.visible");

    cy.get(".formulario-registro").should("be.visible");

    cy.get(".registro-email").should("be.visible").type("ejemploparafallar@s");
    cy.get(".registro-contrasena").should("be.visible").type("  ");
    cy.get(".registro-contrasena-confirmacion").should("be.visible").type("  ");

    cy.get(".mensaje-error-email-registro").should("not.be.visible");
    cy.get(".mensaje-error-contrasena-registro").should("not.be.visible");
    cy.get(".mensaje-error-contrasena-confirmacion-registro").should("not.be.visible");

    cy.get(".boton-registrarse").should("be.visible").click();

    cy.get(".formulario-registro").should("be.visible");

    cy.get(".mensaje-error-email-registro").should("be.visible").and("have.text", "Email inválido");
    cy.get(".mensaje-error-contrasena-registro").should("be.visible").and("have.text", "Contraseña inválida");
    cy.get(".mensaje-error-contrasena-confirmacion-registro")
      .should("be.visible")
      .and("have.text", "Contraseña inválida");

    cy.get(".registro-email").should("be.visible").and("have.class", "is-invalid");
    cy.get(".registro-contrasena").should("be.visible").and("have.class", "is-invalid");
    cy.get(".registro-contrasena-confirmacion").should("be.visible").and("have.class", "is-invalid");

    cy.get(".registro-email").should("be.visible").clear().type("ejemplo@algo.com")
    cy.get(".registro-contrasena").should("be.visible").clear().type("12341234");
    cy.get(".registro-contrasena-confirmacion").should("be.visible").clear().type("12341234");
    cy.get(".boton-registrarse").should("be.visible").click();

    cy.get(".formulario-registro").should("not.be.visible");

    cy.get(".mensaje-de-registro-completado").should("be.visible");
  });
});
