import React from 'react';

import GameCard from '../GameCard/GameCard';

import { Container } from './styles';

const GamesGrid = ({products, handleUpdateCart}) => {
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
                handleUpdateCart={handleUpdateCart}
                /> 
          )}
        </Container>
    )
}

export default GamesGrid;