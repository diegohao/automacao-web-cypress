/// <reference types="cypress" />

import loc from '../support/locators'

describe('Teste funcional do formulário', () => {
    beforeEach(() => {        
        cy.visit('/')
        cy.contains('Formulário').click()
    })

    it('Criar usuário', () => {
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

    it('Validar campo obrigatório', () => {
        cy.get(loc.MENU.FORMULARIO.CRIAR_USUARIOS).click()
        //cy.get(loc.CRIAR_USUARIOS.NOME).type('Diego')
        cy.get(loc.CRIAR_USUARIOS.ULTIMO_NOME).type('Henrique')
        cy.get(loc.CRIAR_USUARIOS.EMAIL).type('diego@teste.com.br')
        cy.get(loc.CRIAR_USUARIOS.ENDERECO).type('Rua Cypress')
        cy.get(loc.CRIAR_USUARIOS.UNIVERSIDADE).type('Uni')
        cy.get(loc.CRIAR_USUARIOS.PROFISSAO).type('Analista de Sistemas')
        cy.get(loc.CRIAR_USUARIOS.GENERO).type('Masculino')
        cy.get(loc.CRIAR_USUARIOS.IDADE).type('29')
        cy.get(loc.CRIAR_USUARIOS.BTN_CRIAR).click()
    
        cy.get('#error_explanation > ul > li').should('contain', 'blank')
    })

    it('Validar email', () => {
        cy.get(loc.MENU.FORMULARIO.CRIAR_USUARIOS).click()
        cy.get(loc.CRIAR_USUARIOS.NOME).type('Diego')
        cy.get(loc.CRIAR_USUARIOS.ULTIMO_NOME).type('Henrique')
        cy.get(loc.CRIAR_USUARIOS.EMAIL).type('diego')
        cy.get(loc.CRIAR_USUARIOS.ENDERECO).type('Rua Cypress')
        cy.get(loc.CRIAR_USUARIOS.UNIVERSIDADE).type('Uni')
        cy.get(loc.CRIAR_USUARIOS.PROFISSAO).type('Analista de Sistemas')
        cy.get(loc.CRIAR_USUARIOS.GENERO).type('Masculino')
        cy.get(loc.CRIAR_USUARIOS.IDADE).type('29')
        cy.get(loc.CRIAR_USUARIOS.BTN_CRIAR).click()
    
        cy.get('#error_explanation > ul > li').should('contain', 'email.invalid')    
    })

    it('Visualizar usuário', () => {
        cy.acessarListaDeUsuários()
        cy.get(loc.VISUALIZAR_USUARIOS.BTN_VISUALIZAR).click()
        cy.get(loc.VISUALIZAR_USUARIOS.NOME).should('exist')
        cy.get(loc.VISUALIZAR_USUARIOS.ULTIMO_NOME).should('exist')
        cy.get(loc.VISUALIZAR_USUARIOS.EMAIL).should('exist')
        cy.get(loc.VISUALIZAR_USUARIOS.ENDERECO).should('exist')
        cy.get(loc.VISUALIZAR_USUARIOS.UNIVERSIDADE).should('exist')
        cy.get(loc.VISUALIZAR_USUARIOS.PROFISSAO).should('exist')
        cy.get(loc.VISUALIZAR_USUARIOS.GENERO).should('exist')
        cy.get(loc.VISUALIZAR_USUARIOS.IDADE).should('exist')
        cy.get(loc.VISUALIZAR_USUARIOS.BTN_VOLTAR).click()
    })

    it('Editar usuário', () => {
        cy.acessarListaDeUsuários()
        cy.get(loc.EDITAR_USUARIOS.BTN_EDITAR).click()
        cy.get('.tamanhodiv2 > .center').should('contain', 'Editar Usuário!!')
        cy.get(loc.EDITAR_USUARIOS.NOME).clear().type('Diego')
        cy.get(loc.EDITAR_USUARIOS.ULTIMO_NOME).clear().type('Henrique')
        cy.get(loc.EDITAR_USUARIOS.EMAIL).clear().type('diego@teste.com.br')
        cy.get(loc.EDITAR_USUARIOS.ENDERECO).clear().type('Rua Cypress')
        cy.get(loc.EDITAR_USUARIOS.UNIVERSIDADE).clear().type('Uni')
        cy.get(loc.EDITAR_USUARIOS.PROFISSAO).clear().type('Analista de Sistemas')
        cy.get(loc.EDITAR_USUARIOS.GENERO).clear().type('Masculino')
        cy.get(loc.EDITAR_USUARIOS.IDADE).clear().type('29')
        cy.get(loc.EDITAR_USUARIOS.BTN_CRIAR).click()

        cy.get('.row.center').should('contain', 'Seu Usuário foi Atualizado!')
    })

    it.only('Excluir usuário', () => {
        cy.acessarListaDeUsuários()
        cy.get(loc.EXCLUIR_USUARIOS.BTN_EXCLUIR).click()
        // TO DO: validar alert.        
    })
})