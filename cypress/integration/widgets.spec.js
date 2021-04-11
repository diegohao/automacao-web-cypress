/// <reference types="cypress" />

import loc from '../support/locators'

describe('Teste funcional de widgets', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get(':nth-child(4) > .collapsible-header').click()
    })

    it('Validar accordion', () => {
        cy.get(loc.MENU.WIDGETS.ACCORDION).click()
        cy.get(':nth-child(3) > :nth-child(1) > .collapsible > :nth-child(1) > .collapsible-header').should('be.visible')
        cy.get(':nth-child(3) > :nth-child(1) > .collapsible > :nth-child(2) > .collapsible-header').should('have.class', 'collapsible-header')
        cy.xpath('/html/body/div[2]/div[2]/div[3]/div/ul/li[3]/div[1]').click()
        //TODO continuar implementação
    })
})