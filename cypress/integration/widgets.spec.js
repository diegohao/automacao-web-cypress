/// <reference types="cypress" />

import loc from '../support/locators'

describe('Teste funcional de widgets', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get(':nth-child(4) > .collapsible-header').click()
    })

    it('Validar accordion', () => {
        cy.get(loc.MENU.WIDGETS.ACCORDION).click()
        cy.get(loc.ACCORDION.FIRST).should('be.visible')
        cy.get(loc.ACCORDION.SECOND).should('have.class', 'collapsible-header')
        cy.xpath(loc.ACCORDION.THIRD).click()
        cy.get(loc.ACCORDION.THIRD_TEXT).should('exist')
    })

    it('Validar autocomplete', ()=> {
        cy.get(loc.MENU.WIDGETS.AUTOCOMPLETE).click()
        cy.get(loc.AUTOCOMPLETE).type('Minas')
        cy.contains('Minas Gerais').should('exist').click()
    })

    it.only('Validar datepicker', () => {
        cy.get(loc.MENU.WIDGETS.DATEPICKER).click()
        cy.get('#datepicker').click()
        //TODO implementar datepicker
    })
})