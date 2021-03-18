/// <reference types="cypress" />

describe('Teste funcional do formulário', () => {
    it('Criar usuário', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/treinamento/home')
        cy.contains('Formulário').click()
        cy.get('.active > .collapsible-body > ul > :nth-child(1) > a').click()
        cy.get('#user_name').type('Diego')
        cy.get('#user_lastname').type('Henrique')
        cy.get('#user_email').type('diego@teste.com.br')
        cy.get('#user_address').type('Rua Cypress')
        cy.get('#user_university').type('Uni')
        cy.get('#user_profile').type('Analista de Sistemas')
        cy.get('#user_gender').type('Masculino')
        cy.get('#user_age').type('29')
        cy.get('.actions > input').click()
    })
})