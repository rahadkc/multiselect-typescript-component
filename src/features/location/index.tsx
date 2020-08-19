import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import Multiselect from '../../components/multiselect';
import { RootState } from '../../store/reducer';
import useLocation from '../../utils/useLocation';
import { Location } from './location';
import { addLocations } from './locationSlice';

export interface SelectedType  {
  id?: number,
  name: string
}

function LocationSearch() {
  const dispatch = useDispatch()
  const [query, setQuery] = useState<string | null>(null)
  // const debouncedSearchQuery = useDebounce(query, 4000);
  const { data } = useLocation(query, 5)
  const locations = useSelector((state: RootState) => state.location.locations);
  
  function handleRemove(i: number, t: any) {
    // console.log(i, t, 'get removed index and removed item')
  }

  function handleSelect(data: Location[]) {
    dispatch(addLocations(data))
  }

  function handleKeyDown() {
    
  }

  function handleQuery(val: string) {
    setQuery(val)
  }


  console.log(locations)
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

export default React.memo(LocationSearch) ;

const Container = styled.div`
  width: 600px;
  max-width: 100%;
  padding: 10px 15px;
  margin: 50px auto;
`

const Title = styled.h3`
  text-align: left;
`
