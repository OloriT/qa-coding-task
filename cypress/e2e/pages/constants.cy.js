
export class LoginAndSignup {

    username_textbox = '[data-qa="login-email"]'
    password_textbox = '[data-qa="login-password"]'
    login_button = '[data-qa="login-button"]'
    cancel_button = '.css-1fo6nnh > .chakra-button'
    base_url = 'https://www.automationexercise.com'
    userName = 'qat@mailinator.com'
    passWord = '123456'
    filter_button = '.css-1qh0g8k > .css-1errsis'
    apply_filter = '.css-15cahim'
    sign_in = '.shop-menu > .nav > :nth-child(4) > a'
    confirm_cart = '.modal-body > :nth-child(1)'
    continue_shopping = '.modal-footer > .btn'

    cardName = 'Test Card'
    cardNumber = '4100 0000 0000'
    cvvNo = '123'

    card_name = '[data-qa="name-on-card"]'
    card_number = '[data-qa="card-number"]'
    cvv_no = '[data-qa="cvc"]'

    enterCardName(cardName) {
        cy.get(this.card_name).type(cardName, {delay: 2})
    }

    enterCardNo(cardNumber) {
        cy.get(this.card_number).type(cardNumber, {delay: 2})
    }

    enterCvv(cvvNo) {
        cy.get(this.cvv_no).type(cvvNo, {delay: 2})
    }


    continueButton() {
        cy.get(this.continue_shopping).click({ force: true })
    }

    confirmCart() {
        cy.get(this.confirm_cart).should('contain', 'Your product has been added to cart.')
    }

    signLoginButton() {
        cy.get(this.sign_in).click()  //click on sign in/login button
    }


    enterUsername(userName) {
        cy.get(this.username_textbox).type(userName, {delay: 2}) //username textbox
    }

    enterPassword(passWord) {
        cy.get(this.password_textbox).type(passWord, {delay: 2}) //password textbox

    }

    loginButton() {
        cy.get(this.login_button).click()   //login click button

    }



    // closalButton() {
    //     cy.get(this.closal_modal).click()   //close button

    // }

    applyButton() {
        cy.get(this.apply_filter).click()   //apply filter button

    }

    clickFilterButton() {
        cy.get(this.filter_button).click()   //click filter button

    }

    searchButton() {
        cy.get(this.search_button).click()   //search button

    }

    cancelButton() {
        cy.get(this.cancel_button).click()   //cancel/clear button

    }


    baseUrl(baseurl) {
        cy.visit(this.base_url)  //Automation exercise website

    }

    signIn() {

        loginPage.enterUsername(loginPage.userName)
        loginPage.enterPassword(loginPage.passWord)
        loginPage.signLoginButton()
        loginPage.loginButton()

        // cy.get('.css-19qqp67 > .css-0 > .chakra-heading', { timeout: 10000 }).should('contain', 'Welcome, Favour Martins')
        // cy.wait(3000)

        // cy.get('#menu-button-8').click()
        // cy.get('#menu-list-8-menuitem-13').click() //click on logout button
        // cy.get('.css-26juux').click()  //click on Yes, log out

        // cy.get('.auth_wrapper-text > .chakra-text').should('contain', 'Provide credentials to login to your account')



    }



}