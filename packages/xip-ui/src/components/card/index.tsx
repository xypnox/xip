import { JSX } from 'solid-js/jsx-runtime';
import styles from './style.module.css';

export const Card = (props: JSX.HTMLAttributes<HTMLDivElement> & { class?: string }) => {
  return (
    <div {...props} class={`${styles.card} ${props.class}`} />
  )
}
