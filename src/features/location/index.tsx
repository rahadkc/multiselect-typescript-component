import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from "styled-components";
import Multiselect from '../../components/multiselect';
import useDebounce from '../../utils/useDebounce';
import useLocation from '../../utils/useLocation';
import { loadLocations } from './locationSlice';

export interface SelectedType  {
  id?: number,
  name: string
}

function LocationSearch() {
  const dispatch = useDispatch()
  const [query, setQuery] = useState<string | null>(null)
  const { data } = useLocation(query, 5)

  const debouncedSearchQuery = useDebounce(query, 500);
      
  useEffect(() => {
    dispatch(loadLocations(debouncedSearchQuery))
  }, [dispatch, debouncedSearchQuery]);
  
  
  function handleRemove(i: number, t: any) {
    // console.log(i, t, 'get removed index and removed item')
  }

  function handleSelect(data: any) {
    // console.log(data, 'get selected data')
  }

  function handleKeyDown() {
    
  }

  function handleQuery(val: string) {
    setQuery(val)
  }


  return (
    <Container>
      <Title>Select Locations</Title>
      <Multiselect
        fields={['name', 'admin1', 'country']} // Field to show on search list
        data={data?.results} 
        onChange={handleQuery}
        onSelect={handleSelect}
        onRemove={handleRemove}
        onKeyDown={handleKeyDown}
      />

    </Container>
  );
}

export default LocationSearch;

const Container = styled.div`
  width: 600px;
  max-width: 100%;
  padding: 10px 15px;
  margin: 50px auto;
`

const Title = styled.h3`
  text-align: left;
`
