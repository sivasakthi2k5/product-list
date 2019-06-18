const Freemarker = require('freemarker.js')
const path = require('path')
const getFTLProductList = require('./get-ftl-product-list')

module.exports = (req, res) => {
  const freemarker = new Freemarker({
    viewRoot: path.join(__dirname, '../freemarker')
  })

  const data = {
    productList: getFTLProductList(),
    environment: 'localEnvironment'
  }

  for (const property in data) {
    if (!['environment'].includes(property)) {
      data[property] = JSON.stringify(data[property])
    }
  }

  const renderedFTL = freemarker.renderSync('product-list.ftl', data)

  res.status(200).send(renderedFTL)
}
