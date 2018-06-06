let express =require('express');
let fs = require('fs');
let app =express();
var date = new Date();
var Hour = date.getTimezoneOffset()/60 ;

var minutes = date.getMinutes();
var dat = date.getDate();


let formidable = require('express-formidable');
app.use(formidable({uploadDir:'./public'}));
app.listen(3000,() =>console.log('server da bat'));
app.post('/',(req,res)=>{
 fs.rename(req.files.avatar.path , 'OneDaNang'+ dat+'d' +Hour +'h'+ minutes+ 'm'+ '.jpg',err =>{
     res.send('khong thanh cong')
 })
});