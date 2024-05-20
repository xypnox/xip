import { ComponentProps } from "solid-js";
import { styled } from "solid-styled-components";
import { Button, Column, Row, Input, Label } from "xip-ui";

const Card = styled(Column)`
  padding: 1em;
  gap: 0.5em;
  background: var(--surface-0);
  color: var(--text);
  border-radius: 0.5em;

  &:has(&) {
    border-radius: calc(2 * 0.5em);
  }
  &:has(&:has(&)) {
    border-radius: calc(4 * 0.5em);
  }
  & > & {
    background: var(--surface-1);
  }
  & > & > & {
    background: var(--surface-2);
  }
`

const PreviewWrapper = styled(Column)`
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
  ${Column.class} {
    gap: 1em;
  }
  ${Card.class} {
    gap: 0.5em;
  }
`

interface ThemePreviewProps extends ComponentProps<'div'> { }
const ThemePreview = (props: ThemePreviewProps) => {
  return <PreviewWrapper {...props}>
    <h3>{props.class}</h3>
    <Column>
      <Label>
        Email
        <Input type="text" placeholder="designer@web.com" />
      </Label>
      <Label>
        Password
        <Input type="password" placeholder="HardNut2CrakersExtremely" />
      </Label>
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

const PreviewRow = styled(Row)`
  width: 100%;
  gap: 1em;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

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
