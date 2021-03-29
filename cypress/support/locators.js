const locators = {
  MENU: {
    FORMULARIO: {
      CRIAR_USUARIOS: '.active > .collapsible-body > ul > :nth-child(1) > a',
      LISTA_DE_USUARIOS: '.active > .collapsible-body > ul > :nth-child(2) > a'
    },
    BUSCA_DE_ELEMENTOS: {
      LINKS: '.active > .collapsible-body > ul > :nth-child(1) > a',
      INPUTS_E_TEXTFIELD: '.active > .collapsible-body > ul > :nth-child(2) > a',
      BOTOES: '.active > .collapsible-body > ul > :nth-child(3) > a',
      RADIO_E_CHECKBOX: '.active > .collapsible-body > ul > :nth-child(4) > a',
      DROPDOWN_E_SELECT: '.collapsible-body > ul > :nth-child(5) > a',
      TEXTOS: '.collapsible-body > ul > :nth-child(6) > a',
      TABELA: ':nth-child(7) > a'
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
    BTN_VOLTAR: '.red'
  },
  EDITAR_USUARIOS: {
    BTN_EDITAR: ':nth-child(1) > :nth-child(10) > .material-icons',
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
  EXCLUIR_USUARIOS: {
    BTN_EXCLUIR: ':nth-child(1) > :nth-child(11) > .material-icons'
  },
  LINKS: {
    SUCCESS: ':nth-child(3) > :nth-child(1) > a',
    BAD_REQUEST: ':nth-child(4) > :nth-child(1) > a',
    PAGE_NOT_FOUND: ':nth-child(3) > :nth-child(2) > a',
    INTERNAL_SERVER_ERROR: ':nth-child(4) > :nth-child(2) > a',
    MENSAGEM: '.red-text'
  },
  BOTOES: {
    RAISED: '#teste',
    FLOATING: '.btn-floating',
    FLAT: '.row > .waves-teal',
    SUBMIT: ':nth-child(6) > :nth-child(1) > .row > .btn',
    DISABLE: ':nth-child(7) > .s6 > .row',
    MSG_RAISED: '#div1 > h5',
    MSG_FLOATING: '#div2 > h5',
    MSG_FLAT: '#div3 > h5',
    MSG_SUBMIT: '#div4 > h5',
    MSG_DISABLE: '.s9 > :nth-child(7)'
  },
  RADIO_E_CHECKBOX: {
    XP_RED: '//*[@id="red"]',
    XP_BLUE: '//*[@id="blue"]',
    XP_YELLOW: '//*[@id="yellow"]',
    XP_GREEN: '//*[@id="green"]',
    XP_PURPLE: '//*[@id="purple"]',
    XP_GREY: '//*[@id="grey"]',
    XP_BLACK: '//*[@id="black"]',
    XP_WHITE: '//*[@id="white"]'
  }
}

export default locators;
