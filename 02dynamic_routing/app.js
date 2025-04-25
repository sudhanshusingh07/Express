const express = require('express');
const app = express();
//in any route in which any part of the url is same then we can use dynamic routing
app.get('/', (req, res) => {
  res.send('Hello World!');
}); 
app.get("/profile/:username", (req, res) => { // :username is a dynamic part of the url
  res.send(`Hello from ${req.params.username}!`); // req.params.username will give the value of the dynamic part of the url
}); 

app.get("/contect", (req, res) => {
  res.send("say hay to rain!");
}); 

app.listen(3000, () => {    
  console.log('Server is running on http://localhost:3000');
});