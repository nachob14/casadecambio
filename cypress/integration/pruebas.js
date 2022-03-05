/// <reference types='Cypress' />

const URL = 'http://127.0.0.1:5500/index.html';
const cantidadMonedas = 162;

context('exchange', () =>{

    before(() =>{
        cy.visit(URL);
    });

    it('se asegura que todas las monedas esten cargadas', () => {
        cy.get('#inputSelectorMoneda').find('option').should('have.length', cantidadMonedas);
    })

    it('se asegura que se muestre el mensaje de alerta', () => {
        cy.get('#inputSelectorMoneda option:selected').then(() => {
            cy.get('#botonObtenerDatos').click();
            cy.get('#espacioAlertas').should("be.visible");
        })
    })

    it('se asegura que al seleccionar una base, se genere la tabla correspondiente', () => {
        const BASE = 'USD';
        cy.get('#inputSelectorMoneda').select(BASE).then(() => {
            cy.get('#botonObtenerDatos').click();
            cy.get('#espacioAlertas').should("not.be.visible");
            cy.get('#tablaCambios').should('not.have.class', 'invisible');
        })
    })
})