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

function toc() {
    readline.question('Select from the following:\r\n0: licensing '.yellow + '\r\n' + "1: Header input ".blue + '\r\n' + '2: Description '.green + '\r\n' + '3: Installation instructions '.red + "\r\n" + '4: Exit ', toc => {

        let elem;
        switch (toc) {
            case '0':
                {
                    elem = usage();
                }
                break;
            case '1':
                {
                    elem = header();
                }
                break;
            case '2':
                {
                    elem = description();
                }
                break;
            case '3':
                {
                    elem = instructions();
                }
                break;
            case '4':
                {
                    elem = closing();
                }
                break;
            default:
                toc();
        }
    });

    let usage = function usage() {
        const licenses = [
            l1 = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
            l2 = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
            l3 = '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)',
        ];
        readline.question('Select license badge:\r\n0: Apache License, Version 2.0: '.red + "\r\n" + '1: Boost Software License 1.0 : '.green + "\r\n" + '2: Creative Commons: '.blue, usage => {
            let elem;
            switch (usage) {
                case '0':
                    elem = fs.appendFile(`ReadMe.md`, `${licenses[0]}` + "\r\n" + "\r\n", (err) => {
                        if (err)
                            throw err;
                        toc();
                    })
                    break;
                case '1':
                    elem = fs.appendFile(`ReadMe.md`, `${licenses[1]}` + "\r\n" + "\r\n", (err) => {
                        if (err)
                            throw err;
                        toc();
                    })
                    break;
                case '2':
                    elem = fs.appendFile(`ReadMe.md`, `${licenses[2]}` + "\r\n" + "\r\n", (err) => {
                        if (err)
                            throw err;
                        toc();
                    })
                    break;
                default:
                    toc();
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
                    toc();
                })
        });
    };

    let description = function description() {
        readline.question(questions[1].red, description => {
            console.log(`Subject description: ${description}`, '\n');
            fs.appendFile('ReadMe.md', `${description}` + "\r\n" + "\r\n", (err) => {
                if (err)
                    throw err;
                toc();
            })
        })
    };

    let instructions = function instructions() {
        readline.question(questions[2].red, instructions => {
            console.log(`Installation instructions: ${instructions}`, '\n');
            fs.appendFile('ReadMe.md', `${instructions}` + "\r\n" + "\r\n", (err) => {
                if (err)
                    throw err;
                toc();
            })
        })
    };

    let closing = function closing() {
        readline.question('ReadMe complete!'.yellow, closing => {

        })
        readline.close();
    }
}
toc();