import React from 'react';
import styled from "styled-components";
import marker from '../../map-marker.svg';

interface Props  {
  selected: any[],
  onChange: (e: any) => void,
  onKeyDown: (e: any) => void,
  removeSelected: (e: any, t: any) => void,
  placeholder?: string
}


const Combobox: React.FC<Props> = (props) => {
  const { selected, removeSelected, onChange, onKeyDown, placeholder } = props

  return (
    <InputWrapper>
      <Img src={marker} />
      <InputTags>
        {selected.map((t, i) => <Tag key={i} tabIndex={-1}>
          {t.name}
          <RemoveTag
          type="button"
          onClick={() => removeSelected(i, t)}
          >+</RemoveTag>

        </Tag>)}
        <TagInput>
          <Input
            type="text"
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder={placeholder || "type and search"}
          />
        </TagInput>
      </InputTags>
    </InputWrapper>
  );
}

export default Combobox;


const InputTags = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  width: 100%;
  `
  
  const Tag = styled.div`
  padding: 4px 7px 6px 10px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  margin: 5px 3px;
  background: red;
  background-color: var(--background);
  font-size: 12px;
  font-weight: bold;
  color: var(--secondary);
  box-shadow: 0 0 2px var(--shadow)
`
const TagInput = styled.div`
  flex-grow: 1;
  
`
const RemoveTag = styled.button.attrs({ type: 'button' })`
  align-items: center;
  appearance: none;
  border: none;
  border-radius: 50%;
  color: var(--secondary);
  cursor: pointer;
  display: inline-flex;
  font-size: 24px;
  height: 15px;
  justify-content: center;
  line-height: 0;
  margin-left: 8px;
  padding: 0;
  transform: rotate(45deg);

  &:focus, &:active {
    outline: none;
  }
  &:hover {
    opacity: 0.8;
  }
`


const InputWrapper = styled.div`
  position: relative;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 30px;
  min-height: 42px;

  &:focus-within {
    border-color: var(--theme);
  }
` 

const Img = styled.img`
  width: 18px;
  position: absolute;
  top: 13px;
  left: 8px;
`

const Input = styled.input.attrs({ type: 'text' })`
  height: 38px;
  width: 100%;
  padding:8px 8px;
  font-size: 16px;
  box-shadow: none;
  // background-color: var(--background);
  appearance: none;
  outline: none;
  border: none;

  &:focus {
    border-color: var(--theme);
  }
`