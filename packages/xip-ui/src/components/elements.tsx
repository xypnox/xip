import { styled } from 'solid-styled-components';


const Row = styled('div')`
  display: flex;
  flex-direction: row;

  &.wrap {
    flex-wrap: wrap;
  }
`

const Column = styled('div')`
  display: flex;
  flex-direction: column;
`

const baseElementStyles = `
  padding: 0.5em 1em;
  border-radius: 0.5em;
`

const generateClass = (cls: string) => `
  &.${cls} {
    color: var(--${cls}-o);
    border-color: var(--${cls}-b);
    background-color: var(--${cls}-b);
    &:hover {
      border-color: var(--${cls}-s-6);
      background-color: var(--${cls}-s-6);
    }
    &:active {
      border-color: var(--${cls}-s-4);
      background-color: var(--${cls}-s-4);
    }
    &:focus {
      outline-color: var(--${cls}-b);
    }
  }
`

const Button = styled('button')`
  ${baseElementStyles}

  display: flex;
  align-items: center;
  gap: 0.5em;

  font-family: inherit;
  font-size: 1em;
  border: 2px solid transparent;

  transition: background-color 0.2s, border-color 0.2s, color 0.2s;
  transition-timing-function: ease-in-out;
  color: var(--primary-b);
  border-color: var(--border);
  background-color: var(--surface-0);

  iconify-icon {
    font-size: 1.2em;
  }
  
  &:hover {
    color: var(--primary-s-6);
    border-color: var(--primary-s-6);
    background-color: var(--surface-1);
  }

  &:active {
    border-color: var(--primary-s-4);
    background-color: var(--background);
  }

  outline: none;

  &:focus {
    outline: 2px solid var(--primary-b);
    outline-offset: 2px;
  }

  ${['primary', 'secondary', 'tertiary'].map(generateClass).join('\n')}

  &.icon {
    padding: 0.5em;
  }

  &.rounded {
    border-radius: 2em;
  }

  &:disabled {
    background-color: transparent;
    border: 2px solid var(--border);
    color: var(--text);
    opacity: 0.66;
  }
`

const Input = styled('input')`
  ${baseElementStyles}
  padding: 0.5em;

  font-family: inherit;
  font-size: 1em;
  border: 2px solid var(--border);
  background-color: var(--surface-0);
  color: var(--text);
  outline: none;

  &:focus {
    border-color: var(--primary-b);
  }
`

const Label = styled('label')`
  font-family: inherit;
  font-size: 0.9em;
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  * {
    font-size: 1em;
  }
`

const Card = styled(Column)`
  padding: 1em;
  gap: 0.5em;
  background: var(--surface-0);
  color: var(--text);
  border-radius: 0.5em;

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  &:has(&) {
    border-radius: calc(2 * 0.5em);
  }
  &:has(&:has(&)) {
    border-radius: calc(4 * 0.5em);
  }
  & > & {
    background: var(--surface-1);
  }
  & > & > & {
    background: var(--surface-  2);
  }
`

import { type JSX } from "solid-js";

interface RangeInputProps {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  showValue?: boolean;
  onChange: JSX.EventHandlerUnion<HTMLInputElement, InputEvent>;
}

const RangeInputEl = styled("input")`
  width: 100%; 
  height: 1.75em; 
  margin: 0; 
  background: transparent;
  outline: none; 
  z-index: 4;

  &::-moz-range-thumb {
    height: 1em; 
    width: 1em; 
    background: var(--text);
    border-radius: 50%;
    border: 0.2em solid var(--background);
    cursor: pointer; 
    transition: all ease-in-out .2s;
    outline: 0.1em solid transparent;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: var(--text);
    height: 1em; 
    width: 1em; 
    background: var(--text);
    border-radius: 50%;
    border: 0.2em solid var(--background);
    cursor: pointer; 
    transition: all ease-in-out .2s;
    outline: 0.1em solid transparent;
  }


  &:hover {
    &::-moz-range-thumb {
      background: var(--primary-b);
    }
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      background: var(--primary-b);
    }
  }
  &:focus-within {
    &::-moz-range-thumb {
      outline: 0.1em solid var(--primary-b);
      background: var(--primary-b);
    }
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      background: var(--primary-b);
      outline: 0.1em solid var(--primary-b);
    }
  }
  &:active {
    &::-moz-range-thumb {
      outline: 0.1em solid var(--primary-s-4);
    }
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      outline: 0.1em solid var(--primary-s-4);
    }
  }
`

const LabelRow = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5em;
`

const Value = styled("div")`
  font-weight: bold;
  color: var(--text);
  transition: color 0.2s ease;
`

const SliderBar = styled("div")`
  position: absolute;
  width: 100%;
  height: 0.5em;
  background: var(--surface-0);
  bottom: 0.25em;
  transition: width 0s ease, background 0.2s ease;
  pointer-events: none;
  border-radius: 0.5em;
  z-index: 1;
`

const ValueBar = styled("div")`
  position: absolute;
  width: calc(var(--width, 0%) - 0.4em);
  height: 0.25em;
  background: var(--text);
  bottom: 0.35em;
  left: 0.25em;
  transition: width 0s ease, background 0.2s ease;
  pointer-events: none;
  border-radius: 0.25em;
  z-index: 2;
`

const InputWrapper = styled("div")`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.25em;

  &:hover {
    ${Value.class} {
      color: var(--primary-b);
    }
  }
  &:has(${Input.class}:hover) {
    ${ValueBar.class} {
      background: var(--primary-b);
    }
  }
`

export const RangeInput = (props: RangeInputProps) => {
  return (
    <InputWrapper>
      <LabelRow>
        <Label>{props.label}</Label>
        {props.showValue && (
          <Value>{props.value}</Value>
        )}
      </LabelRow>
      <SliderBar />
      <ValueBar
        style={{
          "--width": `${((props.value - props.min) / (props.max - props.min)) * 100}%`,
        }}
      />
      <RangeInputEl
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
        onInput={props.onChange}
      />
    </InputWrapper>
  );
}

export { Row, Column, Button, Input, Label, baseElementStyles, Card }
