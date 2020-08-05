import React from 'react';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';
import '../styles/main.scss';

import GrillOne from '../components/grillComponent/imageone';
import GrillTwo from '../components/grillComponent/imagetwo';
import GrillThree from '../components/grillComponent/imagethree';
import GrillFour from '../components/grillComponent/imagefour';
import GrillFive from '../components/grillComponent/imagefive';
import GrillSix from '../components/grillComponent/imagesix';
import GrillSeven from '../components/grillComponent/imageseven';
import GrillEight from '../components/grillComponent/imageight';
import GrillNine from '../components/grillComponent/imagenine';
import GrillTen from '../components/grillComponent/imageten';
import GrillEleven from '../components/grillComponent/imageleven';
import GrillTwelve from '../components/grillComponent/imagetwelve';
import GrillThirteen from '../components/grillComponent/imagethirteen';
import GrillFourteen from '../components/grillComponent/imagefourteen';

const Home = (props) => {
  console.log(props);

  //  PASS the state inside of home component, but impossible to the NavBar component
  // const [basketNumbers, setBasketNumbers] = useState(0);

  // const addToBasket = () => {
  //   setBasketNumbers(basketNumbers + 1);
  // }

  return (
    <div className="para-container">
      <div className="image para-quote">
        <GrillOne />
        <h3 className="jewel-name">S505 INVISIBLE SET EMERALD</h3>
        <h3 className="jewel-price">$4,000,00</h3>
        <a onClick={() => props.addBasket('S505')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image para-quote">
        <GrillTwo />
        <h3 className="jewel-name">S161506-3A SKY BLUE</h3>
        <h3 className="jewel-price">$24,000,00</h3>
        <a onClick={() => props.addBasket('S161506')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image para-quote">
        <GrillThree />
        <h3 className="jewel-name">JDG73-ICE SKATE 8 PIECE</h3>
        <h3 className="jewel-price">$5,162,00</h3>
        <a onClick={() => props.addBasket('JDG73')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image para-quote">
        <GrillFour />
        <h3 className="jewel-name">JDG65-BLUE MAGIC 4 ROW</h3>
        <h3 className="jewel-price">$11,200,00</h3>
        <a onClick={() => props.addBasket('JDG65')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image para-quote">
        <GrillFive />
        <h3 className="jewel-name">S161506-1B INVISIBLE</h3>
        <h3 className="jewel-price">$6,400,00</h3>
        <a onClick={() => props.addBasket('S161506')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image para-quote">
        <GrillSix />
        <h3 className="jewel-name">S2530032-A 16 GOLD TEETH</h3>
        <h3 className="jewel-price">$6,000,00</h3>
        <a onClick={() => props.addBasket('S2530032')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image para-quote">
        <GrillSeven />
        <h3 className="jewel-name">S105B 6 PIECE INVISIBLE</h3>
        <h3 className="jewel-price">$6,050,00</h3>
        <a onClick={() => props.addBasket('S105B')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image para-quote">
        <GrillEight />
        <h3 className="jewel-name">C1532-1 16 TEETH PRONG</h3>
        <h3 className="jewel-price">$4,000,00</h3>
        <a onClick={() => props.addBasket('C1532')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image para-quote">
        <GrillNine />
        <h3 className="jewel-name">JDG69-4TH 14K PRINCESS CUT</h3>
        <h3 className="jewel-price">$2,742,00</h3>
        <a onClick={() => props.addBasket('JDG69')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image para-quote">
        <GrillTen />
        <h3 className="jewel-name">JDG36</h3>
        <h3 className="jewel-price">$5,600,00</h3>
        <a onClick={() => props.addBasket('JDG36')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image para-quote">
        <GrillEleven />
        <h3 className="jewel-name">JDG32</h3>
        <h3 className="jewel-price">$7,800,00</h3>
        <a onClick={() => props.addBasket('JDG32')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image para-quote">
        <GrillTwelve />
        <h3 className="jewel-name">JD103</h3>
        <h3 className="jewel-price">$8,800,00</h3>
        <a onClick={() => props.addBasket('JD103')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image para-quote">
        <GrillThirteen />
        <h3 className="jewel-name">JD102</h3>
        <h3 className="jewel-price">$7,800,00</h3>
        <a onClick={() => props.addBasket('JD102')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image para-quote">
        <GrillFourteen />
        <h3 className="jewel-name">JD101</h3>
        <h3 className="jewel-price">$9,800,00</h3>
        <a onClick={() => props.addBasket('JD101')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
    </div>
  );
}

export default connect(null, { addBasket })(Home);