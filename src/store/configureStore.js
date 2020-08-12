import AsyncStorage from '@react-native-community/async-storage';
import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import { ENV } from '@env';
import RootReducer from './reducers';

/* ------------- Redux Configuration ------------- */
const middleware = [thunk];

/* ------------- Redux Persist ------------------- */
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

/* ------------- Redux Development Tools ----------- */
let composeEnhancers = compose;

// Remote Redux Devtools
if (ENV !== 'production') {
  composeEnhancers = composeWithDevTools({
    name: 'RN Architecture',
  });
}

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middleware)));
const persister = persistStore(store);

export const purgeStore = () => persister.purge();

export { store, persister };
