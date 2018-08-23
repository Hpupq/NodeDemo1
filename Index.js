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
var port=process.env.PORT || 8080

var server=app.listen(port,function(REQ,RES){
console.log('sERVER STARTED');    
});