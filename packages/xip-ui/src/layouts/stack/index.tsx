import { ParentProps } from 'solid-js';
import styles from './style.module.css';

/**
 * Stack in vertical direction
 * Add a stack-split-child from 'stack.module.css' to the children to separate into top and bottom'
 */
export const Stack = (props: ParentProps & { space?: string }) => {
  return (
    <div
      class={styles.stack}
      style={{ '--space': props.space }}
    >
      {props.children}
    </div>
  )
}

