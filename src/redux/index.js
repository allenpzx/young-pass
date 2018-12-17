import {createStore, combineReducers} from 'redux';
import {count} from './count.js';

const reducers = combineReducers({
    count
});
const store = createStore(reducers);

export {store}