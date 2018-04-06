var config = require('./config.json')
let message = "sample tweet!"

describe('Test tweet', function() {
  it('login to twitter.com', function() {
    cy.visit('https://twitter.com/login')

    cy.get('.signin .email-input').type(config.username)
    cy.get('.signin .js-password-field').type(config.password)
    cy.get('.signin .submit').click()
  })

  it('tweets', function() {
    cy.get('#tweet-box-home-timeline').click()
    cy.get('.tweet-box .EmojiPicker-trigger').click()
    cy.get('.EmojiPicker-dropdownMenu .EmojiPicker-mainColumn .EmojiPicker-categoryItems button').first().click()
    cy.get('.tweet-box .tweet-action').click()
  })
})
