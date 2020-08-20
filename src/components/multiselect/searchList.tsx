import React from 'react';
import styled from "styled-components";
import ListItem from './listItem';

interface Props  {
  data: [],
  onSelect: (e: any) => void,
  fields: string[],
  dropRef: any
}

const SearchList: React.FC<Props> = ({ data, onSelect, fields, dropRef }) => {

  return (
    <SearchResult ref={dropRef}>
      {data && !data?.length && <NoResult>No location match</NoResult>}
      {data?.map((d, i) => <ListItem data={d} key={i} onSelect={onSelect} fields={fields} />)}
    </SearchResult>
  );
}

export default SearchList;

const NoResult = styled.div`
  padding: 15px;
  text-align: center;
`

const SearchResult = styled.div`
  padding: 10px 0;
  background: var(--primary);
  position: absolute;
  top: 100%;
  width: 100%;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  text-align: left;
`
