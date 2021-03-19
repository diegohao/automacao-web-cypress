// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loc from "./locators"

Cypress.Commands.add('acessarCriarUsuarios', () => {
    cy.visit('https://automacaocombatista.herokuapp.com/treinamento/home')
    cy.contains('Formulário').click()
    cy.get(loc.MENU.FORMULARIO.CRIAR_USUARIOS).click()
})

Cypress.Commands.add('acessarListaDeUsuários', () => {
    cy.visit('https://automacaocombatista.herokuapp.com/treinamento/home')
    cy.contains('Formulário').click()
    cy.get(loc.MENU.FORMULARIO.LISTA_DE_USUARIOS).click()
    cy.get('.tamanhodiv2 > .center').should('contain', 'Lista de Usuários')
})