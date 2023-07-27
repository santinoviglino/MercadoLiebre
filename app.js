const express = require("express");
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));
app.listen (PORT, () => console.log ("servidor andando en el puerto: " + PORT));
app.get ('/', function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
   });
app.get ('/login', function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
   });
