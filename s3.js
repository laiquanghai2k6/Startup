const S3 = require('aws-sdk/clients/s3')
require('dotenv').config()
const AWS = require('aws-sdk');
const fs = require('fs')
const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const s3 = new S3({
    region
})

// AWS.config.update({
//     region: region,
//     apiVersion: 'latest',
  
// })

function uploadFile(file){
    const fileStream = fs.createReadStream(file.path)
    const uploadParams = {
        Bucket:bucketName,
        Body:fileStream,
        Key:file.filename
    }
    return s3.upload(uploadParams).promise()
}
exports.uploadFile = uploadFile