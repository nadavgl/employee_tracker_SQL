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
    roles.title AS role_title,
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
        const sql = 'SELECT roles.id AS role_id,roles.title AS role_title, departments.department_name,roles.salary FROM roles JOIN departments ON roles.department_id = departments.id'

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
                name: 'roll_name',
                message: 'Enter name of role'
            },
            {
                name: 'salary',
                message: 'Enter salary for role'
            },
            {
                type: 'list',
                name: 'deparment_name',
                message: 'Enter department name',
                choices: ['Engineering', 'Accounting', 'HR']
            },
        ])
        await Query.addRole(answerObj)
    }

    static async showAddDeparmentPrompt() {
        console.log('\nPlease enter the department information')

        const answerObj = await inquirer.prompt([
            {
                name: 'department_name',
                message: 'Please enter the deparment name'
            }
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