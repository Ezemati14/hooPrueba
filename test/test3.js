describe("Lógica web de la aplicación (4 puntos)", () => {
    it("Función 'anyadirCocheWeb' y manejador de eventos del formulario", () => {
        cy.visit('/coches.html');
        cy.get("#anyadircoche #marca").invoke("val", "c3marca");
        cy.get("#anyadircoche #color").invoke("val", "c3color");
        cy.get("#anyadircoche #fechamatricula").invoke("val", "2022-11-24");
        cy.get("#anyadircoche button[type=submit]").click();
        cy.get("#coches > div.coche").should((divs) => {
            expect(divs, "Debe mostrarse 1 coche en etiqueta 'div.coche'").to.have.length(1);
        });
        cy.get("#coches > div.coche > dl").should((divs) => {
            expect(divs, "Debe mostrarse una etiqueta 'dl' dentro de 'div.coche'").to.have.length(1);
        });
        cy.get("#coches > div.coche > dl > dt").should((divs) => {
            expect(divs, "Deben mostrarse tres etiquetas 'dt' dentro de 'div.coche dl'").to.have.length(3);
            expect(divs[0].innerText, "Debe mostrarse el texto 'Marca'").to.equal("Marca");
            expect(divs[1].innerText, "Debe mostrarse el texto 'Color'").to.equal("Color");
            expect(divs[2].innerText, "Debe mostrarse el texto 'Fecha de matriculación'").to.equal("Fecha de matriculación");
        });
        cy.get("#coches > div.coche > dl > dd").should((divs) => {
            expect(divs, "Deben mostrarse tres etiquetas 'dd' dentro de 'div.coche dl'").to.have.length(3);
            expect(divs[0].innerText, "Debe mostrarse la marca del coche").to.equal("c3marca");
            expect(divs[1].innerText, "Debe mostrarse el color del coche").to.equal("c3color");
            expect(divs[2].innerText, "Debe mostrarse la fecha de matriculación en formato localizado").to.equal("24/11/2022");
        });
        cy.get("#anyadircoche #marca").invoke("val", "c4marca");
        cy.get("#anyadircoche #color").invoke("val", "c4color");
        cy.get("#anyadircoche #fechamatricula").invoke("val", "2022-05-26");
        cy.get("#anyadircoche button[type=submit]").click();
        cy.get("#coches > div.coche").should((divs) => {
            expect(divs, "Deben mostrarse 2 coches en etiquetas 'div.coche'").to.have.length(2);
        });
        cy.get("#coches > div.coche > dl").should((divs) => {
            expect(divs, "Debe mostrarse una etiqueta 'dl' dentro de 'div.coche'").to.have.length(2);
        });
        cy.get("#coches > div.coche > dl > dt").should((divs) => {
            expect(divs, "Deben mostrarse tres etiquetas 'dt' dentro de 'div.coche dl'").to.have.length(6);
            expect(divs[0].innerText, "Debe mostrarse el texto 'Marca'").to.equal("Marca");
            expect(divs[1].innerText, "Debe mostrarse el texto 'Color'").to.equal("Color");
            expect(divs[2].innerText, "Debe mostrarse el texto 'Fecha de matriculación'").to.equal("Fecha de matriculación");
            expect(divs[3].innerText, "Debe mostrarse el texto 'Marca'").to.equal("Marca");
            expect(divs[4].innerText, "Debe mostrarse el texto 'Color'").to.equal("Color");
            expect(divs[5].innerText, "Debe mostrarse el texto 'Fecha de matriculación'").to.equal("Fecha de matriculación");
        });
        cy.get("#coches > div.coche > dl > dd").should((divs) => {
            expect(divs, "Deben mostrarse tres etiquetas 'dd' dentro de 'div.coche dl'").to.have.length(6);
            expect(divs[0].innerText, "Debe mostrarse la marca del coche").to.equal("c3marca");
            expect(divs[1].innerText, "Debe mostrarse el color del coche").to.equal("c3color");
            expect(divs[2].innerText, "Debe mostrarse la fecha de matriculación en formato localizado").to.equal("24/11/2022");
            expect(divs[3].innerText, "Debe mostrarse la marca del coche").to.equal("c4marca");
            expect(divs[4].innerText, "Debe mostrarse el color del coche").to.equal("c4color");
            expect(divs[5].innerText, "Debe mostrarse la fecha de matriculación en formato localizado").to.equal("26/5/2022");
        });

    });

})
