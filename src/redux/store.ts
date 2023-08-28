import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import Reducers from "./Reducers";

export default configureStore({
  reducer: Reducers,
  middleware: [thunk]
});
