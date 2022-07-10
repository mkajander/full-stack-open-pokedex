const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('v2') // change this string to ensure a new version deployed
})

app.get('/something', (req, res) => {
  res.send('something ')
})

app.get('/something-else', (req, res) => {
  res.send('something-else ')
})

app.listen(PORT, () => {
  console.log('server started on port 5000')
})
