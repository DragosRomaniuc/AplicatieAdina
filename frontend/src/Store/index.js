import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const allMiddlewares = compose(applyMiddleware(thunk));

const store = createStore(rootReducer, allMiddlewares);

export default store;



