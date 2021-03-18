const locators = {
  MENU: {
    FORMULARIO: {
      CRIAR_USUARIOS: '.active > .collapsible-body > ul > :nth-child(1) > a',
      LISTA_DE_USUARIOS: '.active > .collapsible-body > ul > :nth-child(2) > a'
    }
  },
  CRIAR_USUARIOS: {
    NOME: '#user_name',
    ULTIMO_NOME: '#user_lastname',
    EMAIL: '#user_email',
    ENDERECO: '#user_address',
    UNIVERSIDADE: '#user_university',
    PROFISSAO: '#user_profile',
    GENERO: '#user_gender',
    IDADE: '#user_age',
    BTN_CRIAR: '.actions > input'
  }
}

export default locators;