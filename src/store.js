// import { createStore } from 'redux';
import reducer from './reducer'

// const store = createStore(reducer);

// export default store;
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
const store = createStore(
  reducer, 
  applyMiddleware(thunk)
);
export default store;