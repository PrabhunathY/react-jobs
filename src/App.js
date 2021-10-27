import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import combineReducers from './reducer';
import Routes from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const store = createStore(combineReducers, {}, applyMiddleware(ReduxThunk));

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
