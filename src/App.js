import "./App.css";
import Cart from "./component/Cart";
import Items from "./component/Items";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {Context1} from "./context/context";
import { useDispatch,useSelector } from "react-redux";
import {setcategory,setproduct,setselector} from "./slice"
// import { toHaveAttribute } from "@testing-library/jest-dom/dist/matchers";
function App() {
  // let data = [];

  // const [product, setProduct] = useState([]);
  // const [cart, setCart] = useState([]);
  // const [total, setTotal] = useState(0);
  // const ides = Date.now();
  // const [category, setCategory] = useState(["all"]);
  // const [selected, setSelected] = useState(["all"]);
  // const [state , dispatch] = useContext(Context1)
  const newstate = useSelector(state => state.newone)
  const dispatch = useDispatch();
  console.log(newstate)

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then(res => dispatch(setcategory(["all",...res.data])))


      // .then(res=> dispatch({
      //     type:"setcategory",
      //     payload:["all",...res.data]
      //   }))
        // .then((res) => setCategory(prev=>(["all",...res.data])));

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(json=>dispatch(setproduct(json)))
      // .then(json => dispatch({
      //   type:"setproduct",
      //   payload:json
      // }))
      // .then((json) => setProduct([...json]));
  }, []);
  function categoryHandle(e) {
    if (e.target.checked) {
      // setSelected((prev) => [...prev, e.target.id]);
      dispatch(setselector({caller:prev => ([...prev, e.target.id])}))
      // dispatch({
      //   type:"setselected",
      //   // value:e.target.id,
      //   caller:(prev) => ([...prev, e.target.id])
      // })
    } else {
      // setSelected((prev) => prev.filter((el) => el != e.target.id));
      dispatch(setselector({caller:(prev) => prev.filter((el) => el != e.target.id)}))
      // dispatch({
      //   type:"setselected",
      //   // value:e.target.id,
      //   caller:(prev) => prev.filter((el) => el != e.target.id)
      // })
    }
    // console.log(state);
  }
  useEffect(() => {
    document.getElementById("all").checked = true;
  },[])
  // console.log(selected)

  return (
    <div className="App">
      <div className="filter">
        <div className="titlef">filter product</div>
        {newstate.category.map((item) => {
          return (
            <div key={item}>
              <input
                type="checkbox"
                id={item}
                value={item}
                onChange={categoryHandle}
              />
              <label htmlFor={item}style = {{fontSize:'20px',
            textTransform: 'capitalize',
            margin: '10px'}} >{item} </label>
            </div>
          );
        })}
      </div>
      <div className="product">
        <h2 style={{ textAlign: "center" }}>Product</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {newstate.product.filter(ele => (
            newstate.selected.find((val)=>((val === ele.category)|| val === "all"))
          )).map((el) => {
            return (
              // ((el.category in selected) || (selected !== []) )&&(
              
              <Items
                el={el}
                key={el.id}
                // setCart={setCart}
                // cart={state.cart}
                // setTotal={setTotal}
              />
              // )
              
            );
          })}
        </div>
      </div>
      <div className="cart">
        <h2 style={{ textAlign: "center" }}>Cart</h2>
        <div style={{ overflowY: "scroll", height: "87%" }}>
          {newstate.cart.map((el) => {
            return <Cart el={el} key={newstate.ides + Math.random() * 100} />;
          })}
        </div>
        <div>total : {newstate.total} </div>
      </div>
    </div>
  );
}

export default App;
