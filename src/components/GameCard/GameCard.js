import React from 'react';

import { Container, ButtonAddToCart } from './styles';

const GameCard = ({id, image, name, price, handleUpdateCart }) => {
    
    const handleAddToCart = () => {
        console.log('Add to cart clicked');

        handleUpdateCart(id, 'add')
    }

    return (
        <Container>
            <img src={require(`../../assets/${image}`).default} alt={image}/>
            <h3>{name}</h3>
            <p>R$ {price}</p>
            <ButtonAddToCart onClick={handleAddToCart}>Add to Cart</ButtonAddToCart>
        </Container>
    )
}

export default GameCard;
