import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class PaymentForm extends Component {
  render() {
    return (
      <div className="form-container">
        <form>
          <div className="form-grid-container">
            <div className="form-input">
              <p>Name on Credit Card</p>
              <input
                className="shipping-form__name" 
                type="email" 
                title="Name" 
                placeholder="Name" 
                name="email" 
              />
            </div>
            <div className="form-input">
              <p>Credit Card Number</p>
              <input
                className="shipping-form__card" 
                type="card" 
                title="card" 
                placeholder="____-____-____-____" 
                name="card" 
              />
            </div>
          <div className="address-flex-container">
            <div>
              <p>Expiration date</p>
              <input
                className="shipping-form__state" 
                type="expiration" 
                title="Expiration" 
                placeholder="Expiration" 
                name="expiration" 
              />
            </div>
            <div>
              <p>CCV</p>
              <input
                className="shipping-form__zipcode" 
                type="ccv" 
                title="CCV" 
                placeholder="CCV" 
                name="ccv" 
              />
             </div>
          </div>
          </div>
        </form>
        <NavLink to="/shipping">
          <div className="back-button">
            Back
          </div>
        </NavLink>
      </div>
    )
  }
}
