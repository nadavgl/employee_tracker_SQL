const { Client } = require('pg')
const inquirer = require('inquirer')
const MenuSystem = require('./lib/MenuSystem');

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
                    'Add an employee',
                    'Update an employee role',
                    'View all roles',
                    'Add a role',
                    'View all departments',
                    'Add a department',
                    'Quit',
    
                    ],
            })

        
            switch (answerObj.choice) {
              case 'View all departments':
                await MenuSystem.viewAllDepartments();
                showMainMenu()
                break;
              case 'View all roles':
                await MenuSystem.viewAllRoles();
                showMainMenu()
                break;
              case 'View all employees':
                await MenuSystem.viewAllEmployees();
                showMainMenu()
                break;
              case 'Add a department':
                await MenuSystem.showAddDeparmentPrompt();
                showMainMenu()
                break;
              case 'Add a role':
                await MenuSystem.showAddRolePrompt();
                showMainMenu()
                break;
              case 'Add an employee':
                await MenuSystem.showAddEmployeePrompt();
                showMainMenu()
                break;
              case 'Update an employee role':
                await MenuSystem.updateEmployeeRole();
                showMainMenu()
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