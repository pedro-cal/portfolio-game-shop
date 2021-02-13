import React from 'react';

import { Container } from './styles';

const GameCard = ({image, name, price, score}) => {
    return (
        <Container>
            <img src={require(`../../assets/${image}`).default} alt={image}/>
            <h2>{name}</h2>
            <p>{price}</p>
            <p>{score}</p>
        </Container>
    )
}

export default GameCard;
