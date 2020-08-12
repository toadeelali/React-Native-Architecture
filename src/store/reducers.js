import { combineReducers } from 'redux';
import { createAction } from './utils';

export const resetGlobal = createAction('global/reset');

const Test = (state = null, action) => {
  return state;
};

const reducers = combineReducers({
  Test,
});

const rootReducer = (state = {}, action) => {
  if (action.type === resetGlobal.toString()) {
    // exclude account state from resetting for persisting authentication
    const { accounts: accountsState } = state;
    return reducers({ accounts: accountsState }, action);
  }

  return reducers(state, action);
};

export default rootReducer;
