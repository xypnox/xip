import { Button, RangeInput, Card, Column as UIColumn, Input, Label, Row as UIRow } from "xip-ui";
import { styled } from 'solid-styled-components';
import { createSignal, type ComponentProps, type ParentProps } from "solid-js";

const Row = styled(UIRow)`
  gap: 1rem;
  flex-wrap: wrap;
`

const Column = styled(UIColumn)`
  gap: 1rem;
`

interface RepProps extends ParentProps {
  buttonProps?: ComponentProps<typeof Button>
}

const ButtonRepetition = (props: RepProps) => (
  <Row>
    <Button {...props.buttonProps}>{props.children}</Button>
    <Button disabled {...props.buttonProps}>{props.children}</Button>
    <Button {...props.buttonProps} class={`primary ${props.buttonProps?.class}`}>{props.children}</Button>
    <Button {...props.buttonProps} class={`secondary ${props.buttonProps?.class}`}>{props.children}</Button>
    <Button {...props.buttonProps} class={`tertiary ${props.buttonProps?.class}`}>{props.children}</Button>
  </Row>
)

const [value, setValue] = createSignal(50);

export const UIElements = () => (
  <Column>

    <h2>Layout</h2>

    <Row>
      <div>Row</div>
      <div>Elements 1</div>
      <div>Elements 2</div>
      <div>Elements 3</div>
    </Row>

    <h2>Buttons</h2>
    <Column>
      <p>Classic Buttons</p>
      <ButtonRepetition>Button</ButtonRepetition>
      <ButtonRepetition buttonProps={{ class: 'rounded' }}>Button</ButtonRepetition>
      <br />
      <p>Buttons with icons</p>
      <ButtonRepetition buttonProps={{ class: 'icon' }}>
        <iconify-icon icon="ph:gift-duotone" />
      </ButtonRepetition>
      <ButtonRepetition buttonProps={{ class: 'icon rounded' }}>
        <iconify-icon icon="ph:heart-duotone" />
      </ButtonRepetition>
      <br />
      <p>Buttons with icon text and Rounded Edges</p>
      <ButtonRepetition buttonProps={{ class: 'rounded' }}>
        <iconify-icon icon="ph:play-duotone" />
        Play
      </ButtonRepetition>
      <ButtonRepetition buttonProps={{}}>
        <iconify-icon icon="ph:play-duotone" />
        Play
      </ButtonRepetition>
    </Column>

    <h2>Inputs</h2>
    <Column>
      <Label>
        Email
        <Input type="text" placeholder="designer@web.com" />
      </Label>
      <Label>
        Password
        <Input type="password" placeholder="HardNut2CrakersExtremely" />
      </Label>

      <RangeInput
        label="Range"
        min={0}
        max={100}
        value={value()}
        onChange={(e) => setValue(parseInt(e.currentTarget.value, 10))}
        step={1}
      />
    </Column>

    <h2>Cards</h2>
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
  </Column>
)

