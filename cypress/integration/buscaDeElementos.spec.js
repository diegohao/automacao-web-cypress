/// <reference types="cypress" />

import loc from '../support/locators'

describe('Teste funcional na busca de elementos', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Busca de elementos').click()
    })

    it('Link: Ok 200 - Success', () => {
        cy.get(loc.MENU.BUSCA_DE_ELEMENTOS.LINKS).click()
        cy.get(loc.LINKS.SUCCESS).click()
        cy.get(loc.LINKS.MENSAGEM).should('contain', 'Success')        
    })

    it('Link: Erro 400 - Bad Request', () => {
        cy.get(loc.MENU.BUSCA_DE_ELEMENTOS.LINKS).click()
        cy.get(loc.LINKS.BAD_REQUEST).click()
        cy.get(loc.LINKS.MENSAGEM).should('contain', 'Bad Request')
    })

    it('Link: Erro 404 - Page not found', () => {
        cy.get(loc.MENU.BUSCA_DE_ELEMENTOS.LINKS).click()
        cy.get(loc.LINKS.PAGE_NOT_FOUND).click()
        cy.get(loc.LINKS.MENSAGEM).should('contain', 'Page Not Found')        
    })

    it('Link: Erro 500 - Internal Server Error', () => {
        cy.get(loc.MENU.BUSCA_DE_ELEMENTOS.LINKS).click()
        cy.get(loc.LINKS.INTERNAL_SERVER_ERROR).click()
        cy.get(loc.LINKS.MENSAGEM).should('contain', 'Server Error')
    })

    it('Validar botão Raised', () => {
        cy.get(loc.MENU.BUSCA_DE_ELEMENTOS.BOTOES).click()
        cy.get(loc.BOTOES.RAISED).click()
        cy.get('#div1 > h5').should('contain', 'Você Clicou no Botão')
        cy.reload()
    })

    it('Validar botão Floating', () => {
        cy.get(loc.MENU.BUSCA_DE_ELEMENTOS.BOTOES).click()
        cy.get(loc.BOTOES.FLOATING).click()
        cy.get('#div2 > h5').should('contain', 'Você Clicou no Botão')
        cy.reload()
    })

    it('Validar botão Flat', () => {
        cy.get(loc.MENU.BUSCA_DE_ELEMENTOS.BOTOES).click()
        cy.get(loc.BOTOES.FLAT).click()
        cy.get('#div3 > h5').should('contain', 'Você Clicou no Botão')
        cy.reload()
    })

    it('Validar botão Submit', () => {
        cy.get(loc.MENU.BUSCA_DE_ELEMENTOS.BOTOES).click()
        cy.get(loc.BOTOES.SUBMIT).click()
        cy.get('#div4 > h5').should('contain', 'Você Clicou no Botão')
        cy.reload()
    })

    it('Validar botão Disable', () => {
        cy.get(loc.MENU.BUSCA_DE_ELEMENTOS.BOTOES).click()
        cy.get(loc.BOTOES.DISABLE).click()
        cy.get('.s9 > :nth-child(7)').should('not.have.value')
    })
})
