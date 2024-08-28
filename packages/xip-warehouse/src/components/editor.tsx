import { Editor, ThemeDebug } from "xip-editor";
import { Stack } from "xip-ui";
import { palette, theme } from "../theme";

export const ThemeEditor = () => {
  return <Stack>
    <Editor />
    <ThemeDebug palette={palette} theme={theme} />
  </Stack>
}

