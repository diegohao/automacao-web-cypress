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
  },
  VISUALIZAR_USUARIOS: {
    BTN_VISUALIZAR: ':nth-child(1) > :nth-child(9) > .material-icons',
    NOME: ':nth-child(1) > strong',
    ULTIMO_NOME: ':nth-child(2) > strong',
    EMAIL: ':nth-child(3) > strong',
    ENDERECO: ':nth-child(8) > strong',
    UNIVERSIDADE: ':nth-child(4) > strong',
    PROFISSAO: ':nth-child(6) > strong',
    GENERO: ':nth-child(5) > strong',
    IDADE: ':nth-child(7) > strong',
    BTN_VOLTAR: ':nth-child(7) > strong'
  }
}

export default locators;