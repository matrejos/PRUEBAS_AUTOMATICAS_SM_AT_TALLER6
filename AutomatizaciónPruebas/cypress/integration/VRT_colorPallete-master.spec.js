context('Creacion de Habito', () => {

    it('makes a wrong login attemp', () => {
        cy.visit('https://matrejos.github.io/PRUEBAS_AUTOMATICAS_SM_AT_TALLER6/VRT_colorPallete-master/palette.html')

        var fecha = Cypress.moment().format('YYYYMMDDHHmm')

        cy.get('div').find('button').contains(' Generar nueva paleta').click()
        cy.screenshot('./VRT_colorPallete-master_ ' + fecha + '_1')

        cy.get('div').find('button').contains(' Generar nueva paleta').click()
        cy.screenshot('./VRT_colorPallete-master_ ' + fecha + '_2')      
      })
});
