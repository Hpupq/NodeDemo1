var express= require('express');
var app=express();
app.get('/',function(request,response){
    response.send("World HI page");
});
app.get('/books',function(request,response){
    response.send("Books Page ");
});
app.get('/hostel',function(req,res){
res.sendFile(__dirname+'/Index.html')
});
var server=app.listen(8080,function(REQ,RES){
console.log('sERVER STARTED');    
});