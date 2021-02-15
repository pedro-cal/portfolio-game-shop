import Header from './components/Header/Header';
import GamesGrid from './components/GamesGrid/GamesGrid';
import Sorter from './components/Sorter/Sorter';

import GlobalStyle from './styles/globalStyle';

import productsJSON from './data/products.json';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState(productsJSON);
  const [sortingOption, setSortingOption] = useState('unselected');

  const [cart, setCart] = useState([]);
  
  //* receive sorting option from Sorter child component 
  const receiveSortingOption = (receivedOption) => {
    setSortingOption(receivedOption);
  };

  useEffect(() => {
    // let sortedProducts = products.sort((a, b) => a[sortingOption] - b[sortingOption]);
    let sortedProducts = products.sort((a,b) => (a[sortingOption] > b[sortingOption]) ? 1 : ((b[sortingOption] > a[sortingOption]) ? -1 : 0));
    setProducts(sortedProducts);
    console.log('Sorted Products: ',sortedProducts)
    console.log('Products line below setProducts: ',products)
  }, [sortingOption, products]);


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
      <p>Order by: {sortingOption}</p>
      
      <GamesGrid sortingOption={sortingOption} products={products} handleUpdateCart={handleUpdateCart} />

      <GlobalStyle />
    </>
  );
}

export default App;
