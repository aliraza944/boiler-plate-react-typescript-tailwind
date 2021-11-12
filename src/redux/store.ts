import { createStore, applyMiddleware, compose } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import thunk from "redux-thunk";

import { reducer } from "./reducers/reducers";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}


// rootReducer

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
  whiteList: ["reducer"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

// const composeEnhancers = compose;
const composeEnhancers =
   window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

export const configureStore = () =>
  createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
