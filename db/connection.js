const { Pool } = require('pg')
const client = new Pool ({
    user: 'postgres',
    password: 'pass',
    database: 'employee_tracker_app'
})

module.exports = client;