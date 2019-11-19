import React from 'react';
import './App.css';

// Components
import FoxImage from './components/FoxImage';

// Reducers
import { reducer } from './reducers';

// MiddleWare
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Redux Store
import { createStore, applyMiddleware } from 'redux';

export const store = createStore(reducer, applyMiddleware(thunk, logger));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FoxImage />
      </header>
    </div>
  );
}

export default App;
