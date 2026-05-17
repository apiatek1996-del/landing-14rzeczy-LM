const fs = require('fs');
const path = require('path');

const intensePurple = 'text-[#C026D3]'; // bardzo żywy, liliowo-różowy fiolet
const darkGrey = 'text-slate-800';
const mutedGrey = 'text-slate-600';
const darkBg = 'bg-slate-900';

function replaceColors(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceColors(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Najpierw zmieniamy wszystkie teksty z powrotem na klasyczne szarości
      content = content.replace(/text-\[#351C4D\]/g, darkGrey);
      content = content.replace(/text-\[#5C4375\]/g, mutedGrey);
      // Stopka z fioletu na ciemny szary
      content = content.replace(/bg-\[#351C4D\]/g, darkBg);
      
      // Następnie dla elementów posiadających font nagłówkowy (font-heading) 
      // zmieniamy szarość na intensywny, żywy liliowo-różowy fiolet
      const lines = content.split('\n');
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('font-heading')) {
          lines[i] = lines[i].replace(darkGrey, intensePurple);
          lines[i] = lines[i].replace(mutedGrey, intensePurple);
        }
      }
      content = lines.join('\n');
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

replaceColors('./components');
replaceColors('./app');
console.log('Gotowe!');
