import React, { useContext, useEffect, useId, useState } from 'react'
import './all.css'
import {Context1} from '../context/context'
import { useDispatch,useSelector } from "react-redux";
import {setcart,setcategory,setproduct,settotal,setselector} from '../slice'
const Items = ({el}) => {
    // const [state,dispatch] = useContext(Context1)
    const newstate = useSelector(state => state.newone)
    const dispatch = useDispatch();
    // const extId = useId();
    function removefromCart(){
        const rem = newstate.cart.find(elem => elem.id === el.id);
        // console.log(rem);
        if(rem){
            // console.log(Number(el.price))
            // setTotal(prev => Number((prev - el.price).toPrecision(10)))
            dispatch(settotal(-el.price))
            // dispatch({
            //     type:"setTotal",
            //     payload:(-el.price)
            // })
            // setCart(prev => prev.filter(elem => elem.extId !== rem.extId))
            dispatch(setcart({load:rem,
                changePrev:(prev,rem) => prev.filter(elem => elem.extId !== rem.extId)}))
            // dispatch({
            //     type:"setcart",
            //     payload:rem,
            //     changePrev:(prev,rem) => prev.filter(elem => elem.extId !== rem.extId)
            // })
        }
    }

    const addfromCart= ()=>{
        const newele = {...el,extId:`${Date.now()}`};
        // setCart(prev =>([   
        //     ...prev,newele
        // ]))
        dispatch(setcart({load:newele,changePrev:(prev,newele) => ([...prev , newele])}))
        // dispatch({
        //     type:"setcart",
        //     payload:newele,
        //     changePrev:(prev,newele) => ([...prev , newele])
        // })
        dispatch(settotal((el.price)))

        // dispatch({
        //     type:"setTotal",
        //     payload:(el.price)
        // })
        
        // setTotal(prev => Number((prev + el.price).toPrecision(10)))
    }

   return (
        <div className='Items'>
            <img className = "image2" src={`${el.image}`}/>        
            <div className="title">{el.category}</div>
            <div className="price1">Price : {el.price} $</div>
            <button style={{
                padding:'0px 20px',
                margin:'0px 20px',
                backgroundColor:'gray',
                color:'#fffff',
                fontWeight:'600'
                ,borderRadius:'5px'
            }} onClick = {removefromCart}>remove</button>
            <button style = {{
                padding:'0px 20px',
                margin:'0px 20px',
                backgroundColor:'gray',
                color:'#fffff',
                fontWeight:'600'
                ,borderRadius:'5px'
            }} onClick = {addfromCart}>add</button>
        </div>  
    )
}

export default Items