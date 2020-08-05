import React, { Component } from 'react';
import PageTitle from './pageTitle';
import ShippingForm from './ShippingForm';

export default class Shipping extends Component {
  render() {
    return (
      <div>
        <PageTitle title='Shipping Address' />
        <ShippingForm />
      </div>
    )
  }
}
