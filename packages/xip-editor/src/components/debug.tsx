import { createMemo, Switch, Match, For, Show } from 'solid-js';
import { Cluster, Stack } from '@xypnox/xip-ui';
import styles from './debug.module.css';

type NObj = Record<string, any>

interface Props<T, P> {
  theme: T
  palette: P
}

export const ThemeDebug = <T extends NObj, P extends NObj>(props: Props<T, P>) => {
  return <div class={styles.wrapper}>
    <h2>Theme Debug</h2>
    <h3>Palette</h3>
    <ObjectDebug obj={props.palette} />
    <h3>Base</h3>
    <ObjectDebug obj={props.theme.base} />
    <h3>Mode</h3>
    <div class={`${styles.noshade} ${styles.row}`} style={{ gap: '2rem', 'justify-content': 'flex-start' }}>
      <Stack>
        <h4>Light</h4>
        <ObjectDebug obj={props.theme.vars.light} />
      </Stack>
      <Stack>
        <h4>Dark</h4>
        <ObjectDebug obj={props.theme.vars.dark} />
      </Stack>
    </div>
  </div>
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

const ValueDebug = (props: { value: string, title?: string }) => {
  const typeValue = createMemo(() => {
    return detectCssValue(props.value)
  })

  return <Cluster
    title={props.title}
    classList={{
      [styles.noshade]: typeValue().type === 'color',
    }}>
    <Show when={typeValue().type === 'color'}>
      <div class={styles.colorPreview} style={{
        '--color': props.value
      }} />
    </Show>
    <Show when={typeValue().type === 'length' || typeValue().type === 'percentage' || typeValue().type === 'unknown'}>
      {props.value}
    </Show>
  </Cluster>
}

const ObjectDebug = (props: { obj: any, title?: string }) => {
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
      <ValueDebug title={props.title} value={props.obj.toString()} />
    </Match>
    <Match when={typeObj() === 'function'}>
      Function {props.obj.name}
    </Match>
    <Match when={typeObj() === 'array'}>
      <Cluster title={props.title} style={{ gap: '0' }} class={styles.noshade}>
        <For each={props.obj}>
          {(item, i) => {
            return <ObjectDebug title={i().toString()} obj={item} />
          }}
        </For>
      </Cluster>
    </Match>
    <Match when={typeObj() === 'object'}>
      <Stack>
        <For each={Object.keys(props.obj)}>
          {key => {
            return <Cluster>
              <div class={styles.key}>{key}</div>
              <ObjectDebug obj={props.obj[key]} />
            </Cluster>
          }}
        </For>
      </Stack>
    </Match>
  </Switch>
}
