import Header from './components/Header/Header';
import GamesGrid from './components/GamesGrid/GamesGrid';
import Sorter from './components/Sorter/Sorter';

import GlobalStyle from './styles/globalStyle';

import productsJSON from './data/products.json';
import { useState } from 'react';

function App() {
  const [products, setProducts] = useState(
    productsJSON.sort(
      (a,b) => a.name > b.name ? 1 : 
      a.name < b.name ? -1 : 0)
    );
  
  const [cart, setCart] = useState([]);
  
  //* receive sorting option from Sorter child component and Sort Products 
  const receiveSortingOption = (receivedOption) => {
    let sortedProducts = [...products].sort((a,b) => (
      a[receivedOption] > b[receivedOption]) ? 1 
      : ((b[receivedOption] > a[receivedOption]) ? -1 : 0));

    setProducts(sortedProducts);
  };


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
  }
  
  return (
    <>
      <Header cartLength={cart.length}></Header>

      <Sorter receiveSortingOption={receiveSortingOption} />
      
      <GamesGrid products={products} handleUpdateCart={handleUpdateCart} />

      <GlobalStyle />
    </>
  );
}

export default App;
