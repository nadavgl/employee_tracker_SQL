const { Client } = require('pg')
const inquirer = require('inquirer')
const client = new Client({
    user: 'postgres',
    password: 'pass',
    database: 'employee_tracker_app'
})

async function showMainMenu(){
        const answerObj = await inquirer.prompt(
            {
                type: 'list',
                name: 'choice',
                message: 'What would you like to do?',
                choices: [
                    'View all employees',
                    'Add employee',
                    'Update an employee role',
                    'View all roles',
                    'Add a role',
                    'View all departments',
                    'Add department',
                    'Quit',
    
                    ],
            })

        
            switch (answerObj.choice) {
              case 'View all departments':
                viewDepartments();
                break;
              case 'View all roles':
                viewRoles();
                break;
              case 'View all employees':
                viewEmployees();
                break;
              case 'Add a department':
                addDepartment();
                break;
              case 'Add a role':
                addRole();
                break;
              case 'Add an employee':
                addEmployee();
                break;
              case 'Update an employee role':
                updateEmployeeRole();
                break;
              case 'Quit':
                client.end();
            }
          };

async function init(){
  await client.connect()

  console.log(`
  -------------------------------
  Welcome To The Employee Tracker
  -------------------------------  
  `)
  showMainMenu();
}

init();
        
      
        




    


    // const sql = `INSERT INTO students (first_name, last_name, course_name) VALUES($1, $2, $3)`;

    // await client.query(sql, [answerObj.first_name, answerObj.last_name, answerObj.course_name])

    // console.log('Student Created')