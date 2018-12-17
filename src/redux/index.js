import {combineReducers} from 'redux';
import {count} from './count.js';

const reducers = combineReducers({
    count
});
export {reducers}