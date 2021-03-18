/// <reference types="cypress" />

import loc from '../support/locators'

describe('Teste funcional do formulário', () => {
    it('Criar usuário', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/treinamento/home')
        cy.contains('Formulário').click()
        cy.get(loc.MENU.FORMULARIO.CRIAR_USUARIOS).click()

        cy.get(loc.CRIAR_USUARIOS.NOME).type('Diego')
        cy.get(loc.CRIAR_USUARIOS.ULTIMO_NOME).type('Henrique')
        cy.get(loc.CRIAR_USUARIOS.EMAIL).type('diego@teste.com.br')
        cy.get(loc.CRIAR_USUARIOS.ENDERECO).type('Rua Cypress')
        cy.get(loc.CRIAR_USUARIOS.UNIVERSIDADE).type('Uni')
        cy.get(loc.CRIAR_USUARIOS.PROFISSAO).type('Analista de Sistemas')
        cy.get(loc.CRIAR_USUARIOS.GENERO).type('Masculino')
        cy.get(loc.CRIAR_USUARIOS.IDADE).type('29')
        cy.get(loc.CRIAR_USUARIOS.BTN_CRIAR).click()

        cy.get('.row.center').should('contain', 'Usuário Criado com sucesso')
    })
})
