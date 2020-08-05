import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class ShippingForm extends Component {
  render() {
    return (
      <div className="form-container">
        <form>
          <div className="form-grid-container">
            <div className="form-input">
              <p>Name</p>
              <input
                className="shipping-form__name" 
                type="email" 
                title="Name" 
                placeholder="Name" 
                name="email" 
              />
            </div>
            <div className="form-input">
              <p>Address</p>
              <input
                className="shipping-form__address" 
                type="address" 
                title="Address" 
                placeholder="Address" 
                name="address" 
              />
            </div>
            <div className="form-input">
              <p>City</p>
              <input
                className="shipping-form__city" 
                type="city" 
                title="City" 
                placeholder="City" 
                name="city" 
              />
            </div>
          </div>

          <div className="address-flex-container">
            <div>
              <p>State</p>
              <input
                className="shipping-form__state" 
                type="state" 
                title="State" 
                placeholder="State" 
                name="state" 
              />
            </div>
            <div>
              <p>Zipcode</p>
              <input
                className="shipping-form__zipcode" 
                type="zipcode" 
                title="Zipcode" 
                placeholder="Zipcode" 
                name="zipcode" 
              />
          </div>
          </div>
        </form>
        <div className="back-container">
          <NavLink to="/cart">
            <div className="back-button">
              Back
            </div>
          </NavLink>
          <NavLink to="/payment">
            <div className="use-button">
              Use This Address
            </div>
          </NavLink>
        </div>
      </div>
    )
  }
}
