const inquirer = require('inquirer')
const client = require('../db/connection')
const Query = require('./Query')


class MenuSystem {
    static async viewAllEmployees() {
        const sql = `
SELECT 
    employees.id,
    employees.first_name,
    employees.last_name,
    roles.role_title AS role_title,
    roles.salary,
    departments.department_name,
    employees.manager_id
FROM 
    employees
JOIN 
    roles ON employees.role_id = roles.id
JOIN 
    departments ON roles.department_id = departments.id;`
        const data = await client.query(sql);

        console.table(data.rows)
    }
    static async viewAllRoles() {
        const sql = 'SELECT * FROM roles'

        const data = await client.query(sql)

        console.table(data.rows)

    }
    static async viewAllDepartments() {
        const sql = 'SELECT id AS department_id, department_name FROM departments'

        const data = await client.query(sql)

        console.table(data.rows)

    }
    static async showAddRolePrompt() {
        console.log('\nPlease enter the role information\n')

        const answerObj = await inquirer.prompt([
            {
                name: 'role_title',
                message: 'Enter name of role'
            },
            {
                name: 'salary',
                message: 'Enter salary for role'
            },
            {
                type: 'list',
                name: 'department_id',
                message: 'Enter department name',
                choices: [{name:'Engineering', value: 1},{name:'Accounting', value: 2},{name:'HR', value: 3}]
            },
        ])
        await Query.addRole(answerObj)
    }

    static async showAddDeparmentPrompt() {
        console.log('\nPlease enter the department information')

        const answerObj = await inquirer.prompt([
            {
                name: 'department_name',
                message: 'Please enter the department name'
            },
        ])
        await Query.addDepartment(answerObj)
    }
    // MenuSystem.js
    static async showAddEmployeePrompt() {
        console.log('\nPlease enter employee information\n');

        const answerObj = await inquirer.prompt([
            {
                name: 'first_name',
                message: 'Please enter employee first name'
            },
            {
                name: 'last_name',
                message: 'Please enter employee last name'
            },
            {
                name: 'role_id',
                message: 'Please enter role ID for the employee'
            },
            {
                name: 'manager_id',
                message: 'Please enter manager ID for the employee'
            }
        ]);

        await Query.addEmployee(answerObj);
    } 




}

module.exports = MenuSystem;