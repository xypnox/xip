import { JSX } from 'solid-js';
// import { styled } from 'solid-styled-components';
import { css } from 'solid-styled';


// const Row =  styled('div')`
const Row = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
  css`
    div {
      display: flex;
      flex-direction: row;

      &.wrap {
        flex-wrap: wrap;
      }
    }
  `
  return <div {...props} />
}

// const Column = styled('div')`
const Column = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
  css`
    div {
      display: flex;
      flex-direction: column;
    }
  `
  return <div {...props} />
}

// const baseElementStyles = `
//   padding: 0.5em 1em;
//   border-radius: 0.5em;
// `

// const generateClass = (cls: string) => `
//   &.${cls} {
//     color: var(--${cls}-o);
//     border-color: var(--${cls}-b);
//     background-color: var(--${cls}-b);
//     &:hover {
//       border-color: var(--${cls}-s-6);
//       background-color: var(--${cls}-s-6);
//     }
//     &:active {
//       border-color: var(--${cls}-s-4);
//       background-color: var(--${cls}-s-4);
//     }
//     &:focus {
//       outline-color: var(--${cls}-b);
//     }
//   }
// `

// const Button = styled('button')`
const Button = (props: JSX.ButtonHTMLAttributes<HTMLButtonElement>) => {
  css`
  button {
    display: flex;
    align-items: center;
    gap: 0.5em;

    font-family: inherit;
    font-size: 1em;
    border: 0.125em solid transparent;

    transition: background-color 0.2s, border-color 0.2s, color 0.2s;
    transition-timing-function: ease-in-out;
    color: var(--primary-s-3);
    border-color: var(--border);
    background-color: var(--surface-0);

    iconify-icon {
      display: inline-block;
      font-size: 1.2em;
      width: 1em;
      height: 1em;
    }
    
    &:hover {
      color: var(--primary-s-6);
      border-color: var(--primary-s-6);
      background-color: var(--surface-1);
    }

    &:active {
      border-color: var(--primary-s-4);
      background-color: var(--background);
    }

    outline: none;

    &:focus {
      outline: 0.125em solid var(--primary-b);
      outline-offset: 0.125em;
    }

    &.icon {
      padding: 0.5em;
    }

    &.rounded {
      border-radius: 2em;
    }

    &:disabled {
      background-color: transparent;
      border: 2px solid var(--border);
      color: var(--text);
      opacity: 0.66;
    }
  }
`
  return <button {...props} />
}

// const Input = styled('input')`
const Input = (props: JSX.InputHTMLAttributes<HTMLInputElement>) => {
  css`
  input {
    padding: 0.5em;

    font-family: inherit;
    font-size: 1em;
    border: 0.125em solid var(--border);
    background-color: var(--surface-0);
    color: var(--text);
    outline: none;

    &.rounded {
      padding: 0.5em 1em;
      border-radius: 2em;
    }

    &:focus {
      border-color: var(--primary-b);
    }
  }
  `
  return <input {...props} />
}

// const IconInput = styled(Row)`
const IconInput = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
  css`
  div {
    position: relative;
    max-width: 100%;
    &.left {
      input {
        padding-left: 2.25em;
        max-width: 100%;
      }
      iconify-icon {
        position: absolute;
        display: inline-block;

        top: 0.5em;
        left: 0.5em;

        font-size: 1.25em;
        width: 1em;
        height: 1em;
        pointer-events: none;
        color: var(--textS-0);
      }
      input.rounded {
        padding-left: 2.5em;
      }
      &:has(input.rounded) {
        iconify-icon {
          left: 0.75em;
        }
      }
      &:focus-within {
        iconify-icon {
          color: var(--primary-b);
        }
      }
    }
  }
  `
  return <Row {...props} />
}

// const Label = styled('label')`
const Label = (props: JSX.HTMLAttributes<HTMLLabelElement>) => {
  css`label {
    font-family: inherit;
    display: flex;
    flex-direction: column;
    gap: 0.25em;
  }`
  return <label {...props} />
}

// const LabelText = styled('div')`
const LabelText = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
  css`div {
    font-size: 0.9em;
  }`
  return <div {...props} />
}



// const Card = styled(Column)`
const Card = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
  css`div {
    padding: 1em;
    gap: 0.5em;
    background: var(--surface-0);
    color: var(--text);
    border-radius: 0.5em;

    h1, h2, h3, h4, h5, h6, p {
      margin: 0;
    }

    &:has(&) {
      border-radius: calc(2 * 0.5em);
    }

    &:has(& > &) {
      border-radius: calc(4 * 0.5em);
    }

    & > & {
      background: var(--surface-1);
    }
    & > & > & {
      background: var(--surface-2);
    }
  }`
  return <Column {...props} />
}

// &:has(&) {
//   border-radius: calc(3 * 0.5em);
// }
// &:has(&:has(&)) {
//   border-radius: calc(4 * 0.5em);
// }
// & > & {
//   background: var(--surface-1);
// }
// & > & > & {
//   background: var(--surface-2);
// }

export { Row, Column, Button, Input, LabelText, IconInput, Label, Card }
