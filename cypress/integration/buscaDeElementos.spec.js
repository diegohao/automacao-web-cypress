/// <reference types="cypress" />

import loc from '../support/locators'

describe('Teste funcional na busca de elementos', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Busca de elementos').click()
        cy.get(loc.MENU.BUSCA_DE_ELEMENTOS.LINKS).click()
    })

    it('Link: Ok 200 - Success', () => {
        cy.get(loc.LINKS.SUCCESS).click()
        cy.get(loc.LINKS.MENSAGEM).should('contain', 'Success')        
    })

    it('Link: Erro 400 - Bad Request', () => {
        cy.get(loc.LINKS.BAD_REQUEST).click()
        cy.get(loc.LINKS.MENSAGEM).should('contain', 'Bad Request')
    })

    it('Link: Erro 404 - Page not found', () => {
        cy.get(loc.LINKS.PAGE_NOT_FOUND).click()
        cy.get(loc.LINKS.MENSAGEM).should('contain', 'Page Not Found')        
    })

    it('Link: Erro 500 - Internal Server Error', () => {
        cy.get(loc.LINKS.INTERNAL_SERVER_ERROR).click()
        cy.get(loc.LINKS.MENSAGEM).should('contain', 'Server Error')
    })
})
