describe('Teste técnico QA – Web - Blog do Agi', { retries: 2 }, () => {
  
  Cypress.on('uncaught:exception', () => false);

  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('https://blog.agibank.com.br/', { timeout: 30000 });
    cy.contains('a', 'O Agibank').should('be.visible').click();
  });

  it('Cenário 1: Deve realizar pesquisa com sucesso', () => {
    const termoBusca = 'Empréstimo';

    
    cy.get('a.full-screen.astra-search-icon').first().click({ force: true });

    
    cy.wait(500);

    
    cy.get('input.search-field').filter(':visible').first().as('campoBusca');
    
    cy.get('@campoBusca')
      .clear({ force: true })
      .type(`${termoBusca}{enter}`, { delay: 100, force: true });

    
    cy.url().should('include', 's=Empr%C3%A9stimo');
    cy.get('body').should('contain', 'Resultados encontrados para:');
  });

  it('Cenário 2: Deve exibir mensagem para busca sem resultados', () => {
    cy.viewport(1280, 720);
    
    cy.visit('https://blogdoagi.com.br/?s=Axz_semnada');

    
    cy.contains('Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.', { timeout: 10000 })
      .should('be.visible');
  });
});