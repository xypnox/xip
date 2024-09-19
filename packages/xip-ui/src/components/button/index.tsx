import { splitProps, mergeProps } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import styles from './style.module.css';

const getVariantStyles = (variant: 'primary' | 'secondary' | 'tertiary') => ({
  '--variant-o': `var(--${variant}-o)`,
  '--variant-b': `var(--${variant}-b)`,
  '--variant-s-6': `var(--${variant}-s-6)`,
  '--variant-s-4': `var(--${variant}-s-4)`
})

export const Button = (props: Omit<JSX.ButtonHTMLAttributes<HTMLButtonElement>, "style"> & {
  /**
   * The variant of the button to use (color)
   */
  variant?: 'primary' | 'secondary' | 'tertiary'

  style?: JSX.CSSProperties
}) => {
  const [local, rest] = splitProps(props, ['variant', 'class', 'classList', 'style'])
  const newProps = mergeProps({
    style: {
      ...(local.variant ? getVariantStyles(local.variant) : {}),
      ...local.style,
    },
    class: `${styles.button} ${local.class}`,
    classList: {
      ...local.classList,
      [styles.variant]: !!local.variant,
    }
  }, rest);

  return (
    <button {...newProps} />
  )
}

