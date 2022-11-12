import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor } from "./redux/store";
import store from "./redux/store";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

// ReactDOM.render(<App/>, document.getElementById("root"));

rootElement.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
