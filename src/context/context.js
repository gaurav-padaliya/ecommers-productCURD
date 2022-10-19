import React, { createContext, useReducer } from 'react'
import reducer from './reducer';
const initState = {
    product:[],
    cart:[],
    total:0
    ,ides:Date.now()
    ,category:['all']
    ,selected:['all'],
}

export const Context1 = createContext(initState);



function Context({children}) {
    const [state, dispatch] = useReducer(reducer, initState)
  return (
    <Context1.Provider value={[state, dispatch]}>
        {children}
    </Context1.Provider>
  );
}

export default Context