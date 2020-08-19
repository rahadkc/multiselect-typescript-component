import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, AppThunk } from '../../store/configureStore';
import { Location } from './location';

const { reducer, actions } = createSlice({
  name: 'location',
  initialState: {
    locations: [] as Location[],
  },
  reducers: {
    addLocations(state, action: PayloadAction<Location[]>) {
      state.locations = action.payload
    },
    removeLocation(state, action: PayloadAction<number>) {
      const index = state.locations.findIndex(d => d.id === action.payload)
      state.locations.splice(index, 1)
    }
  }
})


export default reducer

export const addLocations = (
  locations: Location[]
  ): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(actions.addLocations(locations))
}

export const removeLocation = (
  id: number
  ): AppThunk => async (dispatch: AppDispatch) => {

  dispatch(actions.removeLocation(id))
}
