import { type JSX } from "solid-js";
import { css } from "solid-styled";
import { Label, LabelText } from "./base";

// const generateClass = (cls: string) => `
//   &.${cls}:checked {
//     color: var(--${cls}-o);
//     border-color: var(--${cls}-b);
//     background-color: var(--${cls}-b);
//     &:hover {
//       border-color: var(--${cls}-s-6);
//       background-color: var(--${cls}-s-6);
//     }
//     &:active {
//       border-color: var(--${cls}-s-4);
//       background-color: var(--${cls}-s-4);
//     }
//     &:focus {
//       outline-color: var(--${cls}-b);
//     }
//   }
// `



interface SwitchProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  checked: boolean;
  onChange: JSX.ChangeEventHandlerUnion<HTMLInputElement, Event>;
}

/* ${['primary', 'secondary', 'tertiary'].map(generateClass).join('\n')} */
export const SwitchInp = (props: SwitchProps) => {
  css`input[type="checkbox"] {
    font-size: inherit;
    appearance: none;
    width: 1em;
    height: 1em;
    margin: 0;
    background: var(--surface-0);
    outline: none;
    z-index: 4;
    border-radius: 0.25em;
    transition: background-color 0.2s, border-color 0.2s, color 0.2s;
    cursor: pointer;
    border: 0.1em solid var(--border);

    &:hover {
      border-color: var(--primary-s-6);
      background: var(--surface-1);
    }

    &:focus {
      outline: 0.125em solid var(--primary-b);
      outline-offset: 0.125em;
    }


    &:checked {
      /* Check width is variable to ensure it is visible on smallest sizes */
      --check-width: max(0.1em, 2px);
      --check-color: var(--surface-0);
      border-color: var(--text);
      background: var(--text);
      &::before {
        position: absolute;
        content: '';
        width: 0.25em;
        height: 0.5em;
        margin-left: 0.24em;
        margin-top: 0.05em;
        transform: rotate(45deg);
        border-bottom: var(--check-width) solid var(--check-color);
        border-right: var(--check-width) solid var(--check-color);
        border-radius: 0 0 var(--check-width) 0;
      }

      &:hover {
        background: var(--textS-0);
        border-color: var(--textS-0);
      }
    }
  }`

  return (
    <Label class="switch">
      <input type="checkbox" {...props} />
      <LabelText>{props.label}</LabelText>
    </Label>
  );
}
