import { JSX, mergeProps, splitProps } from 'solid-js';
import styles from './style.module.css';

/**
 * Stack in vertical direction
 * Add a stack-split-child from 'stack.module.css' to the children to separate into top and bottom'
 */
export const Stack = (props: JSX.HTMLAttributes<HTMLDivElement> & { space?: string }) => {
  const [local, rest] = splitProps(props, ['space', 'class'])
  const newProps = mergeProps({
    class: `${styles.stack} ${local.class ?? ''}`,
    style: {
      ...(local.space ? { '--space': local.space } : {})
    }
  }, rest)
  return (
    <div {...newProps}>
      {props.children}
    </div>
  )
}

