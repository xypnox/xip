import { ComponentProps, JSX } from "solid-js";
import { Button, Column, Row, Input, Label, LabelText, Card, SwitchInp } from "xip-ui";
import { css } from "solid-styled";

const PreviewWrapper = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
  css`
    div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      padding: 1em;
      gap: 2em;
      background: var(--background);
      color: var(--text);
      border: 1px solid var(--border);
      border-radius: 1.5em;
      h3, h4, h5, p {
        margin: 0;
      }
      & {
        gap: 1em;
      }
      div.card {
        gap: 0.5em;
      }
    }
  `
  return <div {...props} />
}

interface ThemePreviewProps extends ComponentProps<'div'> { }
const ThemePreview = (props: ThemePreviewProps) => {
  return <PreviewWrapper {...props}>
    <h3>{props.class}</h3>
    <Column>
      <Label>
        <LabelText>Email</LabelText>
        <Input name="email" type="text" autocomplete="true" />
      </Label>
      <Label>
        <LabelText>Password</LabelText>
        <Input name="password" type="password" autocomplete="true" />
      </Label>
      <SwitchInp label="Remember Me" checked onChange={() => { }} />
    </Column>
    <Row style={{ gap: '1em', 'flex-wrap': 'wrap' }}>
      <Button class="primary">Primary</Button>
      <Button class="secondary">Secondary</Button>
      <Button class="tertiary">Tertiary</Button>
    </Row>
    <Row style={{ gap: '1em', 'flex-wrap': 'wrap' }}>
      <Button>Basic</Button>
      <Button disabled>Disabled</Button>
    </Row>
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
  </PreviewWrapper>;

}

const PreviewRow = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
  css`
    div.row {
      width: 100%;
      gap: 1em;
      @media (max-width: 768px) {
        flex-direction: column;
      }
    }
  `
  return <Row {...props} />
}

export const ThemePreviews = () => (
  <PreviewRow style={{ gap: '1em' }}>
    <ThemePreview class="light-mode" />
    <ThemePreview class="dark-mode" />
  </PreviewRow>
)

export const Editor = () => {
  return <div>
    Editor [IN ACTIVE DEVELOPMENT]
    <h2>Theme Preview</h2>
    <ThemePreviews />
  </div>;
}
