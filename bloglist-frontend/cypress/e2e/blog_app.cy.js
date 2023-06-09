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
    cy.get('button[type="submit"]').contains('login')
  })

  describe('Login', function () {
    it('succeeds with correct credentials', function () {
      cy.contains('login').click()
      cy.get('input[placeholder*="username"]').type('Testi')
      cy.get('input[placeholder*="password"]').type('Testaaja')
      cy.get('button[type="submit"]').contains('login').click()
      cy.wait(1000)
      cy.contains('Logging in')
      cy.wait(10000)
      cy.get('#logout').contains('logout')
    })

    it('fails with wrong credentials', function () {
      cy.contains('login').click()
      cy.get('input[placeholder*="username"]').type('Testi')
      cy.get('input[placeholder*="password"]').type('wrong')
      cy.get('button[type="submit"]').contains('login').click()
      cy.wait(5000)
      cy.get('#login').contains('login')
    })
  })

  describe('When logged in', function () {
    beforeEach(function () {
      cy.contains('login').click()
      cy.get('input[placeholder*="username"]').type('Testi')
      cy.get('input[placeholder*="password"]').type('Testaaja')
      cy.get('button[type="submit"]').contains('login').click()

      cy.wait(10000)
      cy.get('.accordionButton').eq(0).click()
      cy.get('input[placeholder*="Title"]').type('Cypress Blog')
      cy.get('input[placeholder*="Author"]').type('Cypress Author')
      cy.get('input[placeholder*="https://jenniina.fi"]').type(
        'cypress.address',
      )
      cy.get('button').contains('save').click()
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
      cy.get('button').contains('logout').click()
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
      cy.get('button').contains('save').click()

      cy.wait(2000)
      cy.get('.blog-list li').as('blogli')

      cy.get('@blogli').eq(0).as('blog1')
      cy.get('@blogli').eq(1).as('blog2')
      cy.get('@blogli').eq(2).as('blog3')

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
