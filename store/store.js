import { configureStore } from "@reduxjs/toolkit";
import Todos from "./DataSlice";
 

const store = configureStore({
    reducer: {Todos}
})

export default store;