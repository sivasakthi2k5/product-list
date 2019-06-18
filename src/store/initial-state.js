import Immutable from 'immutable'
import loadProductListInit from './load-product-list-init'

let routing = {}
const productListInit = loadProductListInit()

export default Immutable.fromJS({
  productListInit,
  routing
})
