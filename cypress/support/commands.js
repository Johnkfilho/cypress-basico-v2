Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('John',{delay:0})
    cy.get('#lastName').type('Kennedy',{delay:0})
    cy.get('#email').type('Johnkfilho@gmail.com',{delay:0})
    cy.get('#open-text-area').type('Olá pessoal :)',{delay:0})
    cy.contains('button', 'Enviar').click()
})