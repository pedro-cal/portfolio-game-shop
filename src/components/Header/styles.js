import styled from 'styled-components';

export const Container = styled.div`
    height: 50px;
    padding: 50px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    background-color: dodgerblue;

    img {
        border-radius: 10px;
        height: 70px;
    }
`;

export const HeaderCartBox = styled.div`
    display: flex;
    align-items: center;
    color: steelblue;
    background-color: white;
    border: 1px solid steelblue;
    border-radius: 10px;

    padding: 10px;

    p {
        margin-right: 15px;
    }
`;