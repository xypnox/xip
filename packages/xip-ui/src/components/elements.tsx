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
  padding: 0.25em 0.5em;
  border-radius: 0.5em;
`

const Button = styled('button')`
  ${baseElementStyles}
`

export { Row, Column, Button, baseElementStyles }
