import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./Store/store";
import Posts from "./Posts/post-list-component";
import Header from "./Header/header-component";

function App() {
  return (
      <Provider store={store}>
          <Header/>
          <Posts/>
      </Provider>
  );
}

export default App;
