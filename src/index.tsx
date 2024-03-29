import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import { app } from "./reducers";
import "./index.css";
import "typeface-roboto";
import * as serviceWorker from "./serviceWorker";

const store = createStore(app, applyMiddleware(thunk, logger));

ReactDOM.render(
  <div className="frontpage">
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
