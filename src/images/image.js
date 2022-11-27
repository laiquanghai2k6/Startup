const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const fs = require('fs')
const mime = require('mime')

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

const uploadImage = async(req,res,next)=>{
    let matches = req.body.base64image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    let response = {}
    if(matches.length !==3){
        return new Error('Invalid input string');
    }
    response.type = matches[1];
    response.data = new Buffer(matches[2],'base64');
    let decodedImg = response
    let imageBuffer = decodedImg.data;
    let type = decodedImg.type;
    let extension = mime.extension(type);
    let fileName = "image." + extension;
    try{
        fs.writeFileSync("./images/"+fileName,imageBuffer,'utf8');
        return res.send({'status':'success'});
        
    }catch(e){
        next(e)
    }
}

app.post('/upload/image',uploadImage);

app.listen(3000,()=>{
    console.log('running on 3000')
})
