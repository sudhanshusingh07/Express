const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
}); 
app.get("/profile", (req, res) => {
  res.send("Hello from Rain!");
}); 

app.get("/contect", (req, res) => {
  res.send("say hay to rain!");
}); 

app.listen(3000, () => {    
  console.log('Server is running on http://localhost:3000');
});