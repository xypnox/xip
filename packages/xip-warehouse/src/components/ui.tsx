import { Button, RangeInput, Card, Column as UIColumn, Input, Label, Row as UIRow, IconInput, LabelText } from "xip-ui";
import { styled } from 'solid-styled-components';
import { createSignal, type ComponentProps, type ParentProps } from "solid-js";

const Row = styled(UIRow)`
  gap: 1em;
  flex-wrap: wrap;
`

const Column = styled(UIColumn)`
  gap: 1em;
`


const ScaledRepitition = (props: ParentProps & {
  limit?: number
  showSize?: boolean
  column?: boolean
} & ComponentProps<typeof Row>) => {
  return (
    <Row style={{
      'align-items': props.column ? 'flex-start' : 'center',
      'flex-direction': props.column ? 'column' : 'row',
      'gap': '1em',
    }} {...props}>
      {[-2, -1, 0, 1, 2, 3, 4, 5]
        .slice(0, props.limit ?? 5)
        .reverse()
        .map((step) => (
          <div style={{ 'font-size': `var(--font-size-${step})`, "margin": '0.25em 0', "max-width": "100%" }}>
            {props.showSize ? `--font-size-${step}` : props.children}
          </div>
        ))}
    </Row>
  )
}

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
const [inpValue, setInpValue] = createSignal('designer@developer.cool');

export const UIElements = () => (
  <Column>

    <h2>Typography</h2>

    <h3>Font Scale</h3>
    <ScaledRepitition column limit={8} showSize> </ScaledRepitition>
    <h3>Font Family</h3>
    <ScaledRepitition limit={5}><div style={{
      'font-family': 'var(--font-heading)',
    }}>Heading</div></ScaledRepitition>
    <ScaledRepitition limit={5}><div style={{
      'font-family': 'var(--font-family)',
    }}>Content</div></ScaledRepitition>
    <ScaledRepitition limit={5}><div style={{
      'font-family': 'var(--font-mono)',
    }}>Mono</div></ScaledRepitition>
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
      <ScaledRepitition limit={8}>
        <Button class="icon secondary rounded">
          <iconify-icon icon="ph:heart-duotone" />
        </Button>
      </ScaledRepitition>
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
      <ScaledRepitition>
        <Button class="rounded"> <iconify-icon icon="ph:resize-duotone" /> Resize </Button>
      </ScaledRepitition>
    </Column>

    <h2>Inputs</h2>
    <Column>
      <Input type="text" value="text" />
      <Row style={{ "align-items": "flex-end" }}>
        <Label>
          <LabelText>Email</LabelText>
          <Input type="text" />
        </Label>
        <Label>
          <LabelText>Username</LabelText>
          <IconInput class="left">
            <iconify-icon icon="ph:at-duotone" />
            <Input type="text" />
          </IconInput>
        </Label>
      </Row>
      <Label>
        <LabelText>Password</LabelText>
        <Input type="password" />
      </Label>
      <ScaledRepitition>
        <IconInput class="left">
          <iconify-icon icon="ph:tree" />
          <Input type="text" placeholder="Sycamore" class="rounded" />
        </IconInput>
      </ScaledRepitition>
      <ScaledRepitition>
        <Label>
          <LabelText>Input</LabelText>
          <Input type="text" value={inpValue()} onInput={(e) => setInpValue(e.currentTarget.value)} />
        </Label>
      </ScaledRepitition>

      <RangeInput
        label="Range"
        min={0}
        max={100}
        value={value()}
        onChange={(e) => setValue(parseInt(e.currentTarget.value, 10))}
        step={1}
      />

      <ScaledRepitition>
        <RangeInput
          label="Deranged"
          min={0}
          max={100}
          value={value()}
          onChange={(e) => setValue(parseInt(e.currentTarget.value, 10))}
          step={1}
        />
      </ScaledRepitition>
    </Column>

    <h2>Cards</h2>
    <Card>
      <h3>Card</h3>
      <p>Card is a nice surface to make stuff off of.</p>
    </Card>
    <ScaledRepitition>
      <Card>
        <Card>
          <Card>
            <p>Card</p>
          </Card>
        </Card>
      </Card>
    </ScaledRepitition>
  </Column>
)

