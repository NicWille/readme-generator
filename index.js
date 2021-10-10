const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");



inquirer
    .prompt([
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
        },
        {
            type: "input",
            name: "title",
            message: "What is the Projects Title?",
        },
        {
            type: "input",
            name: "description",
            message: "Describe the project in detail.",
        },
        {
            type: "input",
            name: "installation",
            message: "How do you install the Project?",
        },
        {
            type: "input",
            name: "usage",
            message: "What is the Project used for?"
        },
        {
            type: "input",
            name: "credit",
            message: "Who do you need to Credit?",
        },
        {
            type: "checkbox",
            name: "license",
            message: "What Licenses do you want?",
            choices: ["MIT", "GNU", "GPLv3", "AGPLv3", "MPL", "Apache-2.0", "NaN"]

        },
        {
            type: "input",
            name: "test",
            message: "How do you test it?",
        },
        {
            type: "input",
            name: "fileName",
            message: "Name the File (exclude '.md')."
        }
    ])
    .then((answers) => {
        const markdownFile = generateMarkdown(answers);
        writeToFile(answers.fileName + ".md", markdownFile);
    })

    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) =>
            err ? console.error(err) : console.log('Success!'))
    }
