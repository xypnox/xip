import { onMount, Show, type JSX } from "solid-js";
import { css } from "solid-styled";
import { LabelText } from './base';

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
      // console.log(input && input.value);
      // Call the input handler to update the value
      props.onChange({
        target: input,
        currentTarget: input,
      } as any);
    }
  });

  css`
  .labelRow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5em;
    height: 1.5em;
  }

  .value {
    font-weight: bold;
    color: var(--text);
    transition: color 0.2s ease;
    width: 3ch;
    text-align: right;
  }

  .sliderBar {
    position: absolute;
    width: 100%;
    height: 1em;
    background: var(--surface-0);
    bottom: 0.25em;
    transition: width 0s ease, background 0.2s ease;
    pointer-events: none;
    border-radius: 0.5em;
    z-index: 1;
  }

  .valueBar {
    position: absolute;
    width: calc(var(--width, 0) / 100 * calc(100% - 0.75em));
    height: 0.5em;
    background: var(--text);
    opacity: 0.5;
    bottom: 0.5em;
    margin: 0 0.275em;
    transition: width 0s ease, background 0.2s ease;
    pointer-events: none;
    border-radius: 0.25em;
    z-index: 2;
  }
  .wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0em;

    &:hover {
      .value {
        color: var(--primary-b);
      }
    }
    &:has(input:hover) {
      .valueBar {
        background: var(--primary-b);
      }
    }
  }
  input[type="range"] {
    appearance: none;
    width: 100%; 
    height: 1.5em; 
    margin: 0; 
    background: transparent;
    outline: none; 
    z-index: 4;
    font-size: 1em;

    &::-webkit-slider-thumb {

    -webkit-appearance: none;
    appearance: none;
    height: 1em; 
    width: 1em; 

    background: var(--text);
    border-radius: 50%;

    cursor: pointer; 
    transition: all ease-in-out .2s;
    outline: 0.125em solid transparent;
    outline-offset: 0.125em;
    border: none;
    }
    &::-moz-range-thumb {

    -webkit-appearance: none;
    appearance: none;
    height: 1em; 
    width: 1em; 

    background: var(--text);
    border-radius: 50%;

    cursor: pointer; 
    transition: all ease-in-out .2s;
    outline: 0.125em solid transparent;
    outline-offset: 0.125em;
    border: none;
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
    &:focus {
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
  }
  `
  return (
    <div class="wrapper">
      <div class="labelRow">
        <LabelText>{props.label}</LabelText>
        <Show when={props.showValue !== false}>
          <div class="value">{props.value}</div>
        </Show>
      </div>
      <div class="sliderBar" />
      <div class="valueBar"
        style={{
          "--width": `${((props.value - props.min) / (props.max - props.min)) * 100}`,
        }}
      />
      <input
        ref={Input!}
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
        onInput={props.onChange}
      />
    </div>
  );
}
