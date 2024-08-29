import { ComponentProps, splitProps } from "solid-js";
import styles from "./editor.module.css";
import { Button, Cluster, Stack, Input, Label, LabelText, Card, SwitchInp } from "@xypnox/xip-ui";


interface ThemePreviewProps extends ComponentProps<'div'> {
  mode: 'light' | 'dark'
}

const ThemePreview = (props: ThemePreviewProps) => {
  const [local, rest] = splitProps(props, ['mode'])
  return <Cluster {...rest} class={`${styles.previewWrapper} ${local.mode}-mode`}>
    <h3>{props.mode}</h3>
    <Stack>
      <Label>
        <LabelText>Email</LabelText>
        <Input name="email" type="text" autocomplete="true" />
      </Label>
      <Label>
        <LabelText>Password</LabelText>
        <Input name="password" type="password" autocomplete="true" />
      </Label>
      <SwitchInp label="Remember Me" checked onChange={() => { }} />
    </Stack>
    <Cluster style={{ gap: '1em', 'flex-wrap': 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
    </Cluster>
    <Cluster style={{ gap: '1em', 'flex-wrap': 'wrap' }}>
      <Button>Basic</Button>
      <Button disabled>Disabled</Button>
    </Cluster>
    <Card>
      <p>Card</p>
    </Card>
    <Card>
      <p>Notice how the borders round</p>
      <Card>
        <p>Card in card</p>
      </Card>
    </Card>
    <Card>
      <h3>Card</h3>
      <p>
        This is a card element. It has a background.
      </p>
      <Card>
        <h4>Card</h4>
        <p>This has been implemented to only a depth of 3.</p>
        <Card>
          <h5>Card</h5>
          <p>You have bigger problems if you need 4.</p>
        </Card>
      </Card>
    </Card>
  </Cluster>;

}

export const ThemePreviews = () => (
  <Cluster class={styles.previewRow} style={{ gap: '1em' }}>
    <ThemePreview mode="light" />
    <ThemePreview mode="dark" />
  </Cluster>
)

export const Editor = () => {
  return <div>
    Editor [IN ACTIVE DEVELOPMENT]
    <h2>Theme Preview</h2>
    <ThemePreviews />
  </div>;
}
