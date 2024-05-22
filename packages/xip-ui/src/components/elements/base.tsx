import { styled } from 'solid-styled-components';


const Row = styled('div')`
  display: flex;
  flex-direction: row;

  &.wrap {
    flex-wrap: wrap;
  }
`

const Column = styled('div')`
  display: flex;
  flex-direction: column;
`

const baseElementStyles = `
  padding: 0.5em 1em;
  border-radius: 0.5em;
`

const generateClass = (cls: string) => `
  &.${cls} {
    color: var(--${cls}-o);
    border-color: var(--${cls}-b);
    background-color: var(--${cls}-b);
    &:hover {
      border-color: var(--${cls}-s-6);
      background-color: var(--${cls}-s-6);
    }
    &:active {
      border-color: var(--${cls}-s-4);
      background-color: var(--${cls}-s-4);
    }
    &:focus {
      outline-color: var(--${cls}-b);
    }
  }
`

const Button = styled('button')`
  ${baseElementStyles}

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
    font-size: 1.2em;
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

  ${['primary', 'secondary', 'tertiary'].map(generateClass).join('\n')}

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
`

const Input = styled('input')`
  ${baseElementStyles}
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
`

const IconInput = styled(Row)`
  position: relative;
  max-width: 100%;
  &.left {
    ${Input.class} {
      padding-left: 2.25em;
      max-width: 100%;
    }
    iconify-icon {
      position: absolute;
      top: 0.5em;
      font-size: 1.25em;
      left: 0.5em;
      pointer-events: none;
      color: var(--textS-0);
    }
    ${Input.class}.rounded {
      padding-left: 2.5em;
    }
    &:has(${Input.class}.rounded) {
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
`

const Label = styled('label')`
  font-family: inherit;
  display: flex;
  flex-direction: column;
  gap: 0.25em;
`

const LabelText = styled('div')`
  font-size: 0.9em;
`

const Card = styled(Column)`
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
`

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

export { Row, Column, Button, Input, LabelText, IconInput, Label, baseElementStyles, Card }
