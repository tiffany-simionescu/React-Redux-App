import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

// Components
import FoxImage from './components/FoxImage';
import DogImage from './components/DogImage';
import CatImage from './components/CatImage';
import NavBar from './components/NavBar';

// Reducers
import { reducer } from './reducers';

// MiddleWare
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Redux Store
import { createStore, applyMiddleware } from 'redux';

// const rootReducer = combineReducers({
//   FoxImage: foxReducer, 
//   CatImage: catReducer, 
//   DogImage: dogReducer
// })

export const store = createStore(reducer, applyMiddleware(thunk, logger));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Route path="/fox-image" component={FoxImage} />
        <Route path="/dog-image" component={DogImage} />
        <Route path="/cat-image" component={CatImage} />
      </header>
    </div>
  );
}

export default App;
