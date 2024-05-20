import { Editor, ThemeDebug } from "xip-editor";
import { palette, theme } from "../theme";

export const ThemeEditor = () => {
  return <><Editor />
    <ThemeDebug palette={palette} theme={theme} />
  </>
}
