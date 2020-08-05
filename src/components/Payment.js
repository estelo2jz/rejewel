import React, { Component } from 'react';
import PageTitle from './pageTitle';
import PaymentForm from './PaymentForm';

export default class Payment extends Component {
  render() {
    return (
      <div>
        <PageTitle title='Payment Information' />
        <PaymentForm />
      </div>
    )
  }
}
