class employee {

    elements = {
        MainMenuItems: () => cy.get('.oxd-sidepanel-body'),
        addBut: () => cy.get('.oxd-button--secondary'),
        nameFields: () => cy.get('.--name-grouped-field'),
        saveNewEmp: () => cy.get('button[type="submit"]'),
        creatLogin: () => cy.get('.oxd-switch-input'),
        userName: () => cy.get('.oxd-input-group input'),
        passwordFields: () => cy.get('.user-password-row input'),
        saveBut: () => cy.get('.oxd-button--secondary'),
        headerName: () => cy.get('.orangehrm-edit-employee-name'),
        deleteIcon: () => cy.get('.bi-trash'),
        deleteBut: () => cy.get('.oxd-button--label-danger'),
        numRecords: () => cy.get('.oxd-text--span'),
        empLoader: () => cy.get('.oxd-loading-spinner'),
        empRow: () => cy.get('.oxd-table-card')
    }


    addNewEmployee(firstName: string, MiddleName: string, LastName: string, userName: string, password: string) {
        //add new employee using UI 
        this.elements.MainMenuItems().contains('PIM').click();
        this.elements.addBut().eq(1).click()
        this.elements.nameFields().children().eq(0).type(firstName)
        this.elements.nameFields().children().eq(1).type(MiddleName)
        this.elements.nameFields().children().eq(2).type(LastName)
        this.elements.creatLogin().click().should('not.exist')
        this.elements.userName().eq(5).type(userName)

        this.elements.passwordFields().eq(0).type(password)
        this.elements.passwordFields().eq(1).type(password)
        this.elements.saveNewEmp().click();

        this.elements.headerName().contains(firstName + ' ' + LastName);
    }

    verfiyEmpName(firstName: string, lastName: string) {
        this.elements.headerName().should('have.value', firstName + '' + lastName)
    }

    deleteEmployee() {
        this.elements.deleteIcon().click({ force: true })
        this.elements.deleteBut().click()
        this.elements.empLoader().should('not.exist')
        this.elements.empRow().should('have.length', 0)
    }
}
export default employee;