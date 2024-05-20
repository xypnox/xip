import { createMemo, Show, Switch, Match, For } from 'solid-js';
import type { Fn, ThemeFn, PaletteFn } from 'themescura';
import { styled } from 'solid-styled-components';

interface Props<B extends Fn, M extends Fn> {
  theme: ThemeFn<B, M>
  palette: PaletteFn<B, M>
}

const Row = styled('div')`
  display: flex;
  gap: 1em;
  justify-content: space-between;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
  max-width: 100%;
  padding: 4px;
  &:hover {
    box-shadow: inset 0px 0px 0px 1px var(--primaryLight);
  }
  &.noshade {
    padding: 0em;
    border: none;
    box-shadow: none;
  }
`

const Key = styled('div')`
  font-style: italic;
  color: var(--primary-3);
`

const Column = styled('div')`
  display: flex;
  width: max-content;
  max-width: 100%;
  flex-direction: column;
  padding: 4px;
  box-shadow: inset 0px 0px 0px 1px var(--border);
`

const ColorPreview = styled('div')`
  background: var(--color);
  width: 2rem;
  height: 2rem;
`

const Wrapper = styled('div')`
  position: relative;
  font-family: var(--font-mono);
  font-size: var(--font-size--1);
  max-width: 100%;

  h4 {
    margin: 0;
    padding: 4px;
  }
`

export const ThemeDebug = <B extends Fn, M extends Fn>(props: Props<B, M>) => {
  // console.log('Theme:', props.theme)

  return <Wrapper>
    <h2>Theme Debug</h2>
    <h3>Palette</h3>
    <ObjectDebug obj={props.palette} />
    <h3>Base</h3>
    <ObjectDebug obj={props.theme.base} />
    <h3>Mode</h3>
    <Row class="noshade" style={{ gap: '2rem', 'justify-content': 'flex-start' }}>
      <Column>
        <h4>Light</h4>
        <ObjectDebug obj={props.theme.vars.light} />
      </Column>
      <Column>
        <h4>Dark</h4>
        <ObjectDebug obj={props.theme.vars.dark} />
      </Column>
    </Row>
  </Wrapper>
}

const detectCssValue = (value: string): {
  type: 'color' | 'length' | 'percentage' | 'unknown'
} => {
  if (value.startsWith('#') || value.startsWith('rgb') || value.startsWith('hsl') || value.startsWith('oklch')) {
    return { type: 'color' }
  } else if (value.endsWith('px') || value.endsWith('em') || value.endsWith('rem') || value.endsWith('vh') || value.endsWith('vw')) {
    return { type: 'length' }
  } else if (value.endsWith('%')) {
    return { type: 'percentage' }
  }
  return { type: 'unknown' }
}

const ValueDebug = (props: { value: string }) => {
  const typeValue = createMemo(() => {
    return detectCssValue(props.value)
  })

  return <Row classList={{
    noshade: typeValue().type === 'color'
  }}>
    <Show when={typeValue().type === 'color'}>
      <ColorPreview style={{
        '--color': props.value
      }} />
    </Show>
    <Show when={typeValue().type === 'length' || typeValue().type === 'percentage' || typeValue().type === 'unknown'}>
      {props.value}
    </Show>
  </Row>
}

const ObjectDebug = (props: { obj: any }) => {
  const typeObj = createMemo(() => {
    if (props.obj === null) {
      return 'null'
    } else if (Array.isArray(props.obj)) {
      return 'array'
    }
    return typeof props.obj
  })

  return <Switch fallback={<div>{JSON.stringify(props.obj)}</div>}>
    <Match when={typeObj() === 'string' || typeObj() === 'number' || typeObj() === 'boolean'}>
      <ValueDebug value={props.obj} />
    </Match>
    <Match when={typeObj() === 'function'}>
      Function {props.obj.name}
    </Match>
    <Match when={typeObj() === 'array'}>
      <Row style={{ gap: '0' }} class="noshade">
        <For each={props.obj}>
          {item => {
            return <ObjectDebug obj={item} />
          }}
        </For>
      </Row>
    </Match>
    <Match when={typeObj() === 'object'}>
      <Column>
        <For each={Object.keys(props.obj)}>
          {key => {
            return <Row>
              <Key>{key}</Key>
              <ObjectDebug obj={props.obj[key]} />
            </Row>
          }}
        </For>
      </Column>
    </Match>
  </Switch>
}
