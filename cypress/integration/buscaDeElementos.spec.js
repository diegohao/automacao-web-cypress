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
        cy.get(loc.BOTOES.MSG_RAISED).should('contain', 'Você Clicou no Botão')
        cy.reload()
    })

    it('Validar botão Floating', () => {
        cy.get(loc.MENU.BUSCA_DE_ELEMENTOS.BOTOES).click()
        cy.get(loc.BOTOES.FLOATING).click()
        cy.get(loc.BOTOES.MSG_FLOATING).should('contain', 'Você Clicou no Botão')
        cy.reload()
    })

    it('Validar botão Flat', () => {
        cy.get(loc.MENU.BUSCA_DE_ELEMENTOS.BOTOES).click()
        cy.get(loc.BOTOES.FLAT).click()
        cy.get(loc.BOTOES.MSG_FLAT).should('contain', 'Você Clicou no Botão')
        cy.reload()
    })

    it('Validar botão Submit', () => {
        cy.get(loc.MENU.BUSCA_DE_ELEMENTOS.BOTOES).click()
        cy.get(loc.BOTOES.SUBMIT).click()
        cy.get(loc.BOTOES.MSG_SUBMIT).should('contain', 'Você Clicou no Botão')
        cy.reload()
    })

    it('Validar botão Disable', () => {
        cy.get(loc.MENU.BUSCA_DE_ELEMENTOS.BOTOES).click()
        cy.get(loc.BOTOES.DISABLE).click()
        cy.get(loc.BOTOES.MSG_DISABLE).should('not.have.value')
    })
    
    it('Validar radioButton red', () => {
        cy.acessarRadioECheckbox()
        cy.xpath(loc.RADIO_E_CHECKBOX.XP_RED).should('not.be.selected').then((radioRed) => {
            if(radioRed) {
                radioRed.click()
            }
        })
    })
  
    it('Validar radioButton blue', () => {
        cy.acessarRadioECheckbox()
        cy.xpath(loc.RADIO_E_CHECKBOX.XP_BLUE).should('not.be.selected').then((radioBlue) => {
            if(radioBlue) {
                radioBlue.click()
            }
        })
    })
  
    it('Validar radioButton yellow', () => {
        cy.acessarRadioECheckbox()
        cy.xpath(loc.RADIO_E_CHECKBOX.XP_YELLOW).should('not.be.selected').then((radioYellow) => {
            if(radioYellow) {
                radioYellow.click()
            }
        })
    })
  
    it('Validar radioButton green', () => {
        cy.acessarRadioECheckbox()
        cy.xpath(loc.RADIO_E_CHECKBOX.XP_GREEN).should('not.be.selected').then((radioGreen) => {
            if(radioGreen) {
                radioGreen.click()
            }
        })
    })
  
    it.only('Validar checkBox purple', () => {
        cy.acessarRadioECheckbox()
        cy.xpath(loc.RADIO_E_CHECKBOX.XP_PURPLE).should('not.be.checked').then((checkPurple) => {
            if(checkPurple) {
                checkPurple.click()
            }
        })
    })
  
    it('Validar checkBox grey', () => {
        cy.acessarRadioECheckbox()
        cy.xpath(loc.RADIO_E_CHECKBOX.XP_GREY).should('not.be.checked').then((checkGrey) => {
            if(checkGrey) {
                checkGrey.click()
            }
        })
    })
  
    it('Validar checkBox purple e grey', () => {
    })
  
    it('Validar checkBox black', () => {
    })
  
    it('Validar checkBox white', () => {
    })
  
    it('Validar checkBox black e white', () => {
    })
})
