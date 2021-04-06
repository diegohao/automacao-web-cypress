/// <reference types="cypress" />

import loc from '../support/locators'

describe('Teste funcional na busca de elementos', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.xpath('/html/body/div[2]/div[1]/ul/li[3]/a').click()
    })
  
  it('Validar alert', () => {
    cy.xpath('/html/body/div[2]/div[2]/div[2]/div/div[1]/ul/li[1]/button').click()
    cy.on('window:alert', msg => {
      expect(msg).to.be.equal('Eu sou um alerta JS!')
    })  
  })
}
