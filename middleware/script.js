const express = require('express');
const app = express();


//middleware is a function that execute before the route 
app.use(function (req, res, next) {
  console.log("middleware working!");
//   node has a problem if contorol in a any middleware then then contorol automattically not pass to
//   any route/middleware so we have to use next() function to pass control to the next middleware or route
  next(); // Pass control to the next middleware function
    
})
//more then one middleware function is also possible

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