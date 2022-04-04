import React from "react";
import ReactDOM from "react-dom";

import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import allReducers from "./redux";
import App from "./App";
const middlewares = []
const composeEnhancers =
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify here name, actionsBlacklist, actionsCreators and other options
    })
    : compose;

const store = createStore(allReducers, composeEnhancers(applyMiddleware(...middlewares)));



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById("root")
)