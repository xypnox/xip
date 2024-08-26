import { JSX } from 'solid-js/jsx-runtime';
import styles from './style.module.css';

export const Button = (props: JSX.HTMLAttributes<HTMLButtonElement> & { class?: string }) => {
  return (
    <button {...props} class={`${styles.button} ${props.class}`} />
  )
}

