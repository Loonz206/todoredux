import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducers from "./reducers";
import App from "./components/App";
import "./index.scss";
import registerServiceWorker from "./utils/registerServiceWorker";
import { loadState, saveState } from './utils/localStorage.js';

const persistedState = loadState();
let store;
if (process.env.NODE_ENV !== "production") {
  store = createStore(reducers, 
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(logger),
);
}

store.subscribe(()=> {
  saveState({
    todos: store.getState().todos
  })
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
