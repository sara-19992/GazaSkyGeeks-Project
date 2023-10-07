import { genericUsername, genericPassword, genericEmail } from "./generate"
const baseURL = Cypress.config().baseUrl

export const URLs = {
    users: `${baseURL}/api/users`
}

export default class user {

    static conduitCreateNewUser(payload: any) {
        cy.api({
            method: 'POST',
            url: URLs.users,
            body: payload
        })
    }

}