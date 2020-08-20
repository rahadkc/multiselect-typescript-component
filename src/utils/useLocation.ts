
import useSWR from 'swr';
import { ApiInterface } from '../features/location/apiInterface';
import fetcher from './fetcher';
import useDebounce from './useDebounce';

const { REACT_APP_API_URL: URL } = process.env

interface ApiResponseObject {
  data: ApiInterface,
  loading: boolean,
  error: any
}

function useLocation (query: string | undefined, limit:number = 5): ApiResponseObject {
  const debouncedQuery = useDebounce(query, 400)

  const API_URL = debouncedQuery ? 
          `${URL}itemsPerPage=${limit}&query=${debouncedQuery}` : 
            null;

  const { data, error } = useSWR(API_URL, fetcher)
  
  return {
    data,
    loading: !error && !data,
    error: error
  }
}

export default useLocation