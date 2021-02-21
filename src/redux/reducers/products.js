import productsJSON from '../../data/products.json';

const initialState = {products: productsJSON};

//CONSTANTS
const GET_PRODUCTS = 'GET_PRODUCTS';
const SORT_BY_NAME = 'SORT_BY_NAME';
const SORT_BY_PRICE = 'SORT_BY_PRICE';
const SORT_BY_SCORE = 'SORT_BY_SCORE';

const products = (state = initialState, action) => {
    const previousProducts = state.products;

    switch (action.type) {
        case GET_PRODUCTS:
            return state;
        
        case SORT_BY_NAME:
            let productsByName = previousProducts.sort((a,b) => 
                a.name > b.name ? 1 
                : a.name === b.name ? 0 : -1); 
            return {
                ...state,
                products: productsByName,                
            };
        
        case SORT_BY_PRICE:
            let productsByPrice = previousProducts.sort((a,b) => 
                a.price > b.price ? 1 
                : a.price === b.price ? 0 : -1);
            return {
                ...state,
                products: productsByPrice,
            };
        
        case SORT_BY_SCORE:
            let productsByScore = previousProducts.sort((a,b) => 
                a.price > b.price ? 1 
                : a.price === b.price ? 0 : -1);
            return {
                ...state,
                products: productsByScore,
            };    
        
        default:
            return state;
    }
}

export default products;