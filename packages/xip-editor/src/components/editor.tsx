import { ComponentProps } from "solid-js";
import styles from "./editor.module.css";
import { Button, Cluster, Stack, Input, Label, LabelText, Card, SwitchInp } from "@xypnox/xip-ui";


interface ThemePreviewProps extends ComponentProps<'div'> { }

const ThemePreview = (props: ThemePreviewProps) => {
  return <div {...props} class={styles.previewWrapper}>
    <h3>{props.class}</h3>
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
      <Button class="primary">Primary</Button>
      <Button class="secondary">Secondary</Button>
      <Button class="tertiary">Tertiary</Button>
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
  </div>;

}

export const ThemePreviews = () => (
  <div class={styles.previewRow} style={{ gap: '1em' }}>
    <ThemePreview class="light-mode" />
    <ThemePreview class="dark-mode" />
  </div>
)

export const Editor = () => {
  return <div>
    Editor [IN ACTIVE DEVELOPMENT]
    <h2>Theme Preview</h2>
    <ThemePreviews />
  </div>;
}
