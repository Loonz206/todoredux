import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import reducers from "./reducers";
import App from "./components/App";
import "./index.scss";
import registerServiceWorker from "./utils/registerServiceWorker";
import { loadState, saveState } from "./utils/localStorage.js";
import throttle from "lodash.throttle";

const persistedState = loadState();
let store;
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.NODE_ENV !== "production") {
  store = createStore(
    reducers,
    persistedState,
    composeEnhancer(applyMiddleware(logger))
);
}else {
  store = createStore(reducers, persistedState, applyMiddleware(logger));
}

store.subscribe(
  throttle(() => {
    saveState({
      todos: store.getState().todos,
    });
  }, 1000)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
