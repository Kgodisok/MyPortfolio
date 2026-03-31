const fs = require('fs').promises;
const { error } = require('console');
const express = require('express')
const app = express()

async function loadJSON() {
  try {
    const data = await fs.readFile('./backend.json', 'utf8');
    const jsonData = JSON.parse(data);
    return jsonData;
  } catch (err) {
    console.error('Error loading JSON:', err.message);
  }
}


app.get('/name', async (req, res) => {
  const data = await loadJSON();
  if (data && data.name) {
    res.status(200).send(data.name); // send only the surname as plain text
  } else {
    res.status(500).send('Name not found');
  }
});

app.get('/surname', async (req, res)=>{
  const data = await loadJSON();
  if (data && data.surname){
    res.status(200).send(data.surname)
  } else {
    res.status(500).send({error: "Surname Not Found"})
  }
});

app.get('/age', async (req, res)=>{
  const data = await loadJSON();
  if (data && data.age){
    res.status(200).send(data.age)
  } else {
    res.status(500).send({error: "Age Not found"})
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

