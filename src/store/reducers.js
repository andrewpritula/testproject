import { combineReducers } from 'redux';
import things from './fetch/reducers';

const rootReducer = combineReducers({
  things // this key can be called anything, 'things' is just an example
});
  
export default rootReducer;
