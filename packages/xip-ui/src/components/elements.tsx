import { styled } from 'solid-styled-components';


const Row = styled('div')`
  display: flex;
  flex-direction: row;
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

  font-family: inherit;
  font-size: 1em;
  border: 2px solid transparent;

  transition: background-color 0.2s, border-color 0.2s, color 0.2s;
  transition-timing-function: ease-in-out;
  color: var(--primary-b);
  border-color: var(--border);
  background-color: var(--surface-0);
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
    outline: 2px solid var(--primary-b);
    outline-offset: 2px;
  }

  ${['primary', 'secondary', 'tertiary'].map(generateClass).join('\n')}

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
  border: 2px solid var(--border);
  background-color: var(--surface-0);
  color: var(--text);
  outline: none;

  &:focus {
    border-color: var(--primary-b);
  }
`

const Label = styled('label')`
  font-family: inherit;
  font-size: 0.9em;
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  * {
    font-size: 1em;
  }
`

export { Row, Column, Button, Input, Label, baseElementStyles }
