import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Cart({basketProps}) {
  // console.log(basketProps);

  let productsInCart = [];
 
  Object.keys(basketProps.products).forEach( function(item) {
    // console.log(item);
    // console.log(basketProps.products[item].inCart);
    if(basketProps.products[item].inCart) {
      productsInCart.push(basketProps.products[item])
    }
    // console.log(productsInCart);
  })

  const productImages = [];

  productsInCart = productsInCart.map((product, index) => {
    // We have access to this name, price, inCart using the map() statement
    // console.log("My product is ");
    // console.log(product);
    // that what were doing in down here
    return (
      // Frangment is just a placeholder rather using a div
      <Fragment>
        <div className="test-container">
          <div className="test">
            <div className="product">
              <ion-icon name="close-circle"></ion-icon>
              <img src={productImages[index]} alt="productImages" />
              <span className="sm-hide">{product.name}</span>
            </div>
            <div className="price sm-hide">${product.price},00</div>
            <div className="quantity">
              <ion-icon className="decrease" name="arrow-back-circle-outline"></ion-icon>
                <span>{product.numbers}</span>
              <ion-icon className="increase" name="arrow-forward-circle-outline"></ion-icon>
            </div>
            <div className="total-price">${product.numbers * product.price},00</div>
          </div>
        </div>
      </Fragment>
    );
  });

  return (
    <div className="product-containers">
      <div className="product-header">
        <div className="product-title">PRODUCT</div>
        <div className="price">PRICE</div>
        <div className="quantity">QUANTITY</div>
        <div className="total"><h4>TOTAL</h4></div>
      </div> 
      <div className="products">
        {productsInCart}
      </div>
      <div className="basketTotalContainer">
        <h4 className="basketTotalTitle">{basketProps.name}</h4>
        <h3>Grand Total: </h3>
        <h4 className="basketTotal">${basketProps.cartCost},00</h4>
      </div>
      <NavLink to="/shipping">
        <div className="use-button">
          <p>Continue to Payment</p>
        </div>
      </NavLink>
    </div>
  )
}

const mapStateToProps = state => ({
  basketProps: state.basketState
})

export default connect(mapStateToProps)(Cart);
