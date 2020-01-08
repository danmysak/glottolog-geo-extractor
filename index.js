#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const commandLineArgs = require('command-line-args');
const traverse = require('./traverse');

const optionDefinitions = [
  { name: 'path', type: String },
  { name: 'families', type: String, multiple: true },
  { name: 'languages', type: String, multiple: true }
];
const options = commandLineArgs(optionDefinitions);

if (!options.path) {
  console.error('Please provide a path to the Glottolog repo using --path');
  return;
}

const tree = path.join(options.path, 'languoids/tree');

if (!fs.existsSync(tree)) {
  console.error('The path provided is invalid');
  return;
}

if (!options.families) {
  console.log('Please provide a list of families using --families');
  return;
}

const result = [];
for (const family of options.families) {
  const familyTree = path.join(tree, family);
  if (!fs.existsSync(familyTree)) {
    console.error(`Family does not exist: ${family}`);
  } else {
    traverse(result, family, familyTree, options.languages);
  }
}

if (options.languages && options.languages.length > result.length) {
  console.error(`Languages are not found: ${
    options.languages.filter(l => !result.some(r => r.lang === l)).join(', ')
  }`);
}

console.log(JSON.stringify(result.map(r => r.coords)));