import React from 'react';
import '../styles/main.scss';

const Home = (props) => {
  console.log(props);

  //  PASS the state inside of home component, but impossible to the NavBar component
  // const [basketNumbers, setBasketNumbers] = useState(0);

  // const addToBasket = () => {
  //   setBasketNumbers(basketNumbers + 1);
  // }


  return (
    <div className="">
      <div className="home-container">
        <div className="box-1">
          <a className="box-grill" href="/grillz">
            <h1>Grillz</h1>
          </a>
        </div>  
        <div className="box-2">
          <a className="box-chain" href="/chainz">
            <h1>Chainz</h1>
          </a>
        </div>  
        <div className="box-3">
          <a className="box-watch" href="/watchz">
            <h1>Watchz</h1>
          </a>
        </div>  
        <div className="box-4">
          <a className="box-pendant" href="/pendantz">
            <h1>Pendantz</h1>
          </a>
        </div>  
      </div>
    </div>
  );
}

export default Home;