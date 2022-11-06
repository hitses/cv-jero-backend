import app from './src/app.js'
// import './database'

function init() {
  app.listen(app.get('port'))
  console.log(`Server on port ${app.get('port')}`)
}

init()
