const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const colors = require('colors');

function createReadMe() {
    const hash = "# ";
    let question = readline.question('README header: '.red, title => {
        console.log(`Header is: ${title}`, '\n');
        fs.appendFile('ReadMe.md', `${hash}` +
            `${title}` + "\r\n" + "\r\n", (err) => {
                if (err)
                    throw err;
                description();

            })

    })

    let description = function description() {
        readline.question('Enter description of application or code: '.red, description => {
            console.log(`Subject description: ${description}`, '\n');
            fs.appendFile('ReadMe.md', `${description}` + "\r\n" + "\r\n", (err) => {
                if (err)
                    throw err;
                instructions();
            })
        })
    };

    let instructions = function instructions() {
        readline.question('Enter installation instructions: '.red, instructions => {
            console.log(`Installation instructions: ${instructions}`, '\n');
            fs.appendFile('ReadMe.md', `${instructions}` + "\r\n" + "\r\n", (err) => {
                if (err)
                    throw err;
                usage();
            })
        })
    };

    let usage = function usage() {
        readline.question('0 = Limited Usage: '.red + "\r\n" + '1 = Restricted Usage: '.green + "\r\n" + '2 = Unrestricted Usage: '.blue, usage => {
            let elem;
            switch (usage) {
                case '0':
                    elem = fs.appendFile('ReadMe.md', `test` + "\r\n" + "\r\n", (err) => {
                        if (err)
                            throw err;
                        closing();

                    })
                    break;

                case '1':
                    elem = fs.appendFile('ReadMe.md', `${usage}` + "\r\n" + "\r\n", (err) => {
                        if (err)
                            throw err;
                        closing();
                    })
                    break;

                case '2':
                    elem = fs.appendFile('ReadMe.md', `${usage}` + "\r\n" + "\r\n", (err) => {
                        if (err)
                            throw err;
                        closing();
                    })
                    break;
                default:
                    console.log("Thank you")
            }
        })
    };

    let closing = function closing() {
        readline.question('ReadMe complete!'.yellow, closing => {
            console.log('README Complete!');
        })
        readline.close();
    }
};
createReadMe();