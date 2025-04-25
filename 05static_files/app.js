import express from 'express';
const app = express();

app.set("view engine", "ejs"); 
app.use(express.static('./public')); // Serve static files from the 'public' directory

app.get('/', (req, res) => {
  res.render('index'); 
}); 

app.get("/contect", (req, res) => {
  res.render("contect");
}); 

app.listen(3000, () => {    
  console.log('Server is running on http://localhost:3000');
});