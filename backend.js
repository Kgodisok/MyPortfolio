const fs = require('fs').promises;
const { error } = require('console');
const express = require('express');
const { appendFile } = require('fs');
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

app.get('/emailAddress', async (req, res)=>{
  const data = await loadJSON();
  if (data && data.emailAddress){
    res.status(200).send(data.emailAddress)
  } else {
    res.status(500).send({error: "Email Address Not Found"})
  }
});

app.get('/education', async (req, res)=>{
  const data = await loadJSON();
  if (data && data.education){
    res.status(200).send(data.education)
  } else {
    res.status(500).send({error: "Education Not Found"})
  }
});

app.get('/address', async (req, res)=>{
  const data = await loadJSON();
  if (data && data.address){
    res.status(200).send(data.address)
  } else {
    res.status(500).send({error: "Address Not Found"})
  }
});


app.get('/cellPhoneNumber', async (req, res)=>{
  const data = await loadJSON();
  if (data && data.cellPhoneNumber){
    res.status(200).send(data.cellPhoneNumber)
  } else {
    res.status(500).send({error: "Cell Phone Number Not Found"})
  } 
});

app.get('/languages', async (req, res)=>{
  const data = await loadJSON();
  if (data && data.languages){
    res.status(200).send(data.languages)
  } else {
    res.status(500).send({error: "Languages Not Found"})
  }
});


app.get('/skills', async (req, res)=>{
  const data = await loadJSON();
  if (data && data.skills){
    res.status(200).send(data.skills)
  } else {
    res.status(500).send({error: "Skills Not Found"})
  }
});



const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


