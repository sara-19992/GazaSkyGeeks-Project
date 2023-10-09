import { initUser } from "../init/initUser"

export const URLs = {
    users: 'https://conduit.productionready.io/api/users'
}

export default class user {
    static signupUserAPI() {
        cy.signupUser(URLs.users, initUser())
    }
}