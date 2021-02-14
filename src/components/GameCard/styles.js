import styled from 'styled-components';

export const Container = styled.div`
    margin: 10px;
    padding: 10px 0;
    
    display: grid;
    grid-template-rows: 4fr 1fr auto auto;
    place-items: center;
    text-align: center;
    width: 200px;

    border: 3px solid steelblue;
    border-radius: 10px;

    h3 {
        /* color: midnightblue; */
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: steelblue;
        color: white;
        width: 100%;
        height: 100%;
        font-size: 17px;
        margin-top: 4px;
    }
    
    p {
        margin-top: 8px;
        font-weight: bolder;
        font-size: 18px;
    }
`;

export const ButtonAddToCart = styled.button`
    margin-top: 10px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: green;
    color: white;
    width: 80%;
`;