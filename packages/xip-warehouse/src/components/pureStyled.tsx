import type { JSX } from "solid-js";
import { css } from "solid-styled";

export const Button = (props: JSX.HTMLAttributes<HTMLButtonElement>) => {
  css`
    button {
      background-color: #4caf50;
      border: none;
      color: white;
  }`;
  return <button {...props} />;
}
