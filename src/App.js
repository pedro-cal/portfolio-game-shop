import Header from './components/Header/Header';
import GameCard from './components/GameCard/GameCard';
import GamesGrid from './components/GamesGrid/GamesGrid';

import GlobalStyle from './styles/globalStyle';

import products from './data/products.json';

function App() {
  
  return (
    <>
      <Header></Header>
      
      <GamesGrid>
        {products.map(product =>
            <GameCard 
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            score={product.score}
            /> 
          )}
      </GamesGrid>

      <GlobalStyle />
    </>
  );
}

export default App;
