const client = require('../db/connection')

class Query {
    static async addRole(answerObj){
        const sql = 'INSERT INTO roles (role_title, salary, department_name) VALUES ($1, $2, $3)'

        await client.query(sql, [answerObj.role_title, answerObj.salary, answerObj.department_name])

        console.log('Role succesfully added!\n')
    }

    static async addEmployee ({first_name, last_name, role_id, manager_id}){
        const sql = 'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3)';
        await client.query(sql, [first_name, last_name, role_id, manager_id])

        console.log('Employee succesfully added!\n')
    }

    static async addDepartment(answerObj){
        const sql = ''
        await client.query(answerObj)
        
        console.log('Deparment succesfully added!\n')
    }
    


}

module.exports = Query;