import { styled } from 'solid-styled-components';
import { onMount, Show, type JSX } from "solid-js";
import { LabelText } from './base';


const RangeInputEl = styled("input")`
  width: 100%; 
  height: 1.75em; 
  margin: 0; 
  background: transparent;
  outline: none; 
  z-index: 4;
  font-size: 1em;

  &::-moz-range-thumb {
    height: 1em; 
    width: 1em; 
    background: var(--text);
    border-radius: 50%;
    border: 0.2em solid var(--surface-2);
    cursor: pointer; 
    transition: all ease-in-out .2s;
    outline: 0.125em solid transparent;
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
    outline: 0.125em solid transparent;
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
      outline: 0.125em solid var(--primary-b);
      background: var(--primary-b);
    }
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      background: var(--primary-b);
      outline: 0.125em solid var(--primary-b);
    }
  }
  &:active {
    &::-moz-range-thumb {
      outline: 0.125em solid var(--primary-s-4);
    }
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      outline: 0.125em solid var(--primary-s-4);
    }
  }
`

const LabelRow = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5em;
  height: 1.5em;
`

const Value = styled("div")`
  font-weight: bold;
  color: var(--text);
  transition: color 0.2s ease;
  width: 3ch;
  text-align: right;
`

const SliderBar = styled("div")`
  position: absolute;
  width: 100%;
  height: 1em;
  background: var(--surface-0);
  bottom: 0.4em;
  transition: width 0s ease, background 0.2s ease;
  pointer-events: none;
  border-radius: 0.5em;
  z-index: 1;
`

const ValueBar = styled("div")`
  position: absolute;
  width: calc(var(--width, 0%) - 0.4em);
  height: 0.5em;
  background: var(--text);
  opacity: 0.5;
  bottom: 0.65em;
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
  gap: 0em;

  &:hover {
    ${Value.class} {
      color: var(--primary-b);
    }
  }
  &:has(${RangeInputEl.class}:hover) {
    ${ValueBar.class} {
      background: var(--primary-b);
    }
  }
`

interface RangeInputProps {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  showValue?: boolean;
  onChange: JSX.EventHandler<HTMLInputElement, InputEvent>;
}


export const RangeInput = (props: RangeInputProps) => {
  let Input: HTMLInputElement | null = null;

  onMount(() => {
    const input = Input;
    if (input) {
      console.log(input && input.value);
      // Call the input handler to update the value
      props.onChange({
        target: input,
        currentTarget: input,
      } as any);
    }
  });
  return (
    <InputWrapper>
      <LabelRow>
        <LabelText>{props.label}</LabelText>
        <Show when={props.showValue !== false}>
          <Value>{props.value}</Value>
        </Show>
      </LabelRow>
      <SliderBar />
      <ValueBar
        style={{
          "--width": `${((props.value - props.min) / (props.max - props.min)) * 100}%`,
        }}
      />
      <RangeInputEl
        ref={Input!}
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
