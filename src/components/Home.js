import React from 'react';
import { NavLink } from 'react-router-dom';
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
          <NavLink className="box-grill" to="/grillz">
            <h1>Grillz</h1>
          </NavLink>
        </div>  
        <div className="box-2">
          <NavLink className="box-chain" to="/chainz">
            <h1>Chainz</h1>
          </NavLink>
        </div>  
        <div className="box-3">
          <NavLink className="box-watch" to="/watchz">
            <h1>Watchz</h1>
          </NavLink>
        </div>  
        <div className="box-4">
          <NavLink className="box-pendant" to="/pendantz">
            <h1>Pendantz</h1>
          </NavLink>
        </div>  
      </div>
    </div>
  );
}

export default Home;