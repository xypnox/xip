import { JSX } from "solid-js/jsx-runtime";
import styles from "./style.module.css";
import inputStyles from "../input/style.module.css";

interface SwitchProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  checked: boolean;
  onChange: JSX.ChangeEventHandlerUnion<HTMLInputElement, Event>;
}

export const SwitchInp = (props: SwitchProps) => {
  return (
    <label class={`${inputStyles.label} ${styles.switch_label}`}>
      <input type="checkbox" {...props} class={styles.switch_input} />
      <div class={inputStyles.label_text}>{props.label}</div>
    </label>
  );
}
