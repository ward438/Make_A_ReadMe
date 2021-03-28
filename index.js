const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const colors = require('colors');

function createReadMe() {
    readline.question('Header subject of ReadMe: '.red, title => {
        console.log(`The Header input: ${title}`, '\n');
        fs.appendFile('ReadMe.md', `${title}` + "\r\n" + "\r\n", (err) => {
            if (err)
                throw err;
            readline.question('Description: '.red, description => {
                console.log(`The subject description is: ${description}`, '\n');
                fs.appendFile('ReadMe.md', `${description}` + "\r\n" + "\r\n", (err) => {
                    if (err)
                        throw err;
                })
                readline.question('Enter installation instructions: '.red, instructions => {
                    console.log(`Installation instructions: ${instructions}`, '\n');
                    fs.appendFile('ReadMe.md', `${instructions}` + "\r\n" + "\r\n", (err) => {
                        if (err)
                            throw err;
                    })
                    readline.close();
                })

            })

        });


    });
};



createReadMe();