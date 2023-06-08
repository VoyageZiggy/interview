const FileText = require('./file');
const fs = require("fs");

console.log(FileText.readFile('./test.json', false));

console.log(FileText.readFile('test.json', true));

let EOL = (process.platform === 'win32' ? '\r\n' : '\n');
console.log("TCL: EOL", EOL);


function func(data) {
  console.log('Line: ' + data);
}

FileText.readLines('test.json', func);