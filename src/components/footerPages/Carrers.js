import React from 'react';
import PageTitle from '../pageTitle';

const Carrers = () => {
  return (
    <div className="footer-pages-container">
      <PageTitle title='Carrers' />
      <div className="footer-pages-bio">
        <div className="footer-pages-header">
          <h4>Integer vel nibh sit amet turpis vulputate aliquet</h4>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec eros tellus, scelerisque nec, rhoncus eget, laoreet sit amet, nunc. Ut sit amet turpis. In est arcu, sollicitudin eu, vehicula venenatis, tempor vitae, est. Praesent vitae dui. Morbi id tellus. Cum sociis non erat. Suspendisse fermentum posuere lectus. Fusce vulputate nibh egestas orci. Aliquam lectus. Morbi eget dolor ullamcorper massa pellentesque sagittis.
          </p>
        </div>
      </div>
      <div className="footer-pages-button">
        <a href="/">
          <p>Continue</p>

        </a>
      </div>
    </div>
  )
}

export default Carrers;