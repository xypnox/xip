import { splitProps } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import styles from './style.module.css';

export const Input = (props: JSX.HTMLAttributes<HTMLInputElement> & { class?: string, rounded: boolean }) => {
  const [local, rest] = splitProps(props, ['rounded'])
  return (
    <input {...rest} class={`${styles.input} ${props.class}`}
      classList={{
        [styles.rounded]: local.rounded
      }}
    />
  )
}

export const Label = (props: JSX.HTMLAttributes<HTMLLabelElement> & { class?: string }) => {
  <label {...props} class={`${styles.label} ${props.class}`} />
}

export const LabelText = (props: JSX.HTMLAttributes<HTMLDivElement> & { class?: string }) => {
  <div {...props} class={`${styles.label_text} ${props.class}`} />
}
