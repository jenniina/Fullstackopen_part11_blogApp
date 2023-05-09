/* eslint-disable cypress/no-unnecessary-waiting */
describe('When logged in', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = {
      name: 'Testi Testaaja',
      username: 'Testi',
      password: 'Testaaja',
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user)
    const user2 = {
      name: 'Toinen Testaaja',
      username: 'Toinen',
      password: 'Testaaja',
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user2)
    cy.visit('http://localhost:5173/')
  })

  it('Login form is shown', function () {
    cy.contains('login').click()
    cy.get('input[placeholder*="username"]')
    cy.get('input[placeholder*="password"]')
    cy.get('button[type="submit"]')
  })

  describe('Login', function () {
    it('succeeds with correct credentials', function () {
      cy.contains('login').click()
      cy.get('input[placeholder*="username"]').type('Testi')
      cy.get('input[placeholder*="password"]').type('Testaaja')
      cy.get('button[type="submit"]').click()
      cy.wait(3000)
      cy.contains('Testi Testaaja is logged in')
    })

    it('fails with wrong credentials', function () {
      cy.contains('login').click()
      cy.get('input[placeholder*="username"]').type('Testi')
      cy.get('input[placeholder*="password"]').type('wrong')
      cy.get('button[type="submit"]').click()
      cy.wait(3000)
      cy.get('.error').should('contain', 'Error: invalid username or password')
    })
  })

  describe('When logged in', function () {
    beforeEach(function () {
      cy.contains('login').click()
      cy.get('input[placeholder*="username"]').type('Testi')
      cy.get('input[placeholder*="password"]').type('Testaaja')
      cy.get('button[type="submit"]').click()

      cy.contains('Add a blog').click()
      cy.get('input[placeholder*="Title"]').type('Cypress Blog')
      cy.get('input[placeholder*="Author"]').type('Cypress Author')
      cy.get('input[placeholder*="https://jenniina.fi"]').type(
        'cypress.address',
      )
      cy.contains('save').click()
    })

    it('new blog was added', function () {
      cy.contains('Cypress Blog')
      cy.contains('Cypress Author')
    })

    it('a blog can be liked', function () {
      cy.contains('Likes: 0')
      cy.contains('view').click()
      cy.get('button').contains('like').click()
      cy.contains('Likes: 1')
    })

    it('Blog can be deleted', function () {
      cy.contains('view').click()
      cy.get('button').contains('Delete').click()
      cy.get('Cypress Blog').should('not.exist')
    })
    it('Other user cannot see the delete button', function () {
      cy.get('button').contains('Logout').click()
      cy.contains('login').click()
      cy.get('input[placeholder*="username"]').type('Toinen')
      cy.get('input[placeholder*="password"]').type('Testaaja')
      cy.get('button[type="submit"]').click()

      cy.contains('view').click()
      cy.get('button').contains('Delete').should('not.exist')
    })

    it('Likes are reordered', function () {
      cy.contains('Add a blog').click()
      cy.get('input[placeholder*="Title"]').type('The Second')
      cy.get('input[placeholder*="Author"]').type('Cypress Author')
      cy.get('input[placeholder*="https://jenniina.fi"]').type(
        'cypress.add.ress',
      )
      cy.contains('save').click()

      cy.contains('Add a blog').click()
      cy.get('input[placeholder*="Title"]').type('The Third')
      cy.get('input[placeholder*="Author"]').type('Cypress Author')
      cy.get('input[placeholder*="https://jenniina.fi"]').type(
        'cypress.add.ress',
      )
      cy.contains('save').click()

      cy.get('.blog-list li')
        .eq(0)
        .should('have.class', 'blog-wrap')
        .as('blog1')
      cy.get('.blog-list li')
        .eq(1)
        .should('have.class', 'blog-wrap')
        .as('blog2')
      cy.get('.blog-list li')
        .eq(2)
        .should('have.class', 'blog-wrap')
        .as('blog3')

      cy.get('@blog1').contains('view').click()
      cy.wait(1000)
      cy.get('@blog1').find('button').contains('like').click()
      cy.wait(1000)
      cy.get('@blog2').contains('view').click()
      cy.wait(1000)
      cy.get('@blog2').find('button').contains('like').click()
      cy.wait(1000)
      cy.get('@blog2').find('button').contains('like').click()
      cy.wait(1000)
      cy.get('@blog3').contains('view').click()
      cy.wait(1000)
      cy.get('@blog3').find('button').contains('like').click()
      cy.wait(1000)
      cy.get('@blog3').find('button').contains('like').click()
      cy.wait(1000)
      cy.get('@blog3').find('button').contains('like').click()
      cy.wait(1000)

      cy.get('.blog-wrap').eq(0).should('contain', 'Likes: 3')
      cy.get('.blog-wrap').eq(1).should('contain', 'Likes: 2')
    })
  })
})
