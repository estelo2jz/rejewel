import React from 'react';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';
import '../styles/main.scss';

import Pendantz1 from '../images/pendantz/pendantz1.jpg';
import Pendantz2 from '../images/pendantz/pendantz2.jpg';
import Pendantz3 from '../images/pendantz/pendantz3.jpg';
import Pendantz4 from '../images/pendantz/pendantz4.jpg';
import Pendantz5 from '../images/pendantz/pendantz5.jpg';
import Pendantz6 from '../images/pendantz/pendantz6.jpg';
import Pendantz7 from '../images/pendantz/pendantz7.jpg';
import Pendantz8 from '../images/pendantz/pendantz8.jpg';
import Pendantz9 from '../images/pendantz/pendantz9.jpg';
import Pendantz10 from '../images/pendantz/pendantz10.jpg';
import Pendantz11 from '../images/pendantz/pendantz11.jpg';
import Pendantz12 from '../images/pendantz/pendantz12.jpg';
import Pendantz13 from '../images/pendantz/pendantz13.jpg';
import Pendantz14 from '../images/pendantz/pendantz14.jpg';
import Pendantz15 from '../images/pendantz/pendantz15.jpg';

const Pendantz = (props) => {
  console.log(props);
  return (
    <div className="para-container">
      <div className="image">
        <div className="image-padd">
          <img src={Pendantz1} alt="Jesus Of Nazareth Pendant 14k Yellow Gold" />
        </div>
        <h3 className="jewel-name">Jesus Of Nazareth Pendant 14k Yellow Gold</h3>
        <h3 className="jewel-price">$25,000,00</h3>
        <a onClick={() => props.addBasket('Nazareth')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <div className="image-padd">
          <img src={Pendantz2} alt="Striped Mane Lion Pendant - 14k Yellow Gold" />
        </div>
        <h3 className="jewel-name">Striped Mane Lion Pendant - 14k Yellow Gold</h3>
        <h3 className="jewel-price">$20,000,00</h3>
        <a onClick={() => props.addBasket('Lion')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <div className="image-padd">
          <img src={Pendantz3} alt="Jesus Piece Pendant 14k Yellow Gold " />
        </div>
        <h3 className="jewel-name">Jesus Piece Pendant 14k Yellow Gold</h3>
        <h3 className="jewel-price">$16,000,00</h3>
        <a onClick={() => props.addBasket('JesusYellow')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <div className="image-padd">
          <img src={Pendantz4} alt="Jesus Piece Pendant 14k Rose Gold " />
        </div>
        <h3 className="jewel-name">Jesus Piece Pendant 14k Rose Gold</h3>
        <h3 className="jewel-price">$16,000,00</h3>
        <a onClick={() => props.addBasket('JesusRose')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <div className="image-padd">
          <img src={Pendantz5} alt="Jesus Piece Lg Pendant 14k Yellow Gold" />
        </div>
        <h3 className="jewel-name">Jesus Piece Lg Pendant 14k Yellow Gold</h3>
        <h3 className="jewel-price">$16,000,00</h3>
        <a onClick={() => props.addBasket('JesusYellowTwo')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <div className="image-padd">
          <img src={Pendantz6} alt="Ghost Pendant 14k White Gold" />
        </div>
        <h3 className="jewel-name">Ghost Pendant 14k White Gold</h3>
        <h3 className="jewel-price">$15,000,00</h3>
        <a onClick={() => props.addBasket('Ghost')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <div className="image-padd">
          <img src={Pendantz7} alt="Hamsa Pendant 14k Yellow Gold" />
        </div>
        <h3 className="jewel-name">Hamsa Pendant 14k Yellow Gold</h3>
        <h3 className="jewel-price">$15,000,00</h3>
        <a onClick={() => props.addBasket('Hamsa')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <div className="image-padd">
          <img src={Pendantz8} alt="Full Body Black Panther Pendant 14k White Gold" />
        </div>
        <h3 className="jewel-name">Full Body Black Panther Pendant 14k White Gold</h3>
        <h3 className="jewel-price">$12,500,00</h3>
        <a onClick={() => props.addBasket('Panther')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <div className="image-padd">
          <img src={Pendantz9} alt="Prayer Hands Pendant 14k Yellow Gold" />
        </div>
        <h3 className="jewel-name">Prayer Hands Pendant 14k Yellow Gold</h3>
        <h3 className="jewel-price">$12,000,00</h3>
        <a onClick={() => props.addBasket('Hands')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <div className="image-padd">
          <img src={Pendantz10} alt="Snowboarder Pendant 14k White Gold" />
        </div>
        <h3 className="jewel-name">Snowboarder Pendant 14k White Gold</h3>
        <h3 className="jewel-price">$14,000,00</h3>
        <a onClick={() => props.addBasket('Snowboarder')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <div className="image-padd">
          <img src={Pendantz11} alt="Diamond Evil Cat Pendant - 14k White Gold" />
        </div>
        <h3 className="jewel-name">Diamond Evil Cat Pendant - 14k White Gold</h3>
        <h3 className="jewel-price">$12,000,00</h3>
        <a onClick={() => props.addBasket('Evil')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <div className="image-padd">
          <img src={Pendantz12} alt="Grizzly Bear Pendant 14k White Gold" />
        </div>
        <h3 className="jewel-name">Grizzly Bear Pendant 14k White Gold</h3>
        <h3 className="jewel-price">$15,000,00</h3>
        <a onClick={() => props.addBasket('Bear')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <div className="image-padd">
          <img src={Pendantz13} alt="Africa Pendant 14k Yellow Gold" />
        </div>
        <h3 className="jewel-name">Africa Pendant 14k Yellow Gold</h3>
        <h3 className="jewel-price">$11,000,00</h3>
        <a onClick={() => props.addBasket('Africa')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <div className="image-padd">
          <img src={Pendantz14} alt="King Crown Lion Pendant 14k White Gold" />
        </div>
        <h3 className="jewel-name">King Crown Lion Pendant 14k White Gold</h3>
        <h3 className="jewel-price">$13,000,00</h3>
        <a onClick={() => props.addBasket('Crown')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
      <div className="image">
        <div className="image-padd">
          <img src={Pendantz15} alt="Bubbly 3 Row Cross Pendant 14k Yellow Gold" />
        </div>
        <h3 className="jewel-name">Bubbly 3 Row Cross Pendant 14k Yellow Gold</h3>
        <h3 className="jewel-price">$17,000,00</h3>
        <a onClick={() => props.addBasket('Bubbly')} className="addToCart cart1" href="/#">
          <button className="button">Add to Cart</button>
        </a>
      </div>
    </div>
  );
}

export default connect(null, { addBasket })(Pendantz);