import express from 'express'
import indexRoutes from './routes/index.routes'
import fileUpload from 'express-fileupload'
import imagesRoutes from './routes/images.routes'
import config from './config'

const app = express()

app.set('port', process.env.PORT || 4000)

app.use(fileUpload({
    tempFileDir: '/temp'
}))

app.use(indexRoutes)
app.use(imagesRoutes)

app.listen(app.get('port'))

console.log('server on port ', app.get('port'))