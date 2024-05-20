import { Editor, ThemeDebug } from "xip-editor";
import { Column } from "xip-ui";
import { palette, theme } from "../theme";

export const ThemeEditor = () => {
  return <Column>
    <Editor />
    <ThemeDebug palette={palette} theme={theme} />
  </Column>
}
