import { pick, uniq, values } from 'lodash';
import React from 'react';
import styled from "styled-components";
import { Location } from '../../features/location/location';

interface Props {
  data: Location,
  onSelect: (e: any, data: any) => void,
  fields: string[],
}

const ListItem: React.FC<Props> = ({ data, onSelect, fields }) => {
  const printVal = pick(data, fields)
  const arr = values(printVal)
  const uniqArr = uniq(arr)
  const rest = uniqArr.slice(1).join(', ')

  return (
    <Item role="menuitem" onClick={(e) => onSelect(data, e)}>
      <span>{arr[0]},</span>
      {rest && <Addr>{rest}</Addr>}
    </Item>
  )
}

export default ListItem

const Item = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  transition: 0.2s;
  letter-spacing: 0.5px;

  &:hover, &:focus {
    background: var(--background);
  }
`
const Addr = styled.span`
margin-left: 5px;
font-size: 13px;
color: var(--secondary);
`