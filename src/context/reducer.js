import React from 'react'
// import { act } from 'react-dom/test-utils';

const reducer = (state,action) => {
    switch (action.type) {
        case "setcategory":
            return({...state,category:[...action.payload]})
        case "setselected":
            return({...state , selected:[...action.caller(state.selected)]})
        case "setproduct":
            return({...state , product:[...action.payload]})
        case "setTotal":
            return({...state , total:Number((state.total+action.payload).toPrecision(10))})
        case "setcart":
            return({...state , cart:[...action.changePrev(state.cart,action.payload)]})
        default:
            return state;
    }
  
}

export default reducer