import Immutable from 'immutable'
import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { getProductList } from 'ducks/product-list'
import { formatPrice } from 'helpers/utility'
import { Carousel } from 'react-responsive-carousel'
import './product-list.scss'

export class ProductList extends PureComponent {
  static propTypes = {
    productList: ImmutablePropTypes.list
  }

  state = {
    showProductDetailsCarosuelImgs: false,
    selectedProduct: []
  }

  render () {
    const { productList } = this.props
    const { showProductDetailsCarosuelImgs } = this.state
    return (
      <Fragment>
        { showProductDetailsCarosuelImgs && <div className="product-carosuel">{ this.renderProductDetailedCarosuelImgs() }</div> }
        <div className="product-list">
          <div className="container">
            <div className="row">
              { productList.map((product, index) => {
                let productImg = product.getIn(['hero', 'href'], '')
                const productName = product.get('name', '')
                const productHighPrice = formatPrice(product.getIn(['priceRange', 'selling', 'high'], ''))
                const productLowPrice = formatPrice(product.getIn(['priceRange', 'selling', 'low'], ''))
                const productDetailedCarosuelImgs = product.get('images', Immutable.List())

                return (
                  <div className="col-lg-4 col-sm-12 product-list__product-image-container" key={ index }>
                    <div className="product-list__product-image-block">
                      <a href="#" onClick={ () => this.setSelectedProduct(true, productDetailedCarosuelImgs) }><img className="product-list__product-image" src={ productImg } alt="Product Image"></img></a>
                      <div className="product-list__product-name"><span>{ productName }</span></div>
                      <div className="product-list__product-price"><span>{ productLowPrice } - { productHighPrice }</span></div>
                    </div>
                  </div>
                )
              }) }
            </div>
          </div>
        </div>
      </Fragment>
    )
  }

  setSelectedProduct (showProductDetailsCarosuelImgs, productDetailedCarosuelImgs) {
    this.setState({
      showProductDetailsCarosuelImgs,
      selectedProduct: productDetailedCarosuelImgs
    })
  }

  renderProductDetailedCarosuelImgs () {
    const { selectedProduct } = this.state
    return (<Fragment>
      <Carousel showThumbs={ false } showStatus={ false }>
        { selectedProduct.map((product, index) => {
          const productImgHref = product.get('href', '')
          return (<div key={ index } className="product-carosuel__carosuel-block">
            <img src={ productImgHref } alt="Product Detailed Image" />
          </div>)
        })}
      </Carousel>
      <div className="product-carosuel__carosuel-close">
        <a href="#" onClick={ () => this.setSelectedProduct(false, []) }>X</a>
      </div>
    </Fragment>)
  }
}
const mapStateToProps = state => {
  return {
    productList: getProductList(state)
  }
}
export default connect(mapStateToProps)(ProductList)
