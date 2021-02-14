import React from 'react';
import { FiShoppingCart as CartIcon } from 'react-icons/fi';

import { Container, HeaderCartBox } from './styles';

const Header = ({ cartLength }) => {
    const logoUrl = 'https://i.pinimg.com/originals/72/3d/0a/723d0af616b1fe7d5c7e56a3532be3cd.png';
    return(
        <Container>
            <img src={logoUrl} alt=""/>
            <h1>Game Shop</h1>
            <HeaderCartBox>
                <CartIcon size={20} />
                <p>{cartLength} Items</p>
            </HeaderCartBox>
        </Container>
    )
}

export default Header;