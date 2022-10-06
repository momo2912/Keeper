import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

// ReactDOM.render(<App/>, document.getElementById("root"));

rootElement.render(
  <Provider store={store}>
    <App />
  </Provider>
);
