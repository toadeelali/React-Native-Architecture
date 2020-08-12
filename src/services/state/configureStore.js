import AsyncStorage from '@react-native-community/async-storage';
import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

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
const persistor = persistStore(store);

/* ------------- Clean all saved data ----------- */
export const purgeStore = () => persistor.purge();

export { store, persistor };
