var request = require ("request");
var http = require ("http");
var url = require('url');
var ur =" http://localhost:8000/age?year=1998&month=11&date=23&name=John" ;
var k = url.parse(ur,true).query;
const port = process.env.PORT || 8000


var server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    // var ageD = YEAR.now() - k.year;
    // var ageDate = new YEAR(ageD); 
    // var txt = Math.abs(ageDate.getUTCFullYear() - 1970)
    //   var currentYear= new Date().getFullYear(); 
    //   var h = new Date.getFullYear();
    //   html : {<div><p>{%}</p></div>}
    // request(k,function(err,res){
    // var txt = " "+k.year + " " + k.month;
    var currentyear = 2021;
    var v = currentyear - k.year ; 
    // try{ var g = "hi" +" "+ k.name;
    //      var f =2021- k.year;
         
    // catch (error){
    //     console.log(error)
    // }})
    var age = v.toString();
    var g = "Hi" +" "+ k.name;
    res.write(g);
    res.write("  "+ "your age is" +" "+age);
    res.end()
     
      


}).listen(port, () => {
    console.log('server started',port)
  });