
import useSWR from 'swr';
import fetcher from './fetcher';
import useDebounce from './useDebounce';

const { REACT_APP_API_URL: URL } = process.env

function useLocation (query: string | null, limit:number = 5) {
  const debouncedQuery = useDebounce(query, 200)

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