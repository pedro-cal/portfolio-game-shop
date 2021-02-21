import React from 'react';
import { connect } from 'react-redux';

import GameCard from '../GameCard/GameCard';

import { Container } from './styles';

const GamesGrid = ({products}) => {
    return (
        <Container>
            {products.map(product =>
                <GameCard 
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                score={product.score}                
                /> 
          )}
        </Container>
    )
}

const mapStateToProps = (state) => ({
    products: [...state.products],
  });
  
export default connect(mapStateToProps)(GamesGrid);

