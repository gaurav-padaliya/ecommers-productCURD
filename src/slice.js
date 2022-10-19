import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name:"newone",
    initialState:{
        product:[],
        cart:[],
        total:0
        ,ides:Date.now()
        ,category:['all']
        ,selected:['all'],
    },
    reducers:{
        setcategory:(state,action)=>
        (state = {...state,category:[...action.payload]}),

        setselector:(state,action)=>
        (state = {...state , selected:[...action.payload.caller(state.selected)]})
        ,
        setproduct:(state,action)=>
        (state = {...state , product:[...action.payload]})
        ,
        settotal:(state,action)=>
        (state = {...state , total:Number((state.total+action.payload).toPrecision(10))})
        ,
        setcart:(state,action)=>
        (state = {...state , cart:[...action.payload.changePrev(state.cart,action.payload.load)]})
    }
})
//create action
export const {setcart,setcategory,setproduct,settotal,setselector} = slice.actions;
//create reducer
export default slice.reducer;