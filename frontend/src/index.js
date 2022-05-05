import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./components/redux/store";
import { Provider } from "react-redux";
import "./responsive.css";
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
