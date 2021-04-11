/// <reference types="cypress" />

import loc from '../support/locators'

describe('Teste funcional de mudança de foco', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.xpath('/html/body/div[2]/div[1]/ul/li[3]/a').click()
  })

  it('Validar alert', () => {
    cy.get(loc.MENU.MUDANCA_DE_FOCO.ALERT).click()
    cy.get(loc.ALERT.ALERT_JS).click()
    cy.on('window:alert', msg => {
      expect(msg).to.be.equal('Eu sou um alerta JS!')
    })
  })
  
  it('Validar confirm', () => {
    cy.get(loc.MENU.MUDANCA_DE_FOCO.ALERT).click()
    cy.get(loc.ALERT.CONFIRM_JS).click()
    cy.on('window:Confirm', msg => {
      expect(msg).to.be.equal('Eu sou uma confirmação JS!')
    })
  })

  it.only('Validar iFrame', () => {
    cy.get(loc.MENU.MUDANCA_DE_FOCO.IFRAME).click()
    cy.get('#id_do_iframe').then(iframe => {
      const body = iframe.contents().find('body')
      cy.wrap(body).find('#first_name')
      .type('Diego')
      .should('have.value', 'Diego')
    })
  })

})