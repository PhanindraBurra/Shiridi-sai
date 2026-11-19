const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'eswara vidyalayam', 'src', 'components');
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.jsx')) {
    const fullPath = path.join(dir, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    let updated = content.split('"/assets/').join('"./assets/').split("'/assets/").join("'./assets/");
    if (content !== updated) {
      fs.writeFileSync(fullPath, updated, 'utf8');
      console.log('Updated:', file);
    }
  }
});
console.log('Done fixing relative asset paths in JSX components.');

