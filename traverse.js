const fs = require('fs');
const ini = require('ini');
const path = require('path');

module.exports = function traverse(result, name, tree, langs) {
  if (!langs || langs.includes(name)) {
    const infoPath = path.join(tree, 'md.ini');
    if (fs.existsSync(infoPath)) {
      const info = ini.parse(fs.readFileSync(infoPath, 'utf-8'));
      if (info.core.latitude && info.core.longitude) {
        result.push({
          lang: name,
          coords: [Number(info.core.latitude), Number(info.core.longitude)]
        });
      }
    }
  }
  for (const name of fs.readdirSync(tree)) {
    const subtree = path.join(tree, name);
    if (fs.lstatSync(subtree).isDirectory()) {
      traverse(result, name, subtree, langs);
    }
  }
};