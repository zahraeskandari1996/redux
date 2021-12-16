import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import App from "./App";
import reducers from "./Reducers/index";
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class Container extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Container;
