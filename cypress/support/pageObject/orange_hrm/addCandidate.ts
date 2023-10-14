import { initCandidate } from "../../init/initCandidate"
export default class candidatePage {

    elemnts = {
        buttons: () => cy.get('.oxd-button'),
        inputElms: () => cy.get('input'),
        saveBut: () => cy.get('button[type="submit"]'),
        status: () => cy.get('.orangehrm-recruitment-status')
    }

    addCandidateAPI(contactNumber: string, email: string, firstName: string, lastName: string, middleName: string, vacancyId: number) {
        return new Cypress.Promise((resolve, reject) => {
            cy.addCandidate('https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates', initCandidate(contactNumber, email, firstName, lastName, middleName, vacancyId)).then((response) => {
                resolve(response.data.id)
            })
        })
    }

    shortlitCandidateAPI(id: number) {
        cy.shortlitCandidate(`https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates/${id}/shortlist`)
    }

    visitCandidate(id: number) {
        cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/${id}`)
    }

    scheduleInterviewCandiate(id: number, title: string, interviewer: string, date: string, time: string) {
        this.visitCandidate(id)
        this.elemnts.buttons().eq(1).click({ force: true })
        this.elemnts.inputElms().eq(5).type(title)
        this.elemnts.inputElms().eq(6).type('a').get('.oxd-autocomplete-option').contains('div', interviewer).click()
        this.elemnts.inputElms().eq(7).type(date)
        this.elemnts.inputElms().eq(8).clear().type(time)

        this.elemnts.saveBut().click({ force: true })

        this.elemnts.status().should('contain', ' Interview Scheduled')
    }


} 