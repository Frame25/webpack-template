var fs = require('fs');
var exec = require('child_process').exec;

var deleteFolderRecursive = function(path) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach(function(file, index){
      var curPath = path + "/" + file;
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};

deleteFolderRecursive('.git');
deleteFolderRecursive('.vscode');

['yarn-error.log', 'yarn.lock', 'init.js', 'package-lock.json'].forEach(function(file){
  fs.unlink(file, function(err) { if (err) console.log('can not remove ' + file) });
});

var p = fs.readFileSync('package.json', 'utf-8');
p = JSON.parse(p);
delete p.scripts.init;
fs.writeFileSync('package.json', JSON.stringify(p, null, 2), 'utf-8');

exec('npm i');
exec('git init');

console.log('Wait for the process to finish... \nAnd enjoy coding!')