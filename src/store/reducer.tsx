import { combineReducers } from '@reduxjs/toolkit';
import locationReducer from '../features/location/locationSlice';

const rootReducer = combineReducers({
  location: locationReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
