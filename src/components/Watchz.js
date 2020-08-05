import React from 'react';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';
import '../styles/main.scss';

import ImageOne from './watchComponent/imageone';
import ImageTwo from './watchComponent/imagetwo';
import ImageThree from './watchComponent/imagethree';
import ImageFour from './watchComponent/imagefour';
import ImageFive from './watchComponent/imagefived';
import ImageSix from './watchComponent/imagesix';
import ImageSeven from './watchComponent/imageseven';
import ImageEight from './watchComponent/imageeight';
import ImageNine from './watchComponent/imagenine';
import ImageTen from './watchComponent/imageten';
import ImageEleven from './watchComponent/imageeleven';
import ImageTwelve from './watchComponent/imagetwelve';
import ImageThirteen from './watchComponent/imagethirteen';
import ImageFourteen from './watchComponent/imagefourteen';
import ImageFifteen from './watchComponent/imagefifteen';
import ImageSixteen from './watchComponent/imagesixteen';
import ImageSeventeen from './watchComponent/imageseventeen';
import ImageEighteen from './watchComponent/imageighteen';
import ImageNineteen from './watchComponent/imagenineteen';

const Watchz = (props) => {
  console.log(props);

  //  PASS the state inside of home component, but impossible to the NavBar component
  // const [basketNumbers, setBasketNumbers] = useState(0);

  // const addToBasket = () => {
  //   setBasketNumbers(basketNumbers + 1);
  // }
  return (
    <div className="para-container">
      <div className="image">
        <ImageOne />
        <h3 className="jewel-name">CW0001 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$38,000,00</h3>
        <a onClick={() => props.addBasket('CW0001')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ImageTwo />
        <h3 className="jewel-name">CW0002 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$12,000,00</h3>
        <a onClick={() => props.addBasket('CW0002')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ImageThree />
        <h3 className="jewel-name">CW0003 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$27,000,00</h3>
        <a onClick={() => props.addBasket('CW0003')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ImageFour />
        <h3 className="jewel-name">CW0004 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$24,000,00</h3>
        <a onClick={() => props.addBasket('CW0004')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ImageFive />        
        <h3 className="jewel-name">CW0005 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$9,000,00</h3>
        <a onClick={() => props.addBasket('CW0005')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ImageSix />
        <h3 className="jewel-name">CW0006 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$12,000,00</h3>
        <a onClick={() => props.addBasket('CW0006')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ImageSeven />
        <h3 className="jewel-name">CW0007 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$15,000,00</h3>
        <a onClick={() => props.addBasket('CW0007')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ImageEight />
        <h3 className="jewel-name">CW0008 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$25,000,00</h3>
        <a onClick={() => props.addBasket('CW0008')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ImageNine />
        <h3 className="jewel-name">CW0009 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$9,000,00</h3>
        <a onClick={() => props.addBasket('CW0009')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ImageTen />
        <h3 className="jewel-name">CW00010 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$22,990,00</h3>
        <a onClick={() => props.addBasket('CW00010')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ImageEleven />
        <h3 className="jewel-name">CW00011 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$26,400,00</h3>
        <a onClick={() => props.addBasket('CW00011')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ImageTwelve />
        <h3 className="jewel-name">CW00012 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$22,990,00</h3>
        <a onClick={() => props.addBasket('CW00012')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ImageThirteen />
        <h3 className="jewel-name">CW00013 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$21,990,00</h3>
        <a onClick={() => props.addBasket('CW00013')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ImageFourteen />
        <h3 className="jewel-name">CW00014 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$29,990,00</h3>
        <a onClick={() => props.addBasket('CW00014')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ImageFifteen />
        <h3 className="jewel-name">CW00015 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$16,940,00</h3>
        <a onClick={() => props.addBasket('CW00015')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ImageSixteen />
        <h3 className="jewel-name">CW00016 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$16,940,00</h3>
        <a onClick={() => props.addBasket('CW00016')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ImageSeventeen />
        <h3 className="jewel-name">CW00017 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$18,000,00</h3>
        <a onClick={() => props.addBasket('CW00017')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ImageEighteen />
        <h3 className="jewel-name">CW00018 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$19,000,00</h3>
        <a onClick={() => props.addBasket('CW00018')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <ImageNineteen />
        <h3 className="jewel-name">CW00019 CUSTOM WATCH</h3>
        <h3 className="jewel-price">$20,000,00</h3>
        <a onClick={() => props.addBasket('CW00019')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
    </div>
  );
}

export default connect(null, { addBasket })(Watchz);