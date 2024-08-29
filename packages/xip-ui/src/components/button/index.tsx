import { splitProps, mergeProps } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import styles from './style.module.css';

const getVariantStyles = (variant: 'primary' | 'secondary' | 'tertiary') => ({
  '--variant-o': `var(--${variant}-o)`,
  '--variant-b': `var(--${variant}-b)`,
  '--variant-s-6': `var(--${variant}-s-6)`,
  '--variant-s-4': `var(--${variant}-s-4)`
})

export const Button = (props: JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * The variant of the button to use (color)
   */
  variant?: 'primary' | 'secondary' | 'tertiary'
}) => {
  const [local, rest] = splitProps(props, ['variant', 'class'])

  const newProps = mergeProps({
    style: {
      ...(local.variant ? getVariantStyles(local.variant) : {})
    },
    class: styles.button,
    classList: {
      [styles.variant]: !!local.variant,
    }
  }, rest);

  return (
    <button {...newProps} />
  )
}

