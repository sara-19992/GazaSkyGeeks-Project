import user from "../../../support/helpers/signupHelper"
import { generateUsername, generateEmail, generatePassword } from "../../../support/helpers/generate"

describe('Conduit: Signup Account', () => {

    it('Sign up : create new account', () => {
        const apiPayload = {
            user: {
                username: generateUsername('sarah'),
                email: generateEmail('sarah'),
                password: generatePassword()
            }
        }
        //console.log(apiPayload)
        user.conduitCreateNewUser(apiPayload)
    })
})