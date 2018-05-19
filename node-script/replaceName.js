const fs = require('fs')
const readline = require('readline');
const path = require('path');
const conff = require('./config.js')
//
let directory = null;
let outputFile = 'widget-generated.js';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const templateFolder = './node-script/templates/';

const curdir = process.cwd().split('\\').pop()

new Promise((resolve) => {
    rl.question('[current directory: "' + curdir + '"] leave empty or enter new Widget folder\'s name:', (answer) => {
        console.warn(`new widget's name is: ${answer}`);
        if (answer.trim() === '') { answer = curdir }
        rl.close();
        resolve(answer)
    })
}).then((answer) => {
    conff.filesToUpdate.forEach(file => {
        fs.readFile(templateFolder + file.name, 'utf8', (err, data) => {
            // eroro
            if (err) { return console.log(err); }
            // destination based on config.dest value
            let destination = file.dest + file.name.replace('-template', '');
            if (fs.existsSync(destination)) {
                console.log(destination + ' already exists');
                fs.unlinkSync(destination);
                console.log(destination + ' has been deleted');
            }
            // do the strReplace
            var result = data.replace(/@name/g, answer);
            fs.writeFile(destination, result, 'utf8', (err) => {
                if (err) return console.log(err);
                console.log(destination + ' has been generated and updated with: ' + answer)
            });
        })
    });
});

