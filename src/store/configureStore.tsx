import { Action, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import reducer, { RootState } from './reducer';


const store = configureStore({
  reducer,
  middleware: [ ...getDefaultMiddleware({ serializableCheck: false })]
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./reducer', () => {
    const newRootReducer = require('./reducer').default
    store.replaceReducer(newRootReducer)
  })
}

export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
export default store