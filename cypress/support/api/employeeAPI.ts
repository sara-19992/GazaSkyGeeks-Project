import { genericPassword } from "../helpers/genericFuncs"

class employee {

    elements = {
        empLoader: () => cy.get('.oxd-loading-spinner')
    }

    addEmployee(empID: string, firstName: string, lastName: string, middleName: string) {
        //add new employee using API
        cy.request({
            method: 'POST',
            url: '/web/index.php/api/v2/pim/employees',
            body: {
                empPicture: null,
                employeeId: empID,
                firstName: firstName,
                lastName: lastName,
                middleName: middleName
            }
        }).then((response) => {
            expect(response).property('status').to.equal(200)
            console.log(response.body.data.empNumber)
            this.addUser(response.body.data.empNumber, firstName)
        })
    }

    addUser(id: number, username: string) {
        //creat user login deails for new employee
        cy.request({
            method: 'POST',
            url: '/web/index.php/api/v2/admin/users',
            body: {
                empNumber: id,
                password: genericPassword(),
                status: true,
                userRoleId: 2,
                username: username
            }
        }).then((response) => {
            expect(response).property('status').to.equal(200);
        })
    }

    deleteEmployee(empNum: string) {
        cy.request({
            method: 'DELETE',
            url: '/web/index.php/api/v2/admin/users',
            body: {
                ids: [empNum]
            }
        }).then((response) => {
            expect(response).property('status').to.equal(200)

            cy.request({
                method: 'DELETE',
                url: '/web/index.php/api/v2/pim/employees',
                body: {
                    ids: [empNum]
                }
            }).then((response) => {
                expect(response).property('status').to.equal(200);
            })
        })
    }

}

export default employee
