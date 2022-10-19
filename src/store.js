import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
import reducerfxn from "./slice";
export default configureStore({
    reducer:{
        newone : reducerfxn
    }
});