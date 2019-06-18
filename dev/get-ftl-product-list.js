const _ = require('lodash')
const requireNoCache = require('../src/helpers/require-no-cache.js')

const getFTLProductList = () => {
  const ftlProductList = requireNoCache('../mock-data/product-list.json')
  return _.cloneDeep(ftlProductList)
}

module.exports = getFTLProductList
