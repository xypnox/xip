import { JSX, mergeProps, ParentProps, splitProps } from 'solid-js';
import styles from './style.module.css';

interface LocalProps {
  space?: string
}

/**
 * Cluster in horizontal direction
 */
export const Cluster = (props: JSX.HTMLAttributes<HTMLDivElement> & ParentProps & LocalProps) => {
  const [local, rest] = splitProps(props, ['space', 'style'])

  const newProps = mergeProps({
    style: {
      '--space': local.space,
    },
    class: styles.cluster
  }, rest);

  return (
    <div {...newProps} />
  )
}

