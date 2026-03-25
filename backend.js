const fs = require('fs').promises;

async function loadJSON() {
  try {
    const data = await fs.readFile('./backend.json', 'utf8');
    const jsonData = JSON.parse(data);
    console.log(jsonData);
  } catch (err) {
    console.error('Error loading JSON:', err.message);
  }
}

loadJSON();
