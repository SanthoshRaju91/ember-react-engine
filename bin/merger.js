const merger = require('merge-json');
const fs = require('fs');
const glob = require('glob');
const del = require('del');

const apps = {
  host: '../host',
  addons: '../addons/'
};

function getDirectories(path) {
  return fs.readdirSync(path).filter(function(file) {
    return fs.statSync(path + '/' + file).isDirectory();
  });
}

// const addons = glob.sync('**/package.json', { cwd: apps.addons });
//
// const addonsRequire = addons.map(current => {
//   return require('../addons/' + current);
// });

// const dependencies = merger.merge(hostJSON.dependencies, addon1.dependencies);
//
// const devDependencies = merger.merge(
//   hostJSON.devDependencies,
//   addon1.devDependencies
// );
//
// const consolidatedPackage = {
//   name: 'packages',
//   version: '1.0.0'
// };
//
// consolidatedPackage['dependencies'] = dependencies;
// consolidatedPackage['devDependencies'] = devDependencies;
//
// fs.writeFileSync(
//   '../packages/package.json',
//   JSON.stringify(consolidatedPackage)
// );
