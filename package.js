import fs from 'fs';
const pkg = JSON.parse(fs.readFileSync("./package.json",'utf8'));

const packageData = `
{
    "name": "${pkg.name}",
    "version": "${pkg.version}",
    "description": "A Tiny Video Player for html5.",
    "type": "module",
    "types": "./@types/index.d.ts",
    "main": "index.js",
    "module": "index.js",
    "sideEffects": false,
    "keywords": [
      "video player"
    ],
    "author": "jackieLee",
    "license": "MIT",
    "repository": {
      "type": "git",
      "url": "https://www.haoba.cc"
    },
    "bugs": {
      "url": "https://www.haoba.cc/issues"
    }
  }
`;
fs.writeFile("./build/package.json", packageData, 'utf8', function (err) { 
    if (err) { 
        console.log("An error occured while writing JSON Object to File."); 
        return console.log(err); 
    } 
    console.log("package JSON file has been saved."); 
 });