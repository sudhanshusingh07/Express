import express from 'express';
const app = express();

app.set("view engine", "ejs"); //configuring ejs

app.get('/', (req, res) => {
  res.render('index'); //rendering index.ejs file
}); 

app.get("/contect", (req, res) => {
  res.render("contect"); //rendering contect.ejs file
}); 

app.listen(3000, () => {    
  console.log('Server is running on http://localhost:3000');
});