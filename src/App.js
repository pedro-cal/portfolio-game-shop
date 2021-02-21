// import { useState } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header/Header';
import GamesGrid from './components/GamesGrid/GamesGrid';
import Sorter from './components/Sorter/Sorter';

import GlobalStyle from './styles/globalStyle';

function App({products}) {  

  /* const [cart, setCart] = useState([]);
  
  //* update cart through callback prop 
  const handleUpdateCart = (id, operation) => {
    let currentGame = products.find(product => product.id === id);
    switch (operation) {
      case 'add':
        setCart([...cart, currentGame]);
        break;
    
      default:
        break;
    }
  } */
  
  return (
    <>
      <Header cartLength="999"></Header>

      <Sorter />
      
      <GamesGrid />

      <GlobalStyle />
    </>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(App);
