const sh = require('shelljs');
const upath = require('upath');

const destPath = upath.resolve(upath.dirname(__filename), '../dist');
const docsPath = upath.resolve(upath.dirname(__filename), '../docs');

// Copy contents of destPath to docsPath using shelljs
sh.cp('-R', upath.join(destPath, '*'), docsPath);

