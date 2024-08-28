import { Editor, ThemeDebug } from "@xypnox/xip-editor";
import { Stack } from "@xypnox/xip-ui";
import { palette, theme } from "../theme";

export const ThemeEditor = () => {
  return <Stack>
    <Editor />
    <ThemeDebug palette={palette} theme={theme} />
  </Stack>
}

