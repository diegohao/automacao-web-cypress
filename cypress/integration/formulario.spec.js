/// <reference types="cypress" />

import loc from '../support/locators'

describe('Teste funcional do formulário', () => {
    it('Criar usuário', () => {
        cy.acessarCriarUsuarios()
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
        cy.acessarCriarUsuarios()    
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
        cy.acessarCriarUsuarios()    
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

    it.only('Visualizar usuário', () => {
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
        // TO DO: clicar no botão Voltar.
    })

    it('Editar usuário', () => {
        
    })

    it('Excluir usuário', () => {
        
    })
})