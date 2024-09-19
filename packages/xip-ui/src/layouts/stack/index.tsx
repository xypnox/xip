import { JSX, mergeProps, ParentProps, splitProps } from 'solid-js';
import styles from './style.module.css';

/**
 * Stack in vertical direction
 * Add a stack-split-child from 'stack.module.css' to the children to separate into top and bottom'
 */
export const Stack = (props: JSX.HTMLAttributes<HTMLDivElement> & ParentProps) => {
  const [local, rest] = splitProps(props, ['class'])

  const newProps = mergeProps({
    class: `${styles.stack} ${local.class ?? ''}`,
  }, rest)

  return (
    <div {...newProps} />
  )
}

