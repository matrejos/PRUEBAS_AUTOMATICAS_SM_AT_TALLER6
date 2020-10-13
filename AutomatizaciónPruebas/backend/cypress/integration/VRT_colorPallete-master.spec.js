context('Generacion paleta de colores', () => {

    it('Generar paletas', () => {
        cy.visit('https://matrejos.github.io/PRUEBAS_AUTOMATICAS_SM_AT_TALLER6/VRT_colorPallete-master/palette.html')

        var id = Cypress.env('id')
        cy.get('div').find('button').contains(' Generar nueva paleta').click()
        cy.screenshot(id + '_VRT_colorPallete-master_1')

        cy.get('div').find('button').contains(' Generar nueva paleta').click()
        cy.screenshot(id + '_VRT_colorPallete-master_2')      
      })
});
