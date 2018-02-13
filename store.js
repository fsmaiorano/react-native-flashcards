import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import mainReducers from './mainReducer';

export default createStore(mainReducers, applyMiddleware(thunk));