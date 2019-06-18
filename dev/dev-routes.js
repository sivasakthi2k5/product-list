const renderFtl = require('./render-ftl')

module.exports = app => {
  app.route('/').get((req, res) => renderFtl(req, res))
  app.get('/js/lodash.min.js', (req, res) => {
    res.sendFile('lodash/lodash.min.js', {
      root: './node_modules/'
    })
  })
  app.get('/js/react.development.js', (req, res) => {
    res.sendFile('react/umd/react.development.js', {
      root: './node_modules/'
    })
  })
  app.get('/js/react-dom.development.js', (req, res) => {
    res.sendFile('react-dom/umd/react-dom.development.js', {
      root: './node_modules/'
    })
  })
  app.get('/js/react.min.js', (req, res) => {
    res.sendFile('react/umd/react.production.min.js', {
      root: './node_modules/'
    })
  })
  app.get('/js/react-dom.min.js', (req, res) => {
    res.sendFile('react-dom/umd/react-dom.production.min.js', {
      root: './node_modules/'
    })
  })
  app.get('/js/redux.min.js', (req, res) => {
    res.sendFile('redux/dist/redux.min.js', {
      root: './node_modules/'
    })
  })
  app.get('/js/polyfill.min.js', (req, res) => {
    res.sendFile('babel-polyfill/dist/polyfill.min.js', {
      root: './node_modules/'
    })
  })
  app.get('/js/react-redux.min.js', (req, res) => {
    res.sendFile('react-redux/dist/react-redux.min.js', {
      root: './node_modules/'
    })
  })
  app.get('/js/redux-thunk.min.js', (req, res) => {
    res.sendFile('redux-thunk/dist/redux-thunk.min.js', {
      root: './node_modules/'
    })
  })
  app.get('/js/prop-types.min.js', (req, res) => {
    res.sendFile('prop-types/prop-types.min.js', {
      root: './node_modules/'
    })
  })
  app.get('/css/bootstrap.min.css', (req, res) => {
    res.sendFile('bootstrap/dist/css/bootstrap.min.css', {
      root: './node_modules/'
    })
  })
  app.get('/css/carousel.min.css', (req, res) => {
    res.sendFile('react-responsive-carousel/lib/styles/carousel.min.css', {
      root: './node_modules/'
    })
  })
}
