import React from 'react'
import { Route } from 'react-router'
import ProductList from 'components/product-list/product-list'

export default (store) => {
  return (
    <Route path="/" component={ ProductList }></Route>
  )
}
