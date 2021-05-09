import ROUTES from '../../src/routes';

describe('Performs basic navigation', () => {
  it('Renders app and redirects to login page because the user is not logged in', () => {
    cy.visit(ROUTES.HOME);
    cy.get('[data-testid=app]');
    cy.location('pathname').should('eq', ROUTES.LOGIN);
    cy.get('[data-testid=login-page]');
  });
  it('Successfully logs in', () => {
    cy.get('[data-testid=login-email]').type(Cypress.env('adminEmail'));
    cy.get('[data-testid=login-password]').type(Cypress.env('adminPassword'));
    cy.get('[data-testid=login-submit]').click();
    cy.get('[data-testid=app-body');
  });
  it('Navigates to Movies', () => {
    cy.get('[data-testid=app-body-movies-link').click();
    cy.location('pathname').should('eq', ROUTES.MOVIES.MAIN);
  });
  it('Navigates back to Home by clicking the app logo at header', () => {
    cy.get('[data-testid=app-header-logo').click();
    cy.location('pathname').should('eq', ROUTES.HOME);
  });
  it('Navigates to People', () => {
    cy.get('[data-testid=app-body-people-link').click();
    cy.location('pathname').should('eq', ROUTES.PEOPLE.MAIN);
  });
  it('Navigates back to Home by clicking the app logo at header', () => {
    cy.get('[data-testid=app-header-logo').click();
    cy.location('pathname').should('eq', ROUTES.HOME);
  });
  it('Navigates to Countries', () => {
    cy.get('[data-testid=app-body-countries-link').click();
    cy.location('pathname').should('eq', ROUTES.COUNTRIES.MAIN);
  });
  it('Navigates back to Home by clicking the app logo at header', () => {
    cy.get('[data-testid=app-header-logo').click();
    cy.location('pathname').should('eq', ROUTES.HOME);
  });
});
