const SELECTORES = {
  BOTONES: {
    CREAR_CUENTA: ".boton-crear-cuenta",
    YA_TENGO_CUENTA: ".boton-ya-tengo-cuenta",
    INICIAR_SESION: ".boton-iniciar-sesion",
    REGISTRARSE: ".boton-registrarse",
  },

  MENSAJES: {
    BIENVENIDA: ".mensaje-de-bienvenida",
    REGISTRO_COMPLETADO: ".mensaje-de-registro-completado",
    INICIO_SESION_EMAIL_ERROR: ".mensaje-error-email-inicio-sesion",
    INICIO_SESION_CONTRASENA_ERROR: ".mensaje-error-contrasena-inicio-sesion",
    REGISTRO_EMAIL_ERROR: ".mensaje-error-email-registro",
    REGISTRO_CONTRASENA_ERROR: ".mensaje-error-contrasena-registro",
    REGISTRO_CONTRASENA_CONFIRMACION_ERROR: ".mensaje-error-contrasena-confirmacion-registro",
  },
};

context("Inicio de sesión", () => {
  beforeEach(() => {
    cy.visit("/"); // URL ya definida en la configuración de Cypress
  });

  const datosAccesoPrueba = {
    email: "ejemploemail@gmail.com",
    contrasenaInicioSesion: "ejemplocontrasena1234",
  };

  it("Inicio correcto de sesión", () => {
    cy.get(SELECTORES.BOTONES.YA_TENGO_CUENTA).should("be.visible").and("have.text", "Ya tengo cuenta").click();

    cy.get(".formulario-inicio-de-sesion").should("be.visible");

    cy.get("#email-inicio-sesion").should("be.visible").type(datosAccesoPrueba.email);
    cy.get("#contrasena-inicio-sesion").should("be.visible").type(datosAccesoPrueba.contrasenaInicioSesion);

    cy.get(SELECTORES.MENSAJES.BIENVENIDA).should("not.be.visible");

    cy.get(SELECTORES.BOTONES.INICIAR_SESION).should("be.visible").click();

    cy.get(SELECTORES.MENSAJES.BIENVENIDA).should("be.visible");
    cy.get(".contenedor-formulario-inicio-de-sesion").should("not.be.visible");
  });

  it("Inicio de sesión fallido", () => {
    cy.get(SELECTORES.BOTONES.YA_TENGO_CUENTA).should("be.visible").and("have.text", "Ya tengo cuenta").click();

    cy.get(".formulario-inicio-de-sesion").should("be.visible");

    cy.get("#email-inicio-sesion").should("be.visible").type("mailnocorrecto@ejemplo.com");
    cy.get("#contrasena-inicio-sesion").should("be.visible").type("contrasena123");

    cy.get(SELECTORES.MENSAJES.BIENVENIDA).should("not.be.visible");
    cy.get(".mensaje-error-email-inicio-sesion").should("not.be.visible");
    cy.get(".mensaje-error-contrasena-inicio-sesion").should("not.be.visible");

    cy.get(SELECTORES.BOTONES.INICIAR_SESION).should("be.visible").click();

    cy.get(SELECTORES.MENSAJES.BIENVENIDA).should("not.be.visible");
    cy.get(".mensaje-error-email-inicio-sesion").should("be.visible").and("have.text", "Email inválido");
    cy.get(".mensaje-error-contrasena-inicio-sesion").should("be.visible").and("have.text", "Contraseña inválida");

    cy.get("#email-inicio-sesion").should("be.visible").and("have.class", "is-invalid");
    cy.get("#contrasena-inicio-sesion").should("be.visible").and("have.class", "is-invalid");
  });

  it("Inicio de sesión exitoso luego de uno fallido", () => {
    cy.get(SELECTORES.BOTONES.YA_TENGO_CUENTA).should("be.visible").and("have.text", "Ya tengo cuenta").click();

    cy.get(".formulario-inicio-de-sesion").should("be.visible");

    cy.get("#email-inicio-sesion").should("be.visible").type("mailnocorrecto@ejemplo.com");
    cy.get("#contrasena-inicio-sesion").should("be.visible").type("contrasena123");

    cy.get(SELECTORES.MENSAJES.BIENVENIDA).should("not.be.visible");
    cy.get(".mensaje-error-email-inicio-sesion").should("not.be.visible");
    cy.get(".mensaje-error-contrasena-inicio-sesion").should("not.be.visible");

    cy.get(SELECTORES.BOTONES.INICIAR_SESION).should("be.visible").click();

    cy.get(SELECTORES.MENSAJES.BIENVENIDA).should("not.be.visible");
    cy.get(".mensaje-error-email-inicio-sesion").should("be.visible").and("have.text", "Email inválido");
    cy.get(".mensaje-error-contrasena-inicio-sesion").should("be.visible").and("have.text", "Contraseña inválida");

    cy.get("#email-inicio-sesion").should("be.visible").and("have.class", "is-invalid");
    cy.get("#contrasena-inicio-sesion").should("be.visible").and("have.class", "is-invalid");

    cy.get("#email-inicio-sesion").should("be.visible").clear().type(datosAccesoPrueba.email);
    cy.get("#contrasena-inicio-sesion").should("be.visible").clear().type(datosAccesoPrueba.contrasenaInicioSesion);

    cy.get(SELECTORES.MENSAJES.BIENVENIDA).should("not.be.visible");

    cy.get(SELECTORES.BOTONES.INICIAR_SESION).should("be.visible").click();

    cy.get(SELECTORES.MENSAJES.BIENVENIDA).should("be.visible");
    cy.get(".contenedor-formulario-inicio-de-sesion").should("not.be.visible");
  });
});

