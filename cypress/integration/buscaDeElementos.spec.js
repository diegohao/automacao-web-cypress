/// <reference types="cypress" />

import loc from '../support/locators'

describe('Teste funcional na busca de elementos', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Busca de elementos').click()
        cy.get(loc.MENU.BUSCA_DE_ELEMENTOS.LINKS).click()
    })

    it('Link: Ok 200 - Sucess', () => {
        cy.get(':nth-child(3) > :nth-child(1) > a').click()
        cy.get('.red-text').should('contain', 'Success')        
    })

    it('Link: Erro 400 - Bad Request', () => {
        cy.get(':nth-child(4) > :nth-child(1) > a').click()
        cy.get('.red-text').should('contain', 'Bad Request')
    })

    it('Link: Erro 404 - Page not found', () => {
        cy.get(':nth-child(3) > :nth-child(2) > a').click()
        cy.get('.red-text').should('contain', 'Page Not Found')        
    })

    it('Link: Erro 500 - Internal Server Error', () => {
        cy.get(':nth-child(4) > :nth-child(2) > a').click()
        cy.get('.red-text').should('contain', 'Server Error')
    })
})