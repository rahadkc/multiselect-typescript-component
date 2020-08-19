import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppDispatch, AppThunk } from '../../store/configureStore';
import { ApiInterface } from './apiInterface';
import { Location } from './location';


const { reducer, actions } = createSlice({
  name: 'location',
  initialState: {
    locations: [] as Location[]
  },
  reducers: {
    receiveLocations(state, action: PayloadAction<Location[]>) {
      state.locations = action.payload
    },
  }
})


export default reducer


export const loadLocations = (query: string | null, limit = 5): AppThunk => async (dispatch: AppDispatch) => {
  const locations = await getLocations(query, limit);
  dispatch(actions.receiveLocations(locations))
}


export async function getLocations(
  query: string | null,
  limit?: number
  ): Promise<Location[]> {
  
  axios.defaults.headers.common["Content-Type"] = "application/json";

  const response = await axios.get<ApiInterface>(process.env.REACT_APP_API_URL + `itemsPerPage=${limit}&query=${query}`)
  
  return response.data.results;
}