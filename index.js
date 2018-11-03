const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const kittensRoutes = require('./Routes/kittensRoutes')
app.use('/kittens', kittensRoutes)

app.use((err, req, res, next) => {
  console.error(err)
  const status = err.status || 500
  res.status(status).json({
    error: err
  })
})

app.use((req, res, next) => {
  res.status(404).json({
    error: {message: 'Not found'}
  })
})

const listener = () => console.log(`Listening on port ${port}`)
app.listen(port, listener)

module.exports = app
