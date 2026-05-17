const fs = require('fs');
const path = require('path');

function replaceColors(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceColors(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      content = content.replace(/\[#113629\]/g, '[#351C4D]'); // ciemny fiolet
      content = content.replace(/\[#2E5C4B\]/g, '[#5C4375]'); // jaśniejszy fiolet
      fs.writeFileSync(fullPath, content);
    }
  }
}

replaceColors('./components');
replaceColors('./app');
console.log('Fiolet gotowy!');
