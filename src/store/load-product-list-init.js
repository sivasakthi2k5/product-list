import _ from 'lodash'

export default () => {
  return _.cloneDeep(window.productList)
}
