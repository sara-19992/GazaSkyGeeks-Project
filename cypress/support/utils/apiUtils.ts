import userPayloadInt from "../api/payloaad/userAPIPayload"
import userRseponseInt from "../api/response/userAPIResponse"

declare global {
    namespace Cypress {
        interface Chainable {
            signupUser: (url: string, userPayload: userPayloadInt) => Chainable<userRseponseInt>
        }
    }
}

function signupUser(url: string, userPayload: userPayloadInt) {
    return cy.api({
        method: 'POST',
        url: url,
        body: userPayload
    }).its('body')
}

Cypress.Commands.add('signupUser', signupUser)