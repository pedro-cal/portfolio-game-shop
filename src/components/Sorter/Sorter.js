import React from 'react';
import { connect } from 'react-redux';

import { Container } from './styles';

const Sorter = ({dispatch}) => {
    
    const handleSelect = (e) => {
        console.log('sort option selected')
        dispatch({
            type: e.target.value
        });
    }

    
    return(
        <Container>
            <p>Ordenar por: </p>
            <select name="ordenar" onChange={handleSelect}>
                <option value="SORT_BY_NAME">Ordem Alfabética</option>
                <option value="SORT_BY_PRICE">Preço</option>
                <option value="SORT_BY_SCORE">Popularidade</option>
            </select>        
        </Container>
    );
}

export default connect()(Sorter);