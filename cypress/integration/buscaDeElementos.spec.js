/// <reference types="cypress" />

import loc from '../support/locators'

describe('Teste funcional na busca de elementos', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.xpath('/html/body/div[2]/div[1]/ul/li[2]/a').click()
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
  
    it('Validar checkBox purple', () => {
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
  
    it('Validar checkBox black', () => {
        cy.acessarRadioECheckbox()
        cy.xpath(loc.RADIO_E_CHECKBOX.XP_BLACK).should('not.be.checked').then((checkBlack) => {
            if(checkBlack) {
                checkBlack.click()
            }
        })
    })
  
    it('Validar checkBox white', () => {
        cy.acessarRadioECheckbox()
        cy.xpath(loc.RADIO_E_CHECKBOX.XP_WHITE).should('not.be.checked').then((checkWhite) => {
            if(checkWhite) {
                checkWhite.click()
            }
        })
    })

    it('Validar dropdown Inbox', () => {
        cy.acessarDropdownESelect()
        cy.get(loc.DROPDOWN.MAIL_BOX).click()
        cy.get(loc.DROPDOWN.INBOX).as('inbox')
        if(cy.get('@inbox').click()) {
            cy.get(loc.DROPDOWN.MSG_INBOX).should('exist')
        }
    })

    it('Validar dropdown Unread', () => {
        cy.acessarDropdownESelect()
        cy.get(loc.DROPDOWN.MAIL_BOX).click()
        cy.get(loc.DROPDOWN.UNREAD).as('unread')
        if(cy.get('@unread').click()) {
            cy.get(loc.DROPDOWN.MSG_UNREAD).should('exist')
        }
    })

    it('Validar dropdown Sent', () => {
        cy.acessarDropdownESelect()
        cy.get(loc.DROPDOWN.MAIL_BOX).click()
        cy.get(loc.DROPDOWN.SENT).as('sent')
        if(cy.get('@sent').click()) {
            cy.get(loc.DROPDOWN.MSG_SENT).should('exist')
        }
    })

    it('Validar dropdown Outbox', () => {
        cy.acessarDropdownESelect()
        cy.get(loc.DROPDOWN.MAIL_BOX).click()
        cy.get(loc.DROPDOWN.OUTBOX).as('outbox')
        if(cy.get('@outbox').click()) {
            cy.get(loc.DROPDOWN.MSG_OUTBOX).should('exist')
        }
    })

    it('Validar select desenho favorito', () => {
        cy.acessarDropdownESelect()
        cy.get(':nth-child(1) > .select-wrapper > input.select-dropdown').click()        
        //TODO continuar implementação
    })

    it('Validar select de seleções de futebol', () => {
        //TODO implementar
    })

    it('Validar select de gênero', () => {
        //TODO implementar
    })

    it('Validar select de browser favorito', () => {
        //TODO implementar
    })

    it.only('Validar tabela', () => {
        cy.get(loc.MENU.BUSCA_DE_ELEMENTOS.TABELA).click()
        cy.xpath(loc.TABELA.LINHA).should('contain', 'Leite')
    })

})
