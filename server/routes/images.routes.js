import { Router } from "express";
import AWS from 'aws-sdk'
import config from '../config'

const router = Router()

const spaces = new AWS.Endpoint(config.EndPoint)

const s3 = new AWS.S3({
    endpoint: spaces
})

router.post('/api/images/upload', async (req, res) => {
    // subir una nueva imagen
    const {image} = req.files

    try{
        const upload = await s3.putObject({
            ACL: 'public-read',
            Bucket: config.BucketName,
            Body: image.data,
            Key: image.name
        }).promise()
        console.log(upload);
        return res.send('ok')
    } catch (error){
        console.log(error);
        return res.send(error)
    }
})

router.get('/api/images', async (req, res) => {
    // listar todas las images

    return res.json('ok')
})

router.get('/api/images/:id', async (req, res) => {
    // obtener una sola imagen
})

router.delete('/api/images/:id', async (req, res) => {
    // eliminar una imagen
})

export default router