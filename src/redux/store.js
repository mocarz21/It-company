import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import subreducera from './subreducera';
import userRedux from './userRedux';

const subreducers = {
    topics:subreducera,
    user:userRedux,
}
const reducer = combineReducers(subreducers);
const store = createStore(
reducer,
initialState,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;