describe('renders the homepage', () => {
  it('renders correctly', () => {
    cy.visit('/');
    cy.get('#container').should('exist');
  });

  it('allows the date picker to be used', () => {
    cy.visit('/');
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.App-link').click();
    cy.get('.App-header').click();
    /* ==== End Cypress Studio ==== */
    cy.findAllByText('Learn React').should('exist');
  });
});
