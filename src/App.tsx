import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux-store/store";
import { Routes } from "./routes/routes";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <p>Cool app:</p>
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
