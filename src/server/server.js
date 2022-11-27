var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var multer = require('multer')
// app.set("view engine","ejs")
var ImageModel = require('./image-model')
app.use(bodyParser.json({type:'application/json',limit:'7000kb'}));
app.use(bodyParser.urlencoded({extended:true}))
const Storage = multer.diskStorage({
    destination: "uploads",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const upload = multer({
    storage:Storage
}).single('testImage')
app.post('/upload',(req,res)=>{
    upload(req,res,(err)=>{
        if(err) {console.log(err)}
        else{
            const newImage = new ImageModel({
                image:{
                    data:req.file.filename,
                    contentType:'image/jpg'
                }
            })
            

            newImage.save()
            .then(()=>res.send('successfully uploaded'))
            .catch(err=>console.log(err))
        }
    })

})

var connectionAuth = mysql.createConnection({
    host:'localhost',
    port:'3325',
    user:'root',
    password:'',
    database:'auth'
})
var connectionPost = mysql.createConnection({
    host:'localhost',
    port:'3325',
    user:'root',
    password:'',
    database:'post'
})

var connectionStudy = mysql.createConnection({
    host:'localhost',
    port:'3325',
    user:'root',
    password:'',
    database:'study'
})

var server = app.listen(3000,function(){
    var host = server.address().address
    var port = server.address.port
})
connectionPost.connect(function(e){
    if(e) console.log(e)
    else console.log('Connected Post')
})

connectionAuth.connect(function(e){
    if(e) console.log(e);
    else console.log('Connected Auth')

})
connectionStudy.connect((e)=>{
    if(e) console.log(e)
    else console.log('Connect Study')
})

app.get('/auth',function(req,res){
    connectionAuth.query('select * from userauth',function(e,rows,fields){
        if(e) console.log(e)
        else {
            res.send(rows)
        }
    })
})

app.post('/data',(req,res)=>{
    console.log("req.body",req.body);
    var data = {tai_khoan:req.body.tai_khoan,mat_khau:req.body.mat_khau}
    var sql = 'insert into userauth set ?';
    connectionAuth.query(sql,data,(err,kq)=>{
        if(err) console.log(err)
        else {
            console.log(kq)
            res.send({
                status:"them thanh cong",
                no:null,
                tai_khoan:req.body.tai_khoan,
                mat_khau:req.body.mat_khau

            })

        }
    })
})

app.get('/post',function(req,res){
    connectionPost.query('select * from posts',function(e,rows,fields){
        if(e) console.log(e)
        else {
            console.log( rows[1])
            res.send(rows)
        }
    })
})
app.get('/post/comment',function(req,res){
    connectionPost.query('select * from comments',function(e,rows,fields){
        if(e) console.log(e)
        else {
            console.log( rows[1])
            res.send(rows)
        }
    })
})

app.post('/createPost',(req,res)=>{
    var data = {
        created:req.body.created,
        caption:req.body.caption,
        likes:req.body.likes,
        image:req.body.image      
    }
    var sql = 'insert into posts set ?';
    connectionPost.query(sql,data,(err,kq)=>{
        if(err) console.log(err)
        else {
            console.log(kq)
            res.send({
                status:"them thanh cong",
                no:null,    
            })

        }
    })
})
app.post('/createQuiz',(req,res)=>{
    var data = {
        quizImage:req.body.quizImage,
        quizText:req.body.quizText,
        a1:req.body.a1,
        a2:req.body.a2,
        a3:req.body.a3,
        a4:req.body.a4,
        correctA:req.body.correctA,
        courseId:req.body.courseId,
    }
    var sql = 'insert into quiz set ?';
    connectionStudy.query(sql,data,(err,kq)=>{
        if(err) console.log(err)
        else {
            console.log(kq)
            res.send({
                status:"them thanh cong",
                no:null,    
            })

        }
    })
})
app.post('/createCourse',(req,res)=>{
    var data = {
        courseName:req.body.courseName,
        created:req.body.created,
        classes:req.body.classes,
        subjectId:req.body.subjectId
    }
    var sql = 'insert into course set ?';
    connectionStudy.query(sql,data,(err,kq)=>{
        if(err) console.log(err)
        else {
            console.log(kq)
            res.send({
                status:"them thanh cong",
                no:null,    
            })

        }
    })
})


app.post("/updateComment",(req,res)=>{
    var data ={
     content : req.body.content,
     userId : req.body.userId,
     postId : req.body.postId
    }
    var sql = 'insert into comments set ?';

    connectionPost.query(sql,data,(e,r)=>{
        if(e){
            console.log("updateCMT false:",e)
        }else{
            console.log("updateCMT success")
        }
    })
})
app.post("/updateLike",(req,res)=>{
    const data=  [
        req.body.likes,
        req.body.postId,
    ]
    

   
    var sql = 'UPDATE posts SET likes=? WHERE posts.postId=?';

    connectionPost.query(sql,data,(e,r)=>{
        if(e){
            console.log("updateLike false:",e)
        }else{
            console.log("updateLike success")
        }
    })
})
app.post("/updateProfile",(req,res)=>{
    const data=  [
        req.body.name,
        req.body.phone,
        req.body.live,
        req.body.school,
        req.body.subject,
        req.body.id
    ]
    

   
    var sql = 'UPDATE userauth SET name=?,phone=?,live=?,school=?,subject=? WHERE userauth.id=?';

    connectionAuth.query(sql,data,(e,r)=>{
        if(e){
            console.log("updateProfile false:",e)
        }else{
            console.log("updateProfile success")
        }
    })
})
app.post("/updateImageProfile",(req,res)=>{
    const data=  [
        req.body.image,
        req.body.id
      
    ]

    var sql = 'UPDATE userauth SET image=? WHERE userauth.id=?';

    connectionAuth.query(sql,data,(e,r)=>{
        if(e){
            console.log("updateProfile false:",e)
        }else{
            console.log("updateProfile success")
        }
    })
})

app.get("/subject",(req,res)=>{
    connectionStudy.query('select * from subject',(e,rows,field)=>{
        if(e) console.log(e)
        else {
            console.log("subjectAccess")
            res.send(rows)
        }
    })
})

app.get("/course",(req,res)=>{
    connectionStudy.query('select * from course',(e,rows,field)=>{
        if(e) console.log(e)
        else {
            console.log("courseAccess")
            res.send(rows)
        }
    })
})

app.get("/quiz",(req,res)=>{
    connectionStudy.query('select * from quiz',(e,rows,field)=>{
        if(e) console.log(e)
        else {
            console.log("quizAccess")
            res.send(rows)
        }
    })
})

app.post("/updateRate",(req,res)=>{
    const data=  [
        req.body.totalLearned,
        req.body.totalRateScore,
        req.body.id,
    ]
    var sql = 'UPDATE course SET totalLearned=?,totalRateScore=? WHERE course.courseId=?';
    connectionStudy.query(sql,data,(e,r)=>{
        if(e){
            console.log("updateProfile false:",e)
        }else{
            console.log("updateProfile success")
        }
    })
})

app.post("/updateScore",(req,res)=>{
    const data = [
        req.body.score,
        req.body.id
    ]
    var sql = 'UPDATE userauth SET score=? WHERE userauth.id=?';
    connectionAuth.query(sql,data,(e,r)=>{
        if(e){
            console.log("updateScore false:",e)
        }else{
            console.log("updateScore success")
        }
    })
})

