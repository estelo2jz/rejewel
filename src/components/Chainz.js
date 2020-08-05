import React from 'react';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';
import '../styles/main.scss';

import ChainOne from '../components/chainComponent/imageone';
import ChainTwo from '../components/chainComponent/imagetwo';
import ChainThree from '../components/chainComponent/imagethree';
import ChainFour from '../components/chainComponent/imagefour';
import ChainFive from '../components/chainComponent/imagefive';
import ChainSix from '../components/chainComponent/imagesix';
import ChainSeven from '../components/chainComponent/imageseven';
import ChainEight from '../components/chainComponent/imageeight';
import ChainNine from '../components/chainComponent/imagenine';
import ChainTen from '../components/chainComponent/imageten';
import ChainEleven from '../components/chainComponent/imageleven';
import ChainTwelve from '../components/chainComponent/imagetwelve';


const Chainz = (props) => {
  console.log(props);

  //  PASS the state inside of home component, but impossible to the NavBar component
  // const [basketNumbers, setBasketNumbers] = useState(0);

  // const addToBasket = () => {
  //   setBasketNumbers(basketNumbers + 1);
  // }

  return (
    <div className="para-container">
      <div className="image">
        <ChainOne />
        <h3 className="jewel-name">JDN090517 - DIAMOND STAR CHAIN</h3>
        <h3 className="jewel-price">$9,128,00</h3>
        <a onClick={() => props.addBasket('JDN090517')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ChainTwo />
        <h3 className="jewel-name">JDN1611291 - DIAMOND CHAIN</h3>
        <h3 className="jewel-price">$12,580,00</h3>
        <a onClick={() => props.addBasket('JDN1611291')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>      
      </div>
      <div className="image">
        <ChainThree />
        <h3 className="jewel-name">JDN170119 - DIAMOND CHAIN</h3>
        <h3 className="jewel-price">$15,027,00</h3>
        <a onClick={() => props.addBasket('JDN170119')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>      
      </div>
      <div className="image">
        <ChainFour />
        <h3 className="jewel-name">JDN1701148 - BLACK DIAMOND CHAIN</h3>
        <h3 className="jewel-price">$9,600,00</h3>
        <a onClick={() => props.addBasket('JDN1701148')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>      
      </div>
      <div className="image">
        <ChainFive />
        <h3 className="jewel-name">JDN40407 - DIAMOND CHAIN</h3>
        <h3 className="jewel-price">$4,475,00</h3>
        <a onClick={() => props.addBasket('JDN40407')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>      
      </div>
      <div className="image">
        <ChainSix />
        <h3 className="jewel-name">JDN6897 - BLUE DIAMOND CHAIN</h3>
        <h3 className="jewel-price">$14,220,00</h3>
        <a onClick={() => props.addBasket('JDN6897')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>      
      </div>
      <div className="image">
        <ChainSeven />
        <h3 className="jewel-name">JDN8721 - DIAMOND CHAIN</h3>
        <h3 className="jewel-price">$15,725,00</h3>
        <a onClick={() => props.addBasket('JDN8721')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>      
      </div>
      <div className="image">
        <ChainEight />
        <h3 className="jewel-name">JDN9505 - BLUE DIAMOND CHAIN</h3>
        <h3 className="jewel-price">$12,920,00</h3>
        <a onClick={() => props.addBasket('JDN9505')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>     
       </div>
      <div className="image">
         <ChainNine />
        <h3 className="jewel-name">JDN40206 - DIAMOND CHAIN</h3>
        <h3 className="jewel-price">$8,940,00</h3>
        <a onClick={() => props.addBasket('JDN40206')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>      
      </div>
      <div className="image">
        <ChainTen />
        <h3 className="jewel-name">N15116 - DIAMOND CHAIN</h3>
        <h3 className="jewel-price">$4,750,00</h3>
        <a onClick={() => props.addBasket('N15116')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>      
      </div>
      <div className="image">
        <ChainEleven />
        <h3 className="jewel-name">N170530 - LADY DIAMOND CHAIN</h3>
        <h3 className="jewel-price">$8,544,00</h3>
        <a onClick={() => props.addBasket('N170530')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>      
      </div>
      <div className="image">
        <ChainTwelve />
        <h3 className="jewel-name">N170703 - DIAMOND CHAIN</h3>
        <h3 className="jewel-price">$12,580,00</h3>
        <a onClick={() => props.addBasket('N170703')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>      
      </div>
    </div>
  );
}

export default connect(null, { addBasket })(Chainz);