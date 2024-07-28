const client = require('../db/connection')

class Query {
    static async addRole(answerObj){
        const sql = 'INSERT INTO roles (role_title, salary, department_id) VALUES ($1, $2, $3)'

        await client.query(sql, [answerObj.role_title, answerObj.salary, answerObj.department_id])

        console.log('Role succesfully added!\n')
    }

    static async addEmployee ({first_name, last_name, role_id, manager_id}){
        const sql = 'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3)';
        await client.query(sql, [first_name, last_name, role_id, manager_id])

        console.log('Employee succesfully added!\n')
    }

    static async addDepartment(answerObj){
        
        const sql = 'INSERT INTO departments (department_name) VALUES ($1)';
        await client.query(sql, [answerObj.department_name])
        
        console.log('Department succesfully added!\n')
    }


}

module.exports = Query;