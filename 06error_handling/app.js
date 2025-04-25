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
app.get("/error", function(req, res, next){
  throw Error("This is a test error!");
}); 

app.use(function errorHandler(err, req, res, next) {
  if(res.headersSent) {
    return next(err); // If headers are already sent, delegate to the default error handler
  }
res.status(500).render("error", { error: err }); // Render the error page with the error object
});


app.listen(3000, () => {    
  console.log('Server is running on http://localhost:3000');
});