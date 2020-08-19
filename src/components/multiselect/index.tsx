import { find, pick } from 'lodash';
import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Combobox from './combobox';
import SearchList from './searchList';

export interface IindexProps {
  onSelect?: (e: any) => void,
  onKeyDown?: (e: any) => void,
  onRemove?: (e: any, t: any) => void,
  onChange: (e: any) => void,
  placeholder?: string,
  data: [],
  fields: string[],
  loading?: boolean
}


const removesKey = [8, 46]


const Multiselect: React.FC<IindexProps> = (props) => {
  const { onSelect, onChange, onRemove, data, fields } = props
  const [selected, setSelected] = useState<any[]>([])

  useEffect(() => {
    if (onSelect) {
      onSelect(selected)
    }
  }, [selected, onSelect]);

  function handleOnChange(e: any) {
    onChange(e.target.value)
  }

  function handleKeyDown(e: any) {
    if (removesKey.includes(e.keyCode) && e.target.value === '') {
      removeSelected(selected.length - 1)
    }
  }

  function handleSelect(selectItem: any) {
    const s = pick(selectItem, ['name', 'id'])
    if (!find(selected, s)) {
      setSelected(prev => [...prev, s])
    }
  }

  function removeSelected(i: number, t?: any) {
    const newTags = [...selected]
    newTags.splice(i, 1)
    setSelected(newTags)

    if (onRemove) {
      onRemove(i, t)
    }
  }

  return (
    <SelectWrapper>

      <Combobox
      selected={selected}
      onChange={handleOnChange}
      onKeyDown={handleKeyDown}
      removeSelected={removeSelected}
      />
      
      {data && <SearchList
      data={data}
      fields={fields}
      onSelect={handleSelect} />}
      
    </SelectWrapper>
  );
}

export default Multiselect;


const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: var(--primary);
`
