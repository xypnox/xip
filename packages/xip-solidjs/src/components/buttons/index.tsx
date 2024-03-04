import { ParentProps, splitProps } from "solid-js";

import styles from "./styles.module.css";

interface ButtonLocalProps {
  icon?: boolean;
  primary?: boolean;
  size?: "small" | "medium" | "large";
  rounded?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

type ButtonProps = ButtonLocalProps & ParentProps<"button">;

export const Button = (props: ButtonProps) => {
  const [local, ...rest] = splitProps(props, ["icon", "primary", "size", "rounded", "disabled", "loading", "children"] as const)

  return (
    <button
      class={styles.button}
      classList={{
        [styles.primary]: local.primary,
        [styles.rounded]: local.rounded,
        [styles.loading]: local.loading,
        [styles.icon]: local.icon,
      }}
      disabled={local.disabled}
      {...rest}
    >
      {local.children}
    </button>
  )
};
