import { onMount, Show, type JSX } from "solid-js";
import styles from './style.module.css';
import inputStyles from '../input/style.module.css';

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
    <label class={styles.range_input_wrapper}>
      <div class={styles.label_row}>
        <div class={inputStyles.label_text}>{props.label}</div>
        <Show when={props.showValue !== false}>
          <div class={styles.value}>{props.value}</div>
        </Show>
      </div>
      <div class={styles.slider_bar} />
      <div
        class={styles.value_bar}
        style={{
          "--width": `${((props.value - props.min) / (props.max - props.min)) * 100}`,
        }}
      />
      <input
        class={styles.range_input}
        ref={Input!}
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
        onInput={props.onChange}
      />
    </label>
  );
}
