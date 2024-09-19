import { JSX, mergeProps, ParentProps, splitProps } from 'solid-js';
import styles from './style.module.css';

/**
 * Cluster in horizontal direction
 */
export const Cluster = (props:
  JSX.HTMLAttributes<HTMLDivElement>
  & ParentProps) => {
  const [local, rest] = splitProps(props, ['class'])

  const newProps = mergeProps({
    class: `${styles.cluster} ${local.class ?? ''}`
  }, rest);

  return (
    <div {...newProps} />
  )
}

