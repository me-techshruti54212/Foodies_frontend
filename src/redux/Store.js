import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import CategorySlice from "./slices/CategorySlice";
import SearchSlice from "./slices/SearchSlice";
import SigninSlice from "./slices/SigninSlice";
import FetchFoodListSlice from "./slices/FetchFoodListSlice";
// import thunk from 'redux-thunk';
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import localStorage from "redux-persist/es/storage/session";
import { FLUSH, REHYDRATE, PAUSE,PERSIST,PURGE,REGISTER,} from 'redux-persist'
import OrderSlice from "./slices/OrderSlice";

import FetchOrdersSlice from "./slices/FetchOrdersSlice";
import ForgotPasswordSlice from "./slices/ForgotPasswordSlice";
// import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  version: 1,
  storage: localStorage,
};

const reducer = combineReducers({
  cart: CartSlice,
  category: CategorySlice,
  search: SearchSlice,
  signin: SigninSlice,
  foodlist: FetchFoodListSlice,
  order:OrderSlice,
  foodorders: FetchOrdersSlice,
  fgtpwd:ForgotPasswordSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // reducer:{
  // cart:CartSlice,
  // category:CategorySlice,
  // search:SearchSlice,
  // signin:SigninSlice,
  // foodlist:FetchFoodListSlice
  // }
});

// export default  (state, action) => {
//   if (action.type === "SIGNOUT_REQUEST") {
//       // localStorage.removeItem('persist:root')
//       return reducer(undefined, action);
//   }else{
//     return reducer(state, action);
//   }
// }
export default Store