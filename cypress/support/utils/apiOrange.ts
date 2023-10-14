import candidatePayloadInt from "../api/payloaad/candidateAPIPayload"
import candidateResponseInt from "../api/response/candidateAPIResponse"

declare global {
    namespace Cypress {
        interface Chainable {
            addCandidate: (url: string, candidatePayload: candidatePayloadInt) => Chainable<candidateResponseInt>
            shortlitCandidate: (url: string) => Chainable

        }
    }
}

function addCandidate(url: string, candidatePayload: candidatePayloadInt) {
    return cy.api({
        method: 'POST',
        url: url,
        body: candidatePayload
    }).its('body')
}

function shortlitCandidate(url: string) {
    return cy.api({
        method: 'PUT',
        url: url,
    }).its('body')
}

Cypress.Commands.add('addCandidate', addCandidate)

Cypress.Commands.add('shortlitCandidate', shortlitCandidate)