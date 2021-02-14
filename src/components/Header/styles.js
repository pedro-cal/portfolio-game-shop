import styled from 'styled-components';

export const Container = styled.div`
    height: 50px;
    padding: 50px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    background-color: #0046A0;

    img {
        border-radius: 10px;
        height: 70px;
    }

    h1 {
        color: white;
        font-family: 'Orbitron', sans-serif;
    }
`;

export const HeaderCartBox = styled.div`
    display: flex;
    align-items: center;
    color: white;
    border: 1px solid white;
    border-radius: 10px;

    padding: 10px;

    p {
        margin-left: 15px;
    }
`;