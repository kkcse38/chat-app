const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3000;

const publicPath = path.join(__dirname,'./../public');
// console.log(__dirname,"\..\public");
// console.log(__dirname);
// console.log(publicPath);

var app = express();
//setup express sattic<public folder> middleware
app.use(express.static(publicPath));

app.listen(PORT,()=>{
    console.log('Node is up on port',PORT);
});



