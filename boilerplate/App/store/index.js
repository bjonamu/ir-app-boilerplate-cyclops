import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import ReduxPersistConfig from 'config/redux-persist-config';
import configureStore from './create-store';
import rootSaga from 'sagas';

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const appReducer = combineReducers({
    login: require('./login-redux').reducer
  });

  const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT_SUCCESS') {
      state = undefined;
    } else if (action.type === 'CLEAR_DATA') {
      state = {
        ...appReducer({}, {}),
        login: (state && state.login) || {},
        startup: (state && state.startup) || {}
      };
    }
    return appReducer(state, action);
  };

  const persistedReducer = persistReducer(
    ReduxPersistConfig.storeConfig,
    rootReducer
  );

  return configureStore(persistedReducer, rootSaga);
};
