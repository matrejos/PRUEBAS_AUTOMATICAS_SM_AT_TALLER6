context('Creacion de tarea', () => {

    it('Crea tarea diara', () => {
        cy.visit('https://habitica.com/login')

        cy.get('#usernameInput').type('icedream93').should('have.value', 'icedream93');
        cy.get('#passwordInput').type('metropolis1');

        cy.get('.btn-info[type="submit"]').click()
        cy.wait(2000)        

        cy.screenshot()
        cy.get('[placeholder="Añadir una Tarea diaria"]').type('Tarea diara de prueba{enter}');
        cy.screenshot()
      })
});
