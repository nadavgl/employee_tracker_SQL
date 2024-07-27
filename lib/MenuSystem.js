const inquirer = require('inquirer')
const client = require('../db/connection')

class MenuSystem {
    static async viewAllEmployees(){
        const sql =``

        const data = await client.query(sql);

        console.table(data.rows)
    }
    static async viewAllRoles(){
        const sql = ''

        const data = await client.query(sql)
    }
    static async viewAllDepartments(){
        const sql = ''

        const data = await client.query(sql)
    }
    static async showAddRolePrompt(){
        console.log('\nPlease enter the role information\n')

        const answerObj = await inquirer.prompt([
            {
                name: 'roll_name',
                message: 'Enter name of rol'
            },
            {
                name: 'salary',
                message: 'Enter salary for role'
            },
            {
                name: 'deparment',
                message: 'Enter department for role'
            },
        ])
        await Query.addRole(answerObj)
    }

    static async showAddDeparmentPrompt(){
        console.log('\nPlease enter the department information')

        const answerObj = await inquirer.prompt([
            {
                name: 'department_name',
                message: 'Please enter the deparment name'
            }
        ])
        await Query.addDepartment(answerObj)
    }
    static async showAddEmployeePrompt(){
        console.log('\nPlease enter employee')

        const answerObj = await inquirer.prompt ([
            {
                name: 'employee_name',
                message: 'Please enter emplyoee name'
            }

        ])
        await Query.addEmployee(answerObj)
    }
    

}

module.exports = MenuSystem;