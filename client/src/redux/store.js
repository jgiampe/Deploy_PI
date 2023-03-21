// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import rootReducer from './reducer.js';

// const store = createStore(
//    rootReducer,
//    composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;

import {configureStore} from '@reduxjs/toolkit'
import foods from './slices.js'

export default configureStore({
   reducer:{
      foods
   }
})