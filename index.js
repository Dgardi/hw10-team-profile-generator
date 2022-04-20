const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const team = [];


// Prompt to enter the team manager’s name, employee ID, email address, and office number
function addMgr{
inquirer
    .prompt([
    {
        type: 'input',
        message: 'Who is your manager?',
        name: 'mgrName',
    },
    {

        type: 'input',
        message:'What is their employee ID number?',
        name: 'mgrId',
    },
    {
        type: 'input',
        message: 'What is their email?',
        name: 'mgrEmail',
    },
    {
        type: 'input',
        message: 'What is their office number?',
        name: 'mgrOffice',
    },      
])

    const manager = new Manager(data.mgrName, data.mgrId, data.mgrEmail, data.mgrOffice);
    team.push(manager);
    console.log(manager);
    addTeam();
})
}


function addMinion(){
inquirer.prompt([
    {
        type: 'list',
        message: 'Would you like to add a team member?',
        name: 'teamPosition',
        choices:["Engineer", "Intern","None"]
    }
])
.then(data => {
    switch(data.teamPosition) {
        case "Engineer":
            addEngineer();
            break;
        case "Intern":
            addIntern();
            break;
        default:
            avengersAssemble();
    }
});   

}


function addEngineer(){
inquirer
.prompt([
    {
        type: 'input',
        message: 'Who would you like to add to the team?',
        name: 'engName',
    },   
    {

        type: 'input',
        message:'What is their employee ID number?',
        name: 'engId',
    },
    {
        type: 'input',
        message: 'What is their email?',
        name: 'engEmail',
    },
    {
        type: 'input',
        message: 'What is their Github?',
        name: 'engGithub',
    },   
])
.then(data => {
    const engineer = new Engineer(data.engName, data.engId, data.engEmail, data.engGithub);
    console.log(engineer);
    team.push(engineer);
    addMinion();

});

function addIntern(){
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Who would you like to add to the team?',
            name: 'intName',
        },   
        {
    
            type: 'input',
            message:'What is their employee ID number?',
            name: 'intId',
        },
        {
            type: 'input',
            message: 'What is their email?',
            name: 'intEmail',
        },
        {
            type: 'input',
            message: 'What is their school?',
            name: 'intSchool',
        },   
    ])
    .then(data => {
        const intern = new Intern(data.intName, data.intId, data.intEmail, data.intSchool);
        console.log(intern);
        team.push(intern);
        addMinion();
    
    });

function avengersAssemble() {
    fs.appendFile(`./`, team, (err))
}

}
}
