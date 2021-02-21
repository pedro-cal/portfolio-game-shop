import React, { createContext, useReducer } from 'react';

const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
    const [state, dispatch] = useReducer(
        rootReducer, initialState
    )

    return (
        <GlobalContext.Provider value={products}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;