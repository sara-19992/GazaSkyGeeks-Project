
class loginPage {

    elements = {
        userName: () => cy.getByPlaceholder('Username'),
        password: () => cy.getByPlaceholder('Password'),
        loginBut: () => cy.get('button'),
        forgetText: () => cy.get('.orangehrm-login-forgot-header'),
        resetForm: () => cy.get('.oxd-form'),
        resetUserName: () => cy.get('[placeholder="Username"]'),
        resetBut: () => cy.get('button[type="submit"]'),
        resetText: () => cy.get('.oxd-text--h6'),
        logout: () => cy.get('.oxd-userdropdown'),
        logoutMenue: () => cy.get('.oxd-dropdown-menu')
    }

    assertianElem = [
        {
            msg: "Dashboard",
            elem: () => cy.get('.oxd-topbar-header-breadcrumb')
        }, {
            msg: "Required",
            elem: () => cy.get('.oxd-input-field-error-message')
        }, {
            msg: "Invalid credentials",
            elem: () => cy.get('.oxd-text oxd-text--p oxd-alert-content-text')
        }
    ]

    userLogin(userName: string, password: string) {
        this.elements.userName().type(userName)
        this.elements.password().type(password)
        this.elements.loginBut().click().should('not.exist')
    }

    userLogout() {
        this.elements.logout().click()
        this.elements.logoutMenue().contains('Logout').click()
        // this.elements.password().type(password)
    }

    forget(user: any) {
        this.elements.forgetText().click()
        this.elements.resetForm().should('contain', 'Reset Password')
        this.elements.resetUserName().type(user.userName)
        this.elements.resetBut().click().should('not.exist')
        this.elements.resetText().should('contain', 'Reset Password link sent successfully')
    }

    verfiyElem(message: string) {
        this.assertianElem.find(({ msg }) => msg === message)?.elem;
    }

    // requiredElem(message: string, inputPlace:string) {
    //     this.assertianElem.find(({ msg }) => msg === message)?.elem().should('have.attr', 'placeholder', inputPlace);

    // }

}

export default loginPage