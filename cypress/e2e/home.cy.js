describe('Test Application', () => {

  beforeEach('',  () => {
    cy.visit('http://localhost:8080/')
    cy.wait(1500)
  })

  it('clicks register button', ()  => {

    cy.get('[data-test="register btn"]')
    .click()
    cy.wait(1500)

  })

  it('clicks signin button', ()  => {

    cy.get('[data-test="signin btn"]')
    .click()

  })

  /**
   * ! MAKE SURE TO SIGN OUT IF YOU PLAN TO SIGN IN DURING THE TESTS. IT CARRIES OVER
   * ! THE STATE OF THE WEBSITE PER TEST. CONSIDER BEFORE AND AFTER EACH METHODS.
   */
  it('successfully logs in user', ()  => {

    cy.get('[data-test="signin btn"]')
    .click()

    cy.get('[data-test="email input"]')
    .type('dmasterj2006@hotmail.com')

    cy.get('[data-test="password input"]')
    .type('Djreborn92')

    cy.get('[data-test="submit btn"]')
    .click()

    cy.wait(1500)

    cy.get('[data-test="signout btn"]')
    .click()

    
  })



})