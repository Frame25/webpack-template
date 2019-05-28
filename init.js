var fs = require('fs');
var exec = require('child_process').exec;
['.git', '.vscode', 'yarn-error.log', 'yarn.lock', 'init.js'].forEach(function(file){
  fs.unlink(file, function(err) { if (err) console.log('can not remove ' + file) });
});

var p = fs.readFileSync('package.json', 'utf-8');
p = JSON.parse(p);
delete p.scripts.init;
fs.writeFileSync('package.json', JSON.stringify(p, null, 2), 'utf-8');

exec('npm i');
exec('git init');

console.log('Enjoy coding!')