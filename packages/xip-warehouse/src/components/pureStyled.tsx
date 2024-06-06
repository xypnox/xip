import { type JSX } from "solid-js";
import { css } from "solid-styled";

const baseElementStyles = "padding: 0.5em 1em; border-radius: 0.5em;"

const generateClass = (cls: string) => css`
  button.${cls} {
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

export const Button2 = (props: JSX.HTMLAttributes<HTMLButtonElement> & {
  primary?: boolean
  secondary?: boolean
  tertiary?: boolean
}) => {
  css`
    button {
      display: flex;
      align-items: center;
      gap: 0.5em;

      font-family: inherit;
      font-size: 1em;
      border: 0.125em solid transparent;

      transition: background-color 0.2s, border-color 0.2s, color 0.2s;
      transition-timing-function: ease-in-out;
      color: var(--primary-s-3);
      border-color: var(--border);
      background-color: var(--surface-0);
      outline: none;

      iconify-icon {
        display: inline-block;
        font-size: 1.2em;
        width: 1em;
        height: 1em;
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


      &:focus {
        outline: 0.125em solid var(--primary-b);
        outline-offset: 0.125em;
      }


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
    }
  `
  props.primary && generateClass('primary');
  props.tertiary && generateClass('tertiary');
  props.secondary && generateClass('secondary')
  return <button {...props} />
}

