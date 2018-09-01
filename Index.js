var express= require('express');
var app=express();

app.get('/',function(req,res){
res.sendFile(__dirname+'/Index.html')
});
var port=process.env.PORT || 8080

var server=app.listen(port,function(REQ,RES){
console.log('sERVER STARTED');    
});