context("Registro", () => {
  beforeEach(() => {
    cy.visit("/"); // URL ya definida en la configuración de Cypress
  });

  it("Registro exitoso", () => {
    cy.get(SELECTORES.BOTONES.CREAR_CUENTA).should("be.visible").and("have.text", "Crear cuenta").click();
    cy.get(SELECTORES.BOTONES.CREAR_CUENTA).should("be.not.visible");

    cy.get(".formulario-registro").should("be.visible");

    cy.get(".registro-email").should("be.visible").type("ejemplo@algo.com");
    cy.get(".registro-contrasena").should("be.visible").type("12341234");
    cy.get(".registro-contrasena-confirmacion").should("be.visible").type("12341234");
    cy.get(SELECTORES.BOTONES.REGISTRARSE).should("be.visible").click();

    cy.get(".formulario-registro").should("not.be.visible");

    cy.get(SELECTORES.MENSAJES.REGISTRO_COMPLETADO).should("be.visible");
  });

  it("Registro fallido total", () => {
    cy.get(SELECTORES.BOTONES.CREAR_CUENTA).should("be.visible").and("have.text", "Crear cuenta").click();
    cy.get(SELECTORES.BOTONES.CREAR_CUENTA).should("be.not.visible");

    cy.get(".formulario-registro").should("be.visible");

    cy.get(".registro-email").should("be.visible").type("ejemploparafallar@s");
    cy.get(".registro-contrasena").should("be.visible").type("  ");
    cy.get(".registro-contrasena-confirmacion").should("be.visible").type("  ");

    cy.get(SELECTORES.MENSAJES.REGISTRO_EMAIL_ERROR).should("not.be.visible");
    cy.get(SELECTORES.MENSAJES.REGISTRO_CONTRASENA_ERROR).should("not.be.visible");
    cy.get(SELECTORES.MENSAJES.REGISTRO_CONTRASENA_CONFIRMACION_ERROR).should("not.be.visible");

    cy.get(SELECTORES.BOTONES.REGISTRARSE).should("be.visible").click();

    cy.get(".formulario-registro").should("be.visible");

    cy.get(SELECTORES.MENSAJES.REGISTRO_EMAIL_ERROR).should("be.visible").and("have.text", "Email inválido");
    cy.get(SELECTORES.MENSAJES.REGISTRO_CONTRASENA_ERROR).should("be.visible").and("have.text", "Contraseña inválida");
    cy.get(SELECTORES.MENSAJES.REGISTRO_CONTRASENA_CONFIRMACION_ERROR)
      .should("be.visible")
      .and("have.text", "Contraseña inválida");

    cy.get(".registro-email").should("be.visible").and("have.class", "is-invalid");
    cy.get(".registro-contrasena").should("be.visible").and("have.class", "is-invalid");
    cy.get(".registro-contrasena-confirmacion").should("be.visible").and("have.class", "is-invalid");
  });

  it("Registro exitoso luego de registro fallido", () => {
    cy.get(SELECTORES.BOTONES.CREAR_CUENTA).should("be.visible").and("have.text", "Crear cuenta").click();
    cy.get(SELECTORES.BOTONES.CREAR_CUENTA).should("be.not.visible");

    cy.get(".formulario-registro").should("be.visible");

    cy.get(".registro-email").should("be.visible").type("ejemploparafallar@s");
    cy.get(".registro-contrasena").should("be.visible").type("  ");
    cy.get(".registro-contrasena-confirmacion").should("be.visible").type("  ");

    cy.get(SELECTORES.MENSAJES.REGISTRO_EMAIL_ERROR).should("not.be.visible");
    cy.get(SELECTORES.MENSAJES.REGISTRO_CONTRASENA_ERROR).should("not.be.visible");
    cy.get(SELECTORES.MENSAJES.REGISTRO_CONTRASENA_CONFIRMACION_ERROR).should("not.be.visible");

    cy.get(SELECTORES.BOTONES.REGISTRARSE).should("be.visible").click();

    cy.get(".formulario-registro").should("be.visible");

    cy.get(SELECTORES.MENSAJES.REGISTRO_EMAIL_ERROR).should("be.visible").and("have.text", "Email inválido");
    cy.get(SELECTORES.MENSAJES.REGISTRO_CONTRASENA_ERROR).should("be.visible").and("have.text", "Contraseña inválida");
    cy.get(SELECTORES.MENSAJES.REGISTRO_CONTRASENA_CONFIRMACION_ERROR)
      .should("be.visible")
      .and("have.text", "Contraseña inválida");

    cy.get(".registro-email").should("be.visible").and("have.class", "is-invalid");
    cy.get(".registro-contrasena").should("be.visible").and("have.class", "is-invalid");
    cy.get(".registro-contrasena-confirmacion").should("be.visible").and("have.class", "is-invalid");

    cy.get(".registro-email").should("be.visible").clear().type("ejemplo@algo.com");
    cy.get(".registro-contrasena").should("be.visible").clear().type("12341234");
    cy.get(".registro-contrasena-confirmacion").should("be.visible").clear().type("12341234");
    cy.get(SELECTORES.BOTONES.REGISTRARSE).should("be.visible").click();

    cy.get(SELECTORES.MENSAJES.REGISTRO_EMAIL_ERROR).should("not.be.visible");
    cy.get(SELECTORES.MENSAJES.REGISTRO_CONTRASENA_ERROR).should("not.be.visible");
    cy.get(SELECTORES.MENSAJES.REGISTRO_CONTRASENA_CONFIRMACION_ERROR).should("not.be.visible");

    cy.get(".registro-email").should("not.be.visible").and("not.have.class", "is-invalid");
    cy.get(".registro-contrasena").should("not.be.visible").and("not.have.class", "is-invalid");
    cy.get(".registro-contrasena-confirmacion").should("not.be.visible").and("not.have.class", "is-invalid");

    cy.get(".formulario-registro").should("not.be.visible");

    cy.get(SELECTORES.MENSAJES.REGISTRO_COMPLETADO).should("be.visible");
  });
});

context("Navegación entre formularios", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Debe poder alternar entre inicio de sesión y registro", () => {
    // Desde inicio de sesión a registro
    cy.get(SELECTORES.BOTONES.YA_TENGO_CUENTA).click();
    cy.get(".formulario-inicio-de-sesion").should("be.visible");
    cy.get(".formulario-registro").should("not.be.visible");
    
    // Desde registro a inicio de sesión
    cy.get(".consulta-registro").click();
    cy.get(".formulario-registro").should("be.visible");
    cy.get(".formulario-inicio-de-sesion").should("not.be.visible");
    
    cy.get(".consulta-inicio-sesion").click();
    cy.get(".formulario-inicio-de-sesion").should("be.visible");
    cy.get(".formulario-registro").should("not.be.visible");
  });
});
