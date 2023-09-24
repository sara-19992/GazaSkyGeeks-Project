import { method } from "cypress/types/bluebird";
import loginPage from "../../support/pageObject/loginPage";

const login: loginPage = new loginPage();
let userID: number;
describe('Verfy Login Page', () => {

  beforeEach(() => {
    cy.visit('/web/index.php')
    cy.fixture('adminLogin').as('users')
  })

  it('Login: valid username and valid password', () => {
    cy.get('@users').then((user: any) => {
      login.userLogin(user[0].userName, user[0].password)
      login.verfiyElem(user[0].mainPage)
    })
  })

  it.only('Login: Invalid username and valid password', () => {
    cy.get('@users').then((user: any) => {
      login.userLogin(user[1].userName, user[1].password)
      login.verfiyElem(user[1].elertMsg)
    })
  })

  it('Login: valid username and Invalid password', () => {
    cy.get('@users').then((user: any) => {
      login.userLogin(user[2].userName, user[2].password)
      login.verfiyElem(user[2].elertMsg)
    })
  })

  it('Login: Invalid username and Invalid password', () => {
    cy.get('@users').then((user: any) => {
      login.userLogin(user[3].userName, user[3].password);
      login.verfiyElem(user[3].elertMsg);
    })
  })

  it('Login: empty username and password', () => {
    cy.get('@users').then((user: any) => {
      login.userLogin(user[4].userName, user[4].password);
      login.verfiyElem(user[4].elertMsg);
    })
  })

  it('Login: empty username and non-empty password', () => {
    cy.get('@users').then((user: any) => {
      login.userLogin(user[4].userName, user[4].password);
      login.verfiyElem(user[4].elertMsg);
    })
  })

  it('Login: non-empty username and empty password', () => {
    cy.get('@users').then((user: any) => {
      login.userLogin(user[4].userName, user[4].password);
      login.verfiyElem(user[4].elertMsg);
    })
  })

  it('Login: empty username and empty password', () => {
    cy.get('@EmpInfo').then((user: any) => {
      login.userLogin(user[5].userName, user[5].password);
      login.verfiyElem(user[5].elertMsg);
    })
  })

  it('Login: lowercase userName and password', () => {
    cy.get('@EmpInfo').then((user: any) => {
      login.userLogin(user[6].userName, user[6].password);
      login.verfiyElem(user[6].elertMsg);
    })
  })

  it('Login: verfiy password is hidden', () => {
    cy.get('@EmpInfo').then((user: any) => {
      cy.get('input[name="password"]').should('have.attr', 'type', 'password');
    })
  })
  // it.only('Forget Password', () => {
  //   login.forget();
  // })
});
