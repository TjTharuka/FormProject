import { combineReducers } from 'redux';
import { auth, loadingReducer, toastReducer,paperReducer } from '../index';
import { EMPTY_STATE } from '../../actions/types';

const rootReducer = combineReducers({
  auth,
  loadingReducer,
  toastReducer,
  paperReducer,
});

export default (state, action) =>
  rootReducer(action.type === EMPTY_STATE ? undefined : state, action);
