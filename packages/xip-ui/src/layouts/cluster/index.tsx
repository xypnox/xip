import { JSX, mergeProps, ParentProps, splitProps } from 'solid-js';
import styles from './style.module.css';

interface LocalProps {
  space?: string
  style?: JSX.CSSProperties
}

/**
 * Cluster in horizontal direction
 */
export const Cluster = (props: JSX.HTMLAttributes<HTMLDivElement> & ParentProps & LocalProps) => {
  const [local, rest] = splitProps(props, ['space', 'style', 'class'])

  const newProps = mergeProps({
    style: { '--space': local.space, ...(local.style as JSX.CSSProperties) },
    class: `${styles.cluster} ${local.class ?? ''}`
  }, rest);

  return (
    <div {...newProps} />
  )
}

