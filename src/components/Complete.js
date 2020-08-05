import React from 'react';
import PageTitle from './pageTitle';
import { NavLink } from 'react-router-dom';

const Complete = () => {
  return (
    <div className="complete-container">
      <PageTitle title='Thank you for shopping with us today!' />
      <div className="complete-summary">
        <NavLink to="/">
          <div className="complete-button">
            <p>Continue Shopping</p>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Complete;