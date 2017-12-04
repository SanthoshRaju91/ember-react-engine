import merger from 'merge-json';
import fs from 'fs';
import del from 'del';

const apps = {
  host: '../host',
  addons: '../addons/'
};

/**
* Function to get the list of directories from the specified path
* @method getDirectories
* @param path - path to look for.
*/
function getDirectories(path) {
  return fs
    .readdirSync(path)
    .filter(file => fs.statSync(path + '/' + file).isDirectory());
}

const addons = getDirectories(apps.addons);

let addonsRequire = addons.map(current => {
  return require(`${apps.addons}${current}/package.json`);
});

addonsRequire.push(require(`${apps.host}/package.json`));

let dependencies = {};

addonsRequire.forEach(current => {
  dependencies = merger.merge(dependencies, current.dependencies);
});

let devDependencies = {};

addonsRequire.forEach(current => {
  devDependencies = merger.merge(devDependencies, current.devDependencies);
});

const consolidatedPackage = {
  name: 'packages',
  version: '1.0.0',
  dependencies,
  devDependencies
};

fs.writeFileSync(
  '../packages/package.json',
  JSON.stringify(consolidatedPackage, null, 4)
);
