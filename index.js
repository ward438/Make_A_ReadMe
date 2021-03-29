const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const colors = require('colors');
const questions = [
    quest0 = 'Enter title of README: ',
    quest1 = 'Enter description of application or code: ',
    quest2 = 'Enter installation instructions: ',
];

let usage = function usage() {
    const licenses = [
        l1 = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    ];
    readline.question('0 = Limited Usage: '.red + "\r\n" + '1 = Restricted Usage: '.green + "\r\n" + '2 = Unrestricted Usage: '.blue, usage => {
        let elem;
        switch (usage) {
            case '0':
                elem = fs.appendFile('ReadMe.md', `${licenses[0]}` + "\r\n" + "\r\n", (err) => {
                    if (err)
                        throw err;
                    header();
                })
                break;
            case '1':
                elem = fs.appendFile('ReadMe.md', `${usage}` + "\r\n" + "\r\n", (err) => {
                    if (err)
                        throw err;
                    header();
                })
                break;
            case '2':
                elem = fs.appendFile('ReadMe.md', `${usage}` + "\r\n" + "\r\n", (err) => {
                    if (err)
                        throw err;
                    header();
                })
                break;
            default:
                header();



        }
    });
};


let header = function header() {
    const hash = "# ";
    readline.question(questions[0].red, title => {
        console.log(`Header is: ${title}`, '\n');
        fs.appendFile('ReadMe.md', `${hash}` +
            `${title}` + "\r\n" + "\r\n", (err) => {
                if (err)
                    throw err;
                description();
            })
    });
};

let description = function description() {
    readline.question(questions[1].red, description => {
        console.log(`Subject description: ${description}`, '\n');
        fs.appendFile('ReadMe.md', `${description}` + "\r\n" + "\r\n", (err) => {
            if (err)
                throw err;
            instructions();
        })
    })
};

let instructions = function instructions() {
    readline.question(questions[2].red, instructions => {
        console.log(`Installation instructions: ${instructions}`, '\n');
        fs.appendFile('ReadMe.md', `${instructions}` + "\r\n" + "\r\n", (err) => {
            if (err)
                throw err;
            closing();
        })
    })
};




let closing = function closing() {
    readline.question('ReadMe complete!'.yellow, closing => {
        console.log('README Complete!');
    })
    readline.close();
}


usage();