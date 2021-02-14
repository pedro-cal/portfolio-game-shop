import React from 'react';

import { Container } from './styles';

const Sorter = ({receiveSortingOption}) => {
    
    const handleSelect = (e) => {
        receiveSortingOption(e.target.value)
    }

    
    return(
        <Container>
            <p>Ordenar por: </p>
            <select name="ordenar" onChange={handleSelect}>
                <option value="name">Ordem Alfabética</option>
                <option value="price">Preço</option>
                <option value="score">Popularidade</option>
            </select>        
        </Container>
    );
}

export default Sorter;