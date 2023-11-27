describe("Fichero coches.html (1 punto)", () => {
    it("Creación del formulario", () => {
        cy.visit('/coches.html');
        cy.get("#creacion form#anyadircoche").should("exist");
        cy.get("#creacion form#anyadircoche input#marca").should("exist");
        cy.get("#creacion form#anyadircoche input[name=marca]").should("exist");
        cy.get("#creacion form#anyadircoche input#color").should("exist");
        cy.get("#creacion form#anyadircoche input[name=color]").should("exist");
        cy.get("#creacion form#anyadircoche input[type=date]#fechamatricula").should("exist");
        cy.get("#creacion form#anyadircoche input[type=date][name=fechamatricula]").should("exist");
        cy.get("#creacion form#anyadircoche button[type=submit]").should("exist");
    });

})
