import React from 'react';
import './App.css';
import ListPosts from "./Posts/post-list-component";
import {Provider} from "react-redux";
import {store} from "./Store/store";

function App() {
  return (
      <Provider store={store}>
          <>
              <ListPosts/>
          </>
      </Provider>
  );
}

export default App;
