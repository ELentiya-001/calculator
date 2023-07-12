const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
 //console.log(__dirname);
} )

app.post("/",function(req, res){
    console.log(req.body.num1);

    var num1= Number(req.body.num1);
    var num2= Number(req.body.num2);

    var result = num1+num2;

    res.send("Your result is "+ result);
  })

  app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
   //console.log(__dirname);
  } )
  
  app.post("/bmicalculator",function(req, res){
      console.log(req.body.w);
  
      var num1= parseFloat(req.body.w);
      var num2= parseFloat(req.body.h);
  
      var result = (num1)/(num2*num2);
  
      res.send("Your BMI is "+ result);
    })
app.listen(3000, function() {
    console.log(`Example app listening on port`);
  })
 