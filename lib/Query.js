const client = require('../db/connection')

class Query {
    static async addRole(answerObj){
        const sql = ''

        console.log('Role succesfully added!\n')
    }

    static async addEmployee ({first_name, last_name, }){
        const sql = ''
        await client.query(sql, [first_name, last_name])

        console.log('Employee uccesfully added!\n')
    }

    static async addDepartment(answerObj){
        const sql = ''
        await client.query(answerObj)
        
        console.log('Deparment succesfully added!\n')
    }
    
}

module.exports = Query;